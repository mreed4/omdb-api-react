import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import UsagePage from "./UsagePage";
import DonatePage from "./DonatePage";
// import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usage" element={<UsagePage />} />
          {/* <Route path="/parameters" element={<ParametersPage />} /> */}
          {/* <Route path="/examples" element={<ExamplesPage />} /> */}
          {/* <Route path="/change-log" element={<ChangeLogPage />} /> */}
          <Route path="/donate" element={<DonatePage />}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
