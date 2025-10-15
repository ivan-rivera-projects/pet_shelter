import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Pets from "./components/Pets";
import AdoptionForm from "./components/AdoptionForm";
import ApplicationInfo from "./components/ApplicationInfo";
import Applications from "./components/Applications";



function App() {
  return (
    <div className="App">
      <Header />
      {/* At the route /, the home component renders. */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/adopt" element={<AdoptionForm />} />
          <Route path="/application-info" element={<ApplicationInfo />} />
          <Route path="/applications" element={<Applications />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
