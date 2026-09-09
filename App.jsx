import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="landing-page">

      <div className="landing-overlay">

        <div className="landing-content">

          <h1>Paradise Nursery</h1>

          <h2>Bring Nature Home</h2>

          <p>
            Discover beautiful plants that transform your
            home into a peaceful paradise.
          </p>

          <Link to="/plants">
            <button className="get-started">
              Get Started
            </button>
          </Link>

          <br />

          <Link to="/about">
            <button className="about-button">
              About Us
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default App;
