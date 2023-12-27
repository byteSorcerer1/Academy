import React from 'react';
import './App.css';

function App() {
 return (
    <div className="App">
      <header className="App-header">
        <h1>My Personal Website</h1>
      </header>
      <main>
        <section className="section">
          <h2>About Me</h2>
          <p>Hello! I'm Mert a frontend developer based in Konya, TR. I specialize in developing scalable, user-friendly web applications.</p>
        </section>
        <section className="section">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Python</li>
            <li>Django</li>
          </ul>
        </section>
        <section className="section">
          <h2>Contact Me</h2>
          <p>Email: example@mail.com</p>
          <p>Phone: (123) 456-7890</p>
        </section>
      </main>
      <footer>
        <p>© 2023 My Personal Website</p>
      </footer>
    </div>
 );
}

export default App;