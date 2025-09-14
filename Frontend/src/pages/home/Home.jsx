import React from 'react'
import './Home.scss'
import './Responsive.scss'

const Home = () => {
  return (
    <>
      {/* <section className='hero-section'>
        <div className="left">

          <h1>Unnati Welfare Foundation</h1>
          <h2>Empowering communities through welfare programs and initiatives.</h2>
          <p>
            Unnati Welfare Foundation is dedicated to fostering inclusive growth and sustainable
            development across communities. Through strategic programs in education, healthcare,
            and empowerment, we aim to create meaningful change and long-term impact for those
            who need it most.
          </p>

          <div className="buttons">

            <button className="contact">Contact</button>
            <button className="donate">Donate Now</button>
          </div>

          <div className="socialmedia">

            <i className="ri-facebook-fill"></i>
            <i className="ri-instagram-fill"></i>
            <i className="ri-linkedin-fill"></i>
            <i className="ri-twitter-fill"></i>
          </div>

        </div>

        <div className="right">
          <div className="img"></div>
        </div>

      </section> */}

      <section className="hero-section">
        <div className="hero-container">
          {/* LEFT CONTENT */}
          <div className="hero-left">
            <h1>Unnati Welfare Foundation</h1>
            <h2>Empowering Communities, Creating Lasting Impact</h2>
            <p>
              Through education, healthcare, and empowerment initiatives, we work hand-in-hand
              with communities to build a brighter, sustainable future. Join us in making a
              meaningful difference where it matters most.
            </p>

            <div className="buttons">
              <button className="primary-btn">Donate Now</button>
              <button className="secondary-btn">Learn More</button>
            </div>

            <div className="social-icons">
              <i className="ri-facebook-fill"></i>
              <i className="ri-instagram-fill"></i>
              <i className="ri-linkedin-fill"></i>
              <i className="ri-twitter-fill"></i>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-right">
            <div className="hero-img"></div>
          </div>
        </div>
      </section>

      <section className='about-section'>
        <div className="about-container">
          <div className="about-left">
            <h2>About Us</h2>
            <p>
              At <strong>Unnati Welfare Foundation</strong>, we believe in creating opportunities that
              uplift underprivileged communities. Our mission focuses on education, healthcare,
              women's empowerment, and environmental sustainability.
            </p>
            <p>
              Since our inception, we've partnered with volunteers, organizations, and local leaders
              to implement impactful welfare programs. Every initiative is designed to bring dignity,
              hope, and measurable change to those who need it most.
            </p>
            <ul>
              <li><i className="ri-checkbox-circle-fill"></i> Community-driven programs</li>
              <li><i className="ri-checkbox-circle-fill"></i> Transparent and accountable operations</li>
              <li><i className="ri-checkbox-circle-fill"></i> Focus on sustainable growth</li>
            </ul>
          </div>

          <div className="about-right">
            <div className="about-img"></div>
          </div>
        </div>
      </section>

      <section className='programs-section'>
        <div className="programs-header">
          <h2>Our Programs & Projects</h2>
          <p>
            We focus on impactful initiatives that drive sustainable development and improve
            the quality of life in underprivileged communities.
          </p>
        </div>

        <div className="programs-grid">
          <div className="program-card">
            <i className="ri-book-open-fill program-icon"></i>
            <h3>Education for All</h3>
            <p>
              Providing access to quality education, scholarships, and learning materials
              to empower children and youth.
            </p>
          </div>

          <div className="program-card">
            <i className="ri-hospital-fill program-icon"></i>
            <h3>Healthcare Access</h3>
            <p>
              Organizing health camps, providing medical support, and raising awareness
              about preventive healthcare.
            </p>
          </div>

          <div className="program-card">
            <i className="ri-leaf-fill program-icon"></i>
            <h3>Environmental Care</h3>
            <p>
              Promoting tree plantation, waste management, and sustainability practices
              for a cleaner planet.
            </p>
          </div>

          <div className="program-card">
            <i className="ri-team-fill program-icon"></i>
            <h3>Women Empowerment</h3>
            <p>
              Offering skill development and leadership programs to build confidence and
              financial independence among women.
            </p>
          </div>
        </div>
      </section>

      <section className="getinvolved-section">
        <div className="getinvolved-container">
          {/* LEFT: TEXT CONTENT */}
          <div className="getinvolved-left">
            <h2>Get Involved & Make a Difference</h2>
            <p>
              Your support fuels our mission to empower communities and drive positive change.
              Whether you contribute your time, resources, or expertise, every action helps us
              create sustainable impact.
            </p>

            <ul className="involvement-options">
              <li>
                <i className="ri-hand-heart-fill"></i>
                Volunteer for community projects and events.
              </li>
              <li>
                <i className="ri-money-dollar-circle-fill"></i>
                Donate to fund education, healthcare, and empowerment programs.
              </li>
              <li>
                <i className="ri-megaphone-fill"></i>
                Spread awareness by sharing our mission on social media.
              </li>
            </ul>

            <div className="buttons">
              <button className="primary-btn">Donate Now</button>
              <button className="secondary-btn">Join Us</button>
            </div>
          </div>

          {/* RIGHT: IMAGE / ILLUSTRATION */}
          <div className="getinvolved-right">
            <div className="involved-img"></div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          {/* LEFT: CONTACT INFO */}
          <div className="contact-left">
            <h2>Contact Us</h2>
            <p>
              Have questions or want to collaborate? Reach out to us—we’d love to hear from you.
            </p>

            <div className="contact-details">
              <p><i className="ri-map-pin-2-fill"></i> 123 Welfare Street, Lucknow, India</p>
              <p><i className="ri-phone-fill"></i> +91 98765 43210</p>
              <p><i className="ri-mail-fill"></i> contact@unnatiwelfarefoundation.org</p>
            </div>

            <div className="social-links">
              <i className="ri-facebook-fill"></i>
              <i className="ri-instagram-fill"></i>
              <i className="ri-linkedin-fill"></i>
              <i className="ri-twitter-fill"></i>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="contact-right">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>




    </>
  )
}

export default Home