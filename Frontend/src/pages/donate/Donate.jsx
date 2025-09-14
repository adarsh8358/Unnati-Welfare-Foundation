import React from 'react';
import './Donate.scss';

const Donate = () => {
  return (
    <section className="donate-page">
      {/* HERO SECTION */}
      <div className="donate-hero">
        <h1>Make a Difference</h1>
        <p>
          Your generous contribution helps us empower communities through education, healthcare, 
          and development programs. Together, we can create lasting change.
        </p>
      </div>

      {/* DONATION FORM */}
      <div className="donate-container">
        <div className="donate-info">
          <h2>Why Donate?</h2>
          <p>
            Every donation, big or small, contributes directly to impactful initiatives 
            that uplift underprivileged communities. Your support fuels our mission of 
            inclusive growth and welfare.
          </p>
          <ul>
            <li>📚 Sponsor education for children</li>
            <li>🏥 Support healthcare camps and facilities</li>
            <li>🌱 Fund environmental sustainability projects</li>
          </ul>
        </div>

        <div className="donate-form">
          <form>
            <label htmlFor="amount">Donation Amount</label>
            <input type="number" id="amount" placeholder="Enter amount (₹)" required />

            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Your Name" required />

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Your Email" required />

            <label htmlFor="message">Message (Optional)</label>
            <textarea id="message" rows="4" placeholder="Your message..."></textarea>

            <button type="submit" className="donate-btn">Donate Now</button>
          </form>
        </div>
      </div>

      {/* PAYMENT OPTIONS */}
      <div className="donate-payment">
        <h3>Other Ways to Contribute</h3>
        <p>
          You can also donate through bank transfer, UPI, or cheque. For large contributions or partnerships, 
          please <a href="/contact">contact us</a>.
        </p>
      </div>
    </section>
  );
};

export default Donate;
