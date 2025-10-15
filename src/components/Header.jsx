import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const title = "We Are Little Giants Pet Shelter";
  return (
    <div class="header">
      <div class="header-title">
        <img id="logo" src={logo} alt="Company Logo" />
        <h1>We Are Little Giants Pet Shelter</h1>
      </div>
      <nav class="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/pets">Pets</Link>
          </li>
          <li>
            <Link to="/adopt">Adopt</Link>
          </li>
          <li>
            <Link to="/applications">Applications</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
