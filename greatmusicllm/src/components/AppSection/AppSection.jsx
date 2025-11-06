import './AppSection.css';
import mockup from "../../assets/Mockup.png";

export default function AppSection() {
  return (
    <section className="app-section">
      <h2>Orchestrating Excellence</h2>
      <p className="tagline">Behind every flawless performance lies perfect coordination.</p>
      <div className="app-content">
        <div className="mockup">
          <div className="mockup-bg"></div>
          <img src={mockup} alt="Event and employee management software mockup" />
        </div>
        <div className="feature-list">
          <ul>
            <li>Plan performances, rehearsals, and tours with clarity and grace.</li>
            <li>Organize musician rosters, contracts, and schedules in one intuitive space.</li>
            <li>Balance rehearsals and shows effortlessly, ensuring harmony in every timeline.</li>
            <li>Gain a clear view of operations — from attendance to performance history — with elegant simplicity.</li>
          </ul>
        </div>
      </div>
      <div className="demo">
        <button>REQUEST A PRIVATE DEMO</button>
      </div>
    </section>
  );
}

