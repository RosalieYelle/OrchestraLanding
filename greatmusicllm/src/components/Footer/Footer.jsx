import React from "react";
import "./Footer.css";
import blackLogo from "../../assets/LogoBlack.png";
import line from "../../assets/Line.png";

export default function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer">
      <div className="footer-content">
        <div className="left-section">
          <div className="top-left">
            <div className="logos">
              <img src={blackLogo} alt="Great Music LLM" className="logo" />
              <div className="socials-section" aria-label="Social links">
                <a href="#" className="social" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 4.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5zm0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
                  </svg>
                </a>
                <a href="#" className="social" aria-label="X">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M4 4h4.5l3.5 5.5L16 4h4l-6.5 8.5L20 20h-4.5l-4-6-4.5 6H3l6.5-8.5L4 4z" />
                  </svg>
                </a>
                <a href="#" className="social" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13 3h3v3h-3c-.6 0-1 .4-1 1v2h4l-.5 4H12v9h-4v-9H6v-4h2V7c0-2.2 1.8-4 4-4z" /></svg>
                </a>
                <a href="#" className="social" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M22 8s-.2-1.4-.8-2c-.8-1-1.7-1-2.1-1.1C15.8 4.5 12 4.5 12 4.5h-.1s-3.8 0-6.9.4c-.4 0-1.4 0-2.1 1.1C2.2 6.6 2 8 2 8S1.8 9.6 1.8 11.2v1.6C1.8 14.4 2 16 2 16s.2 1.5.8 2c.8 1 1.9 1 2.4 1.1 2.8.4 7.4.4 7.4.4s3.9 0 7-.4c.4 0 1.3 0 2.1-1.1.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6C22.2 9.6 22 8 22 8zM9.5 15.2V8.8L15 12l-5.5 3.2z" /></svg>
                </a>
              </div>
            </div>
            <div className="website-links" role="navigation">
              <div className="col">
                <h3 className="title">Explore</h3>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Events</a></li>
                  <li><a href="#">Musicians</a></li>
                  <li><a href="#">Partnerships</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>

              <div className="col">
                <h3 className="title">Business</h3>
                <ul>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Book an Event</a></li>
                  <li><a href="#">Member Login / Portal</a></li>
                  <li><a href="#">Press &amp; Media</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rights">
            <p>© {new Date().getFullYear()} Great Music LLM. All rights reserved.</p>
          </div>
        </div>

        <div className="right-section">
          <div className="card">
            <h3 className="card-title">NEWSLETTER</h3>
            <p className="card-desc">Experience the artistry — delivered directly to your inbox.</p>
            <a className="card-link" href="#">Subscribe</a>
          </div>
          <div className="card">
            <img src={line} alt="" />
          </div>
          <div className="card">
            <h3 className="card-title">MAKE A DONATION</h3>
            <p className="card-desc">Support the art of excellence and help our music reach new heights.</p>
            <a className="card-link" href="#">Donate</a>
          </div>
        </div>
      </div>


    </footer>
  );
}