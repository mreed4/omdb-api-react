import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section id="home">
      <div className="lead">
        <div class="description">
          <h1>OMDb API</h1>
          <h2>The Open Movie Database</h2>
          <p>
            The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and
            maintained by our users.
          </p>
          <p>
            If you find this service useful, please consider making a <Link to="/donate">one-time donation</Link> or become a patron.
          </p>
        </div>
        <div className="poster">
          <img src="https://www.omdbapi.com/src/poster.jpg" alt="" />
          <div className="poster-api-description">
            <h3>Poster API</h3>
            <p>The Poster API is only available to patrons.</p>
            <p>Currently over 280,000 posters, updated daily with resolutions up to 2000x3000.</p>
          </div>
        </div>
      </div>
      <div className="news-and-sponsors"></div>
    </section>
  );
}
