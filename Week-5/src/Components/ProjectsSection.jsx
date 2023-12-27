// ProjectsSection.js
import React from "react";

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h1 className="titles">Projects</h1>
      <div className="project-box-container">
        <div className="project-box info-box">
          <h1>Music Player</h1>
          <p>HTML, CSS, Javascript</p>
          <div className="project-links">
            <a
              href="https://github.com/byteSorcerer1/musicplayer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link🔗
            </a>
          </div>
        </div>
        <div className="project-box info-box">
          <h1>Pong Game</h1>
          <p>HTML, CSS, REACT.JS</p>
          <div className="project-links">
            <a
              href="https://github.com/byteSorcerer1/pong-game/tree/main/Pong%20Game"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link 🔗
            </a>
          </div>
        </div>
        <div className="project-box info-box">
          <h1>Sudoku Solver</h1>
          <p>HTML, CSS, Javascript</p>
          <div className="project-links">
            <a
              href="https://github.com/byteSorcerer1/sudoku-solver/tree/main/Sudoku%20Solver"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link 🔗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
