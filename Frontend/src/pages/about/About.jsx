import React from 'react';
import './About.scss';

const About = () => {
  return (
    <section className="about-page">
      {/* HERO / INTRO */}
      <div className="about-hero">
        <h1>About Us</h1>
        <p>
          Building sustainable futures through community empowerment, education,
          and inclusive welfare programs.
        </p>
      </div>

      {/* OUR STORY */}
      <div className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Unnati Welfare Foundation was founded with the belief that every person deserves 
            opportunities for growth and dignity. Over the years, we have partnered with 
            local communities, volunteers, and organizations to launch impactful initiatives 
            in education, healthcare, women empowerment, and environmental sustainability.
          </p>
          <p>
            Our team works tirelessly to address pressing social challenges and create 
            long-lasting change, ensuring that resources and opportunities reach those 
            who need them the most.
          </p>
        </div>
        <div className="about-image"></div>
      </div>

      {/* VALUES */}
      <div className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <i className="ri-hand-heart-fill"></i>
            <h3>Compassion</h3>
            <p>We approach every initiative with empathy and a deep commitment to humanity.</p>
          </div>
          <div className="value-card">
            <i className="ri-lightbulb-flash-fill"></i>
            <h3>Innovation</h3>
            <p>We embrace creative solutions to tackle challenges and achieve meaningful impact.</p>
          </div>
          <div className="value-card">
            <i className="ri-shield-check-fill"></i>
            <h3>Integrity</h3>
            <p>We operate with transparency, accountability, and ethical practices in all we do.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
