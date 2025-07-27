import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => (
  <section className="contact" id="contact">
    <h2 className="section-title">Contact Me</h2>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Send</button>
    </form>

    <div className="social-icons">
      <a href="mailto:your@email.com"><FaEnvelope /></a>
      <a href="https://github.com/your-github" target="_blank" rel="noreferrer"><FaGithub /></a>
      <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer"><FaLinkedin /></a>
    </div>
  </section>
);

export default Contact;
