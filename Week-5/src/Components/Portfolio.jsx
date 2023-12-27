// Portfolio.js
import React from "react";
import Menu from "./Menu";
import AboutMe from "./AboutMe";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import "./Portfolio.css";

const Portfolio = () => {
  const skills = ["HTML", "CSS", "JavaScript", "ReactJS", "JQuery"];

  const handleEmailClick = () => {
    // Implement your logic to handle the email button click
    // For example, you can open the user's default email client
    window.location.href = "mailto:aktasmeertcan@gmail.com";
  };

  const handleLinkedInClick = () => {
    // Implement your logic to handle the LinkedIn button click
    window.open("https://www.linkedin.com/in/aktasmeert/");
  };

  return (
    <div className="portfolio-container">
      <Menu />
      <AboutMe />
      <ProjectsSection />
      <SkillsSection skills={skills} />
      <ContactSection
        handleEmailClick={handleEmailClick}
        handleLinkedInClick={handleLinkedInClick}
      />
      <Footer />
    </div>
  );
};

export default Portfolio;
