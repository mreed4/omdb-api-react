export default function DemoPage() {
  return (
    <section id="demo">
      <h1>Demo</h1>
      <hr />
      <h2>By Title</h2>
      <form className="well form-search" id="search-by-title-form">
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" />
          <label htmlFor="year">Year:</label>
          <input type="text" id="year" name="year" />
          <label>Plot:</label>
          <select name="plot" defaultValue="short">
            <option value="short">Short</option>
            <option value="full">Full</option>
          </select>
          <label for="response">Response:</label>
          <select name="response">
            <option value="">JSON</option>
            <option value="xml">XML</option>
          </select>
          <button id="search-by-title-button" type="button" className="green">
            Search
          </button>
          <button id="search-by-title-reset" type="reset" className="red">
            Reset
          </button>
        </div>
      </form>
    </section>
  );
}
