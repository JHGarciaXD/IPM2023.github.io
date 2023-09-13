import React from 'react';
import './App.css';
import GroupMembers from './GroupMembers.js';
import ProjectDescription from './ProjectDescription';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Project Title</h1>
      </header>
      <GroupMembers />
      <section>
        <h2>Lab Class Number</h2>
        <p>Lab Class: #Number</p>
      </section>
      <ProjectDescription />
      <footer>
        <p>© 2023 Discipline Project Group. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
