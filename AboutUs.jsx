import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>

      <nav className="navbar">

        <div className="logo">
          Paradise Nursery
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">Cart</Link>
        </div>

      </nav>

      <div className="about-container">

        <h1>About Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your destination for
          beautiful and healthy indoor plants.
        </p>

        <p>
          We believe plants make homes healthier, happier,
          and more beautiful. Our nursery provides a wide
          variety of air-purifying plants, flowering plants,
          and succulents for plant lovers of all experience
          levels.
        </p>

        <p>
          Our mission is to make it easy for everyone to bring
          a little piece of nature into their home.
        </p>

        <Link to="/plants">
          <button>
            Explore Plants
          </button>
        </Link>

      </div>

    </div>
  );
}

export default AboutUs;

