import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="nav">
        <div className="logo">collab</div>
        <div className="nav-links">
          <a href="#">Explore</a>
          <a href="#">VIBE Lounge</a>
          <a href="#">Leaderboard</a>
          <a href="#">Join Beta</a>
        </div>
      </div>

      <div className="hero">
        <h1>Where Creators Hang Out</h1>
        <p>
          Not just a platform — a vibe. Collaborate, grow, and earn with creators
          who get it. This is the future of sponsorships.
        </p>
        <button className="cta-button">Join the Beta</button>

        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Welcome to Collab Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="vibe-space">
        <img src="./collab-influencer-phone.png" alt="Collab App Preview" />
        <div className="vibe-space-text">
          <h2>VIBE Score, Tier Level & Real Sponsorships</h2>
          <p>
            Track your journey, unlock new levels, and get paid doing what you
            love. Your dashboard is your creative command center.
          </p>
        </div>
      </div>

      <div className="creator-lounge">
        <h2>What Makes Collab Different?</h2>
        <p>
          Think of it like a creative café, a clubhouse, and a business suite
          combined — where collabs are born, vibes are shared, and real value
          flows in every direction.
        </p>
        <div className="features">
          <div className="feature-box">
            <h3>🎥 Creator Showcases</h3>
            <p>
              Get featured on the homepage. Let the community see your vibe and
              your vision.
            </p>
          </div>
          <div className="feature-box">
            <h3>🏆 Weekly Leaderboards</h3>
            <p>
              Climb the ranks with your VIBE Score and get exclusive deals and
              shoutouts.
            </p>
          </div>
          <div className="feature-box">
            <h3>💬 Message Lounge</h3>
            <p>
              Chat with other creators, collab on content, and spark something
              viral.
            </p>
          </div>
        </div>
      </div>

      <footer>&copy; 2025 Collab. All rights reserved.</footer>
    </div>
  );
}

export default App;
