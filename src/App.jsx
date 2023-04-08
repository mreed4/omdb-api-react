import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./AppContext";
import Nav from "./Nav";
import Home from "./Home";
import DocsPage from "./DocsPage";
import DonatePage from "./DonatePage";
import DemoPage from "./DemoPage";
import ConnectPage from "./ConnectPage";
import DashboardPage from "./DashboardPage";
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
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/donate" element={<DonatePage />}></Route>
            <Route path="/connect" element={<ConnectPage />}></Route>
          </Routes>
        </main>
      </Router>
    </AppProvider>
  );
}

export default App;
