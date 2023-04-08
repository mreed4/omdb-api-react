import ChangeLog from "./Docs/ChangeLog";
import Parameters from "./Docs/Parameters";
import Usage from "./Docs/Usage";

export default function DocsPage() {
  return (
    <section id="documentation">
      <h1>Documentation</h1>
      <hr />
      <Usage />
      <Parameters />
      <ChangeLog />
    </section>
  );
}
