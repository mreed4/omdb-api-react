import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div className="nav-items-primary">
        <span className="site-name">
          <Link to="/">OMDb API</Link>
        </span>
        <ol>
          <li>
            <Link to="/usage">Usage</Link>
            <Link to="/parameters">Parameters</Link>
            <Link to="/examples">Examples</Link>
            <Link to="/change-log">Change Log</Link>
          </li>
        </ol>
      </div>
      <div className="nav-items-secondary">
        <ol>
          <li className="orange">
            <a href="https://www.patreon.com/join/omdb">Become a Patron</a>
          </li>
          <li className="green">
            <Link to="/donate">Donate</Link>
          </li>
        </ol>
      </div>
    </nav>
  );
}
