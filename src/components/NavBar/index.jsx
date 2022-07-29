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
            |<li>Patient Signup</li> |<li>Patient Database</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export { NavBar };
