import daysInShelter from "../utils";
import { useState } from "react";
import { getPetImagesUrl } from "../services/api";

// Get S3 bucket URL from environment
const S3_BUCKET_URL = getPetImagesUrl();

const Pets = ({ pets, loading, error }) => {
  const [filter, setFilter] = useState("");

  const filteredPets = filter
    ? pets.filter((pet) => pet.species.toLowerCase() === filter.toLowerCase())
    : pets;

  // Show loading state
  if (loading) {
    return (
      <div className="pets">
        <h1>Available Pets for Adoption</h1>
        <p>Loading pets...</p>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="pets">
        <h1>Available Pets for Adoption</h1>
        <p style={{ color: 'red' }}>{error}</p>
      </div>
    );
  }

  return (
    <div className="pets">
      <h1>Available Pets for Adoption</h1>
      <label>
        Filter by species:
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
        </select>
      </label>
      <div className="petsList">
        {filteredPets.map((pet) => (
          <div className="pet" key={pet.id}>
            <div style={{ width: "200px" }}>
              <img
                src={`${S3_BUCKET_URL}/${pet.image}`}
                alt={pet.name}
                style={{ height: "200px", width: "100%", objectFit: "cover" }}
              />
            </div>
            <h2>{pet.name}</h2>
            <p>Age: {pet.age}</p>
            <p>Species: {pet.species}</p>
            <p>Date Entered: {pet.date_entered}</p>
            <p>
              In shelter for{" "}
              <strong>{daysInShelter(pet.date_entered)} days</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pets;
