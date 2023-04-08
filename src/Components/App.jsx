import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppProvider } from "./AppContext";
import Nav from "./Nav";
import Home from "./Pages/Home";
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
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/donate" element={<DonatePage />}></Route>
            <Route path="/connect" element={<ConnectPage />}></Route>
          </Routes>
        </main>
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;
