import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <section className="contact-page">
      {/* PAGE HEADER */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          We’d love to hear from you! Whether you have a question, want to volunteer, 
          or wish to collaborate—reach out and let’s make a difference together.
        </p>
      </div>

      <div className="contact-content">
        {/* LEFT INFO */}
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p><i className="ri-map-pin-2-fill"></i> 123 Welfare Street, Lucknow, India</p>
          <p><i className="ri-phone-fill"></i> +91 98765 43210</p>
          <p><i className="ri-mail-fill"></i> contact@unnatiwelfarefoundation.org</p>

          <div className="social-links">
            <i className="ri-facebook-fill"></i>
            <i className="ri-instagram-fill"></i>
            <i className="ri-linkedin-fill"></i>
            <i className="ri-twitter-fill"></i>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
