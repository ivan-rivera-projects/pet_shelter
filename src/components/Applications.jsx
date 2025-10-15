const formatDate = (dateString) => dateString.split("T")[0];

const applications = [
  {
    pet_image: "pet-image4.jpeg",
    pet_name: "Whiskers",
    species: "Cat",
    pet_id: "4",
    applicant_name: "Wei Zhang",
    id: "00531fab-d16e-45a4-8426-9430cdf9524c",
    email: "wei_zhang@example.com",
    phone: "703-999-4139",
    submitted_at: "2024-04-17T15:44:39.613546",
  },
  {
    pet_image: "pet-image1.jpeg",
    pet_name: "Buddy",
    species: "Dog",
    pet_id: "1",
    applicant_name: "Terry Whitlock",
    id: "1c71bbb6-47e4-4d0b-a147-fe61c0f87217",
    email: "terry_whitlock@example.com",
    phone: "123-067-7890",
    submitted_at: "2024-05-12T18:14:53.002292",
  },
  {
    pet_image: "pet-image1.jpg",
    pet_name: "Buddy",
    species: "Dog",
    pet_id: "1",
    applicant_name: "Sofia Martinez",
    id: "e70e542c-83b3-42fa-bdbe-48a53cffd8d9",
    email: "sofia_martinez@example.com",
    phone: "172-606-4139",
    submitted_at: "2024-06-02T15:35:44.548365",
  },
  {
    pet_image: "pet-image2.jpeg",
    pet_name: "Mittens",
    species: "Cat",
    pet_id: "2",
    applicant_name: "Saanvi Sarkar",
    id: "9419ef55-7850-40ac-8112-48a4a14150dc",
    email: "saanvi_sarkar@example.com",
    phone: "455-898-4139",
    submitted_at: "2024-06-19T14:41:58.233304",
  },
  {
    pet_image: "pet-image4.jpeg",
    pet_name: "Whiskers",
    species: "Cat",
    pet_id: "4",
    applicant_name: "Nikki Wolf",
    id: "2f1ea3f6-80ef-4574-88e3-f4720329b738",
    email: "nikki_wolf@example.com",
    phone: "321-654-7890",
    submitted_at: "2024-07-25T15:40:36.456078",
  },
];

const Applications = () => {
  return (
    <div className="table-container">
      <h3>Applications</h3>
      {/* table that loops through all the applications. Each application has properties: appliant_name, email, phone, pet_id, pet_name, species, submitted_at */}
      <table>
        <thead>
          <tr>
            <th>Applicant Name</th>
            <th>Email</th>
            <th>Phone #</th>
            <th>Pet ID</th>
            <th>Pet Name</th>
            <th>Pet Species</th>
            <th>Application Submitted on</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application.id}>
              <td>{application.applicant_name}</td>
              <td>{application.email}</td>
              <td>{application.phone}</td>
              <td>{application.pet_id}</td>
              <td>{application.pet_name}</td>
              <td>{application.species}</td>
              <td>{formatDate(application.submitted_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Applications;
