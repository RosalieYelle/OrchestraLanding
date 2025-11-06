import './About.css';
import about from "../../assets/about.jpg";

export default function About() {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-text">
            <h2>About Us</h2>
            <p>
            At Great Music LLM, artistry and innovation exist in perfect harmony. Our organization brings 
            together world-class musicians — violinists, pianists, cellists, and more — united by a shared 
            pursuit of musical excellence. Each performance is a celebration of precision, emotion, and 
            collaboration, echoing the timeless beauty of orchestral art.
            </p>
            <p>
            Beyond the stage, Great Music LLM pioneers the future of orchestral management through our 
            bespoke event and ensemble management platform. Designed for the unique needs of professional 
            music organizations, our technology ensures every concert, rehearsal, and partnership is 
            orchestrated with the same care and finesse as our performances.
            </p>
        </div>
        <div className="about-image">
            <img src={about} alt="Great Music LLM" />
        </div>
      </div>
    </section>
  );
}