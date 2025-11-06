import logo from "../../assets/Logo.png";
import './Header.css';
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    // Disable body scroll when menu is open
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup when component unmounts (good practice)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header className={`header ${menuOpen ? "menu-open" : ""}`}>
      <div className="header-content">
        <div className="logo-container">
          <a href="/" className="logo">
            <img src={logo} alt="Great Music LLM" />
          </a>
        </div>

        {/* Hamburger icon (only visible on small screens) */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav aria-label="Main navigation" className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <ul>
                <li><a href = "/" onClick={() => setMenuOpen(false)}>EVENTS</a></li>
                <li><a href = "/" onClick={() => setMenuOpen(false)}>ABOUT</a></li>
                <li><a href = "/" onClick={() => setMenuOpen(false)}>TEAMS</a></li>
                <li><a href = "/" onClick={() => setMenuOpen(false)}>CONTACT US</a></li>
            </ul>
        </nav>
      </div>
    </header>
  );
}