import './Hero.css';
import heroImage from '../../assets/hero-image.jpg'; // your full screen image
import { FaChevronDown  } from 'react-icons/fa'; // optional arrow icon

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className = "quote">Where Mastery Meets Harmony</p>
        <p>discover more</p>
        <div className="arrow-down">
          <FaChevronDown  />
        </div>
      </div>
    </section>
  );
}