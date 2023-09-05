import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppProvider } from "./AppContext";
import Nav from "./Nav";
import StartPage from "./Pages/StartPage";
import DocsPage from "./Pages/DocsPage";
import DonatePage from "./Pages/DonatePage";
import DemoPage from "./Pages/DemoPage";
import ConnectPage from "./Pages/ConnectPage";
import DashboardPage from "./Pages/DashboardPage";
import Footer from "./Footer";
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
            <Route path="/" element={<StartPage />} />
            <Route path="docs" element={<DocsPage />} />
            <Route path="demo" element={<DemoPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="donate" element={<DonatePage />} />
            <Route path="connect" element={<ConnectPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;
