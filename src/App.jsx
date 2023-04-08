import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./AppContext";
import Nav from "./Nav";
import Home from "./Home";
import UsagePage from "./UsagePage";
import DonatePage from "./DonatePage";
import ParametersPage from "./ParametersPage";
import ExamplesPage from "./ExamplesPage";
import ChangeLogPage from "./ChangeLogPage";
import ContactPage from "./ContactPage";
import ApiPage from "./ApiPage";
// import "./App.css";

function App() {
  return (
    <AppProvider>
      <Router>
        <header>
          <Nav />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usage" element={<UsagePage />} />
            <Route path="/parameters" element={<ParametersPage />} />
            <Route path="/examples" element={<ExamplesPage />} />
            <Route path="/change-log" element={<ChangeLogPage />} />
            <Route path="/api" element={<ApiPage />} />
            <Route path="/donate" element={<DonatePage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
          </Routes>
        </main>
      </Router>
    </AppProvider>
  );
}

export default App;
