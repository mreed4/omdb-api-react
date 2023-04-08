import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          API by <Link to="/connect">Brian Fritz</Link> &middot;{" "}
          <a href="legal.htm" target="_blank">
            Legal
          </a>{" "}
          &middot; <Link to="/donate">Donate</Link>
        </li>
        <li>
          All content licensed under{" "}
          <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">
            CC BY-NC 4.0
          </a>
        </li>
        <li className="small italic">This site is not endorsed by or affiliated with IMDb.com.</li>
      </ul>
    </footer>
  );
}
