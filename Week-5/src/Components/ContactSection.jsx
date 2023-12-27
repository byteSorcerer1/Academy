// ContactSection.js
import React from "react";

const ContactSection = ({ handleEmailClick, handleLinkedInClick }) => {
  return (
    <section className="contact-section">
      <h1 className="titles">Contact</h1>
      <div className="contact-buttons">
        <button className="email-button" onClick={handleEmailClick}>
          Mail
        </button>
        <button className="linkedin-button" onClick={handleLinkedInClick}>
          LinkedIn
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
