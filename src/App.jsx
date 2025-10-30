import "./styles.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Pets from "./components/Pets";
import AdoptionForm from "./components/AdoptionForm";
import ApplicationInfo from "./components/ApplicationInfo";
import Applications from "./components/Applications";
import Footer from "./components/Footer";
import { fetchPets } from "./services/api";

function App() {
  // State for pets data fetched from API
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch pets from API on component mount
  useEffect(() => {
    const loadPets = async () => {
      try {
        setLoading(true);
        const petsData = await fetchPets();
        setPets(petsData);
        setError(null);
      } catch (err) {
        console.error('Failed to load pets:', err);
        setError('Failed to load pets. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadPets();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route
            path="/pets"
            element={<Pets pets={pets} loading={loading} error={error} />}
          />
          <Route
            path="/adopt"
            element={<AdoptionForm pets={pets} loading={loading} />}
          />
          <Route path="/application-info" element={<ApplicationInfo />} />
          <Route path="/applications" element={<Applications />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
