import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Nav() {
  const { getClassName } = useContext(AppContext);

  return (
    <nav>
      <div className="nav-items-primary">
        <ol>
          <li>
            <NavLink to="/" className={getClassName}>
              OMDb API
            </NavLink>
          </li>
          <li>
            <NavLink to="/usage" className={getClassName}>
              Usage
            </NavLink>
          </li>
          <li>
            <NavLink to="/parameters" className={getClassName}>
              Parameters
            </NavLink>
          </li>
          <li>
            <NavLink to="/examples" className={getClassName}>
              Examples
            </NavLink>
          </li>
          <li>
            <NavLink to="/change-log" className={getClassName}>
              Change Log
            </NavLink>
          </li>
          <li>
            <NavLink to="/api" className={getClassName}>
              API
            </NavLink>
          </li>
        </ol>
      </div>
      <div className="nav-items-secondary">
        <ol>
          <li>
            <a href="https://www.patreon.com/join/omdb">Become a Patron</a>
          </li>
          <li>
            <NavLink to="/donate" className={getClassName}>
              Donate
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={getClassName}>
              Contact
            </NavLink>
          </li>
        </ol>
      </div>
    </nav>
  );
}
