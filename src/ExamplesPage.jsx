export default function ExamplesPage() {
  return (
    <section id="examples">
      <h1>Examples</h1>
      <hr />
      <h2>By Title</h2>
      <form className="well form-search" id="search-by-title-form">
        <div>
          <label for="t">Title:</label>
          <input type="text" id="t" name="t" />
          &nbsp;&nbsp;
          <label for="y">Year:</label>
          <input type="text" id="y" name="y" />
          &nbsp;&nbsp;
          <label>Plot:</label>
          <select name="plot">
            <option value="" selected="">
              Short
            </option>
            <option value="full">Full</option>
          </select>
          &nbsp;&nbsp;
          <label>Response:</label>
          <select name="r">
            <option value="">JSON</option>
            <option value="xml">XML</option>
          </select>
          &nbsp;&nbsp;
          <button id="search-by-title-button" type="button">
            Search
          </button>
          <button id="search-by-title-reset" type="reset">
            Reset
          </button>
        </div>
      </form>
    </section>
  );
}
