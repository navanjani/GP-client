import { NavLink } from "react-router-dom";
import "./style.scss";
const NavBar = () => {
  return (
    <div className="nav-bar-container container-fluid">
      <div className="nav-bar-items">
        <div className="nav-bar-links">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>Doctor Schedule</li>
            <li>Blog</li>
            <li>Patient Signup</li>
            <li>Patient Database</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export { NavBar };
