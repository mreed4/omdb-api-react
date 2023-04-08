import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section id="home">
      <div id="lead">
        <div className="description">
          <h1>OMDb API</h1>
          <p className="tagline">The Open Movie Database</p>
          <p>
            The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and
            maintained by our users.
          </p>
          <p>
            If you find this service useful, please consider making a <Link to="/donate">one-time donation</Link> or become a patron.
          </p>
        </div>
        <div id="poster-api">
          <img src="https://www.omdbapi.com/src/poster.jpg" alt="" />
          <div className="poster-api-description">
            <h2>Poster API</h2>
            <p>The Poster API is only available to patrons.</p>
            <p>Currently over 280,000 posters, updated daily with resolutions up to 2000x3000.</p>
          </div>
        </div>
      </div>
      <div className="news-and-sponsors"></div>
    </section>
  );
}
