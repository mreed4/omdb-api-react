import { Link } from "react-router-dom";

export default function UsagePage() {
  return (
    <section id="usage">
      <h1>Usage</h1>
      <hr />
      <p>Send all data requests to:</p>
      <pre>http://www.omdbapi.com/?apikey=[yourkey]&</pre>
      <p>Poster API requests:</p>
      <pre>http://img.omdbapi.com/?apikey=[yourkey]&</pre>
    </section>
  );
}
