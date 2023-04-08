import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Nav() {
  const { getClassName } = useContext(AppContext);

  return (
    <nav>
      <ol>
        <li>
          <NavLink to="/">OMDb API</NavLink>
        </li>
        <li>
          <NavLink to="/demo" className={getClassName}>
            Demo
          </NavLink>
        </li>
        <li>
          <NavLink to="/docs" className={getClassName}>
            Docs
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className={getClassName}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/donate" className={getClassName}>
            Donate
          </NavLink>
        </li>
        <li>
          <NavLink to="/connect" className={getClassName}>
            Connect
          </NavLink>
        </li>
      </ol>
    </nav>
  );
}
