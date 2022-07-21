import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import Contact from "./pages/Contact";
import Where from "./pages/Where";
import Faq from "./pages/Faq";
import Help from "./pages/Help";
import Admin from "./pages/Admin";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import "./App.css";

function Main() {
  return (
    <Router>
      <Routes>
        <Route exact path="/where" element={<Where />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/help" element={<Help />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/" element={<App />} />
      </Routes>
    </Router>
  );
}

export default Main;
