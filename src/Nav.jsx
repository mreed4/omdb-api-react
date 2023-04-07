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
          </li>
        </ol>
      </div>
      <div className="nav-items-secondary">
        <ol>
          <li>
            <a href="https://www.patreon.com/join/omdb">Become a Patron</a>
          </li>
          <li>
            <Link to="/donate">Donate</Link>
          </li>
        </ol>
      </div>
    </nav>
  );
}
