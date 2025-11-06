import './Hero.css';
import { FaChevronDown } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="quote">Where Mastery Meets Harmony</p>
        <p>discover more</p>
        <div className="arrow-down">
          <a href="#about" className="arrow-down">
            <FaChevronDown />
          </a>
        </div>
      </div>
    </section>
  );
}