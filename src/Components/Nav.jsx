import { NavLink, Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ol>
        <li>
          <NavLink to="/" className="logo">
            OMDb API
          </NavLink>
        </li>
        <li>
          <NavLink to="demo">Demo</NavLink>
        </li>
        <li>
          <NavLink to="docs">Docs</NavLink>
        </li>
        <li>
          <NavLink to="dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="donate">Donate</NavLink>
        </li>
        <li>
          <NavLink to="connect">Connect</NavLink>
        </li>
      </ol>
    </nav>
  );
}
