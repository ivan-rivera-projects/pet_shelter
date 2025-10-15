import daysInShelter from "../utils";
import { useState } from "react";

function getImgUrl(fileName) {
  const imgUrl = new URL(`../assets/${fileName}`, import.meta.url).href;
  return imgUrl;
}

const pets = [
  {
    id: "1",
    name: "Buddy",
    age: 2,
    species: "Dog",
    date_entered: "2024-07-01",
    image: "pet5.jpeg",
  },
  {
    id: "2",
    name: "Mittens",
    age: 3,
    species: "Cat",
    date_entered: "2024-06-20",
    image: "pet1.jpeg",
  },
  {
    id: "3",
    name: "Rex",
    age: 1,
    species: "Dog",
    date_entered: "2024-07-05",
    image: "pet6.jpeg",
  },
  {
    id: "4",
    name: "Whiskers",
    age: 4,
    species: "Cat",
    date_entered: "2024-06-15",
    image: "pet2.jpeg",
  },
  {
    id: "5",
    name: "Junior",
    age: 2,
    species: "Dog",
    date_entered: "2024-07-01",
    image: "pet7.jpeg",
  },
  {
    id: "6",
    name: "Garfield",
    age: 3,
    species: "Cat",
    date_entered: "2024-06-20",
    image: "pet3.jpeg",
  },
  {
    id: "7",
    name: "Clifford",
    age: 1,
    species: "Dog",
    date_entered: "2024-07-05",
    image: "pet8.jpeg",
  },
  {
    id: "8",
    name: "Paws",
    age: 4,
    species: "Cat",
    date_entered: "2024-06-15",
    image: "pet4.jpeg",
  },
  {
    id: "9",
    name: "Muffin",
    age: 2,
    species: "Dog",
    date_entered: "2024-07-01",
    image: "pet9.jpeg",
  },
];

const Pets = () => {
  const [filter, setFilter] = useState("");

  const filteredPets = filter
    ? pets.filter((pet) => pet.species.toLowerCase() === filter.toLowerCase())
    : pets;
  //console.log("filteredpets is this", filteredPets);

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
                src={getImgUrl(pet.image)}
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
