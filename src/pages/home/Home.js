import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>

      <div className="home-cover">
        <div className="home-cover-content">
          <h1 className="display-4">Welcome to Doctor Appointment App</h1>
          <p className="lead">
            Easily book appointments with the best doctors in your area.
          </p>
          <Link to="/register" className="btn btn-primary btn-lg">
            Get Started
          </Link>
        </div>
      </div>

      <div className="container mt-5">
        <h2>About Our Services</h2>
        <p>
          We provide a comprehensive platform to find and book appointments with
          healthcare professionals. Whether you're looking for a specialist or a
          general practitioner, we make the process simple and convenient.
        </p>
      </div>
    </div>
  );
};

export default Home;
