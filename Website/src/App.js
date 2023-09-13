import React from 'react';
import './App.css';
import GroupMembers from './GroupMembers.js';
import ProjectDescription from './ProjectDescription';
import labImage from './images/tesla_bad_design.jpg';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Project Title</h1>
      </header>
      <GroupMembers />
      <section>
        <h2>Lab Class 1</h2>
        <section>
          <h2>Lab Class 1: João Garcia</h2>
          <a href="https://drive.google.com/file/d/1vuvf82eu3KfRz7UjCBlXAt0Th7-y0os-/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            Tesla bad design
          </a>
          <h2>Lab Class 1: Francisco Silvano</h2>
          <a href="https://drive.google.com/file/d/1vuvf82eu3KfRz7UjCBlXAt0Th7-y0os-/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            Tesla bad design
          </a>
        </section>
      </section>
      <ProjectDescription />
      <footer>
        <p>© 2023 Discipline Project Group. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
