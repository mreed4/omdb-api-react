export default function Parameters() {
  return (
    <div id="docs-parameters">
      <h2>Parameters</h2>
      <hr className="hr-thin" />
      <h3>By ID or Title</h3>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Required</th>
            <th>Valid Options</th>
            <th>Default Value</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>i</td>
            <td>
              <span className="label green">Optional*</span>
            </td>
            <td></td>
            <td>&lt;empty&gt;</td>
            <td>A valid IMDb ID (e.g. tt1285016)</td>
          </tr>
          <tr>
            <td>t</td>
            <td>
              <span className="label green">Optional*</span>
            </td>
            <td></td>
            <td>&lt;empty&gt;</td>
            <td>Movie title to search for.</td>
          </tr>
          <tr>
            <td>type</td>
            <td>
              <span className="label label-default">No</span>
            </td>
            <td>movie, series, episode</td>
            <td>&lt;empty&gt;</td>
            <td>Type of result to return.</td>
          </tr>
          <tr>
            <td>y</td>
            <td>
              <span className="label label-default">No</span>
            </td>
            <td></td>
            <td>&lt;empty&gt;</td>
            <td>Year of release.</td>
          </tr>
          <tr>
            <td>plot</td>
            <td>
              <span className="label label-default">No</span>
            </td>
            <td>short, full</td>
            <td>short</td>
            <td>Return short or full plot.</td>
          </tr>
          <tr>
            <td>r</td>
            <td>
              <span className="label label-default">No</span>
            </td>
            <td>json, xml</td>
            <td>json</td>
            <td>The data type to return.</td>
          </tr>
          <tr>
            <td>callback</td>
            <td>
              <span className="label label-default">No</span>
            </td>
            <td></td>
            <td>&lt;empty&gt;</td>
            <td>JSONP callback name.</td>
          </tr>
          <tr>
            <td>v</td>
            <td>
              <span className="label label-default">No</span>
            </td>
            <td></td>
            <td>1</td>
            <td>API version (reserved for future use).</td>
          </tr>
        </tbody>
      </table>
      <span>* Please note while both "i" and "t" are optional at least one argument is required.</span>
      <hr className="hr-thin" />
      <h3>By Search</h3>
      <table className="">
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Required</th>
            <th>Valid options</th>
            <th>Default Value</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>s</td>
            <td>
              <span className="label green">Yes</span>
            </td>
            <td></td>
            <td>&lt;empty&gt;</td>
            <td>Movie title to search for.</td>
          </tr>
          <tr>
            <td>type</td>
            <td>
              <span className="label label-default">No</span>
            </td>
            <td>movie, series, episode</td>
            <td>&lt;empty&gt;</td>
            <td>Type of result to return.</td>
          </tr>
          <tr>
            <td>y</td>
            <td>
              <span className="label label-default">No</span>
            </td>
            <td></td>
            <td>&lt;empty&gt;</td>
            <td>Year of release.</td>
          </tr>
          <tr>
            <td>r</td>
            <td>
              <span className="label label-default">No</span>
            </td>
            <td>json, xml</td>
            <td>json</td>
            <td>The data type to return.</td>
          </tr>
          <tr>
            <td>
              page <span className="label label-info">New!</span>
            </td>
            <td>
              <span className="label label-default">No</span>
            </td>
            <td>1-100</td>
            <td>1</td>
            <td>Page number to return.</td>
          </tr>
          <tr>
            <td>callback</td>
            <td>
              <span className="label label-default">No</span>
            </td>
            <td></td>
            <td>&lt;empty&gt;</td>
            <td>JSONP callback name.</td>
          </tr>
          <tr>
            <td>v</td>
            <td>
              <span className="label label-default">No</span>
            </td>
            <td></td>
            <td>1</td>
            <td>API version (reserved for future use).</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
