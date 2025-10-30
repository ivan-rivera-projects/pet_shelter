import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createApplication } from "../services/api";

const AdoptionForm = ({ pets, loading }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pet: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (e.target.name === "pet") {
      setFormData({ ...formData, [name]: JSON.parse(value) });
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      // Create application object matching API requirements
      const newApplication = {
        applicant_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        pet_id: String(formData.pet.id),
        pet_image: formData.pet.image,
        pet_name: formData.pet.name,
        species: formData.pet.species,
      };

      // Submit to API
      await createApplication(newApplication);

      // Success! Redirect to applications page
      alert('Application submitted successfully!');
      navigate('/applications');
    } catch (err) {
      console.error('Failed to submit application:', err);
      setError('Failed to submit application. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '10px',
          background: 'linear-gradient(135deg, #9ff5c0 0%, #07704d 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontSize: '2rem',
          fontWeight: '700'
        }}>
          Adoption Application
        </h2>
        {error ? <div className="error" style={{ color: 'red', marginBottom: '10px' }}>{error}</div> : null}
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Your Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="123-456-7890"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="petId">Select a Pet:</label>
          <select
            id="pet"
            name="pet"
            // value={formData.petId}
            onChange={handleChange}
            required
            defaultValue=""
          >
            <option value="" disabled>
              Choose a pet
            </option>
            {pets.map((pet) => (
              <option key={pet.id} value={JSON.stringify(pet)}>
                {pet.name} (ID: {pet.id})
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <button type="submit" disabled={submitting || loading}>
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdoptionForm;
