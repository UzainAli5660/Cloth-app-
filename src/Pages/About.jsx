
import React from 'react';
import '../App.css'; 

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
      </header>
      <section className="about-us-content">
        <div className="about-us-team">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Uzain Ali</h3>
            <p>CEO & Founder</p>
          </div>
          
        </div>
        <div className="about-us-mission">
          <h2>Our Mission</h2>
          <p>
        We are textile company where you can get any type clothes you want....
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
