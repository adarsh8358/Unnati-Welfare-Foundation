import React from 'react';
import './Programs.scss';

const Programs = () => {
  const programs = [
    {
      icon: 'ri-book-open-fill',
      title: 'Education for All',
      description:
        'Providing access to quality education, scholarships, and learning materials to empower children and youth.',
    },
    {
      icon: 'ri-hospital-fill',
      title: 'Healthcare Access',
      description:
        'Organizing health camps, offering medical support, and raising awareness about preventive healthcare.',
    },
    {
      icon: 'ri-leaf-fill',
      title: 'Environmental Care',
      description:
        'Promoting tree plantations, waste management, and sustainable practices for a cleaner, greener planet.',
    },
    {
      icon: 'ri-team-fill',
      title: 'Women Empowerment',
      description:
        'Offering skill development and leadership programs to build confidence and financial independence among women.',
    },
    {
      icon: 'ri-community-fill',
      title: 'Community Development',
      description:
        'Implementing initiatives that uplift underprivileged communities and strengthen local resources.',
    },
  ];

  return (
    <section className="programs-page">
      {/* HEADER */}
      <div className="programs-hero">
        <h1>Our Programs</h1>
        <p>
          We design impactful projects to drive sustainable development and improve lives 
          across communities.
        </p>
      </div>

      {/* GRID */}
      <div className="programs-grid">
        {programs.map((program, index) => (
          <div className="program-card" key={index}>
            <i className={`${program.icon} program-icon`}></i>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
