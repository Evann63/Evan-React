import { Link } from "react-router-dom";
import igIcon from "../assets/ig.svg";
import waIcon from "../assets/wa.svg";
import fbIcon from "../assets/fb.svg";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        Welcome to <span>My Portfolio</span>
      </div>
      <nav>
        <ul>
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/program">Program</Link></li>
        </ul>
      </nav>
      <div className="social-icons-nav">
        <a href="https://www.instagram.com/evander789" target="_blank" className="social-link">
          <img src={igIcon} alt="Instagram" className="icon-img" />
        </a>
        <a href="https://wa.me/6281331489188" target="_blank" className="social-link">
          <img src={waIcon} alt="WhatsApp" className="icon-img" />
        </a>
        <a href="https://www.facebook.com" target="_blank" className="social-link">
          <img src={fbIcon} alt="Facebook" className="icon-img" />
        </a>
      </div>
    </header>
  );
}
