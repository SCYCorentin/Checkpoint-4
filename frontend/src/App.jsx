import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Who from "./pages/Who";
import Admin from "./pages/Admin";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import "./App.css";

function Main() {
  return (
    <Router>
      <Routes>
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/who" element={<Who />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/" element={<App />} />
      </Routes>
    </Router>
  );
}

export default Main;
