// AboutMe.js
import React from "react";

const AboutMe = () => {
  const openGitHub = () => {
    window.open("https://github.com/byteSorcerer1", "_blank");
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/aktasmeert/", "_blank");
  };
  
  return (
    <section className="aboutme">
      <h1 className="biggest">Hi, I am Mert!</h1>
      <h2 className="biggest2">A Front-End Developer</h2>
      <p className="aboutme-text">
      Hello, I'm Mert. Currently, I am a student of Frontend Development at MEGA Software Academy,
       in the fifth week of the React course. Due to my broad interest in various domains,
        I have dedicated myself to mastering the intricacies of React to create robust and efficient applications.
      </p>
      <div className="buttons">
        {/* Resume button removed */}
        <button className="github-button" onClick={openGitHub}>
          GitHub
        </button>
        <button className="linkedin-button" onClick={openLinkedIn}>
          LinkedIn
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
