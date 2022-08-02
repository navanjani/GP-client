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
            |
            <NavLink to="/duty">
              <li>Doctor Schedule</li>
            </NavLink>
            |
            <NavLink to="/signup">
              <li>Patient Signup</li>
            </NavLink>
            |
            <NavLink to="/patients">
              <li>Patient Database</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};
export { NavBar };
