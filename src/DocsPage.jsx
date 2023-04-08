import UsagePage from "./UsagePage";
import ParametersPage from "./ParametersPage";
import ChangeLogPage from "./ChangeLogPage";

export default function DocsPage() {
  return (
    <section id="documentation">
      <h1>Documentation</h1>
      <hr />
      <UsagePage />
      <ParametersPage />
      <ChangeLogPage />
    </section>
  );
}
