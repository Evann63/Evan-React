import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import navbar from "/navbar";
import home from "/home";
import about from "/about";
import program from "/program";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Program" element={<Program />} />
      </Routes>
    </Router>
  );
}
