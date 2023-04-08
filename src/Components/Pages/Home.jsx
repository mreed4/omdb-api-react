import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section id="home">
      <h1>OMDb API</h1>
      <p className="tagline">The Open Movie Database</p>
      <p>
        The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained
        by our users.
      </p>
      <p>
        If you find this service useful, please consider making a <Link to="/donate">one-time donation</Link> or become a patron.
      </p>
      <p className="small italic">This site is not endorsed by or affiliated with IMDb.com.</p>
    </section>
  );
}
