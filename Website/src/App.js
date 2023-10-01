import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import FranciscoPage from './membros/FranciscoPage';
import JoaoPage from './membros/JoaoPage';
import LucasPage from './membros/LucasPage';
import PedroPage from './membros/PedroPage';

import PedroT1 from './trabalhos/Pedro-T1.js';

const members = [
  {
    name: 'Francisco Silvano',
    studentNo: '60059',
  },
  {
    name: 'Joao Garcia',
    studentNo: '60106',
  },
  {
    name: 'Lucas Oliveira',
    studentNo: '64485',
  },
  {
    name: 'Pedro Cavaleiro',
    studentNo: '57947',
  },
];

function GroupMembers() {
  return (
    <section className="group-members">
      <center>
        <h3 className='group-h3'>Membros da Equipa</h3>

        {members.map((member, index) => (
          <li key={index} className="member-item">
            <center>
              <p className='student-name'>{member.name}</p>
              <p className='student-no'>Aluno nº: {member.studentNo}</p>
            </center>
          </li>
        ))}
      </center>
    </section>
  );
}
function removeAccents(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9-]/g, "-")
    .toLowerCase();
}




function UserPage({ match }) {
  // Get the user's name from the URL parameter
  const userName = match.params.userName;

  // Find the user's data by matching the name
  const user = members.find((member) => member.name === userName);

  return (
    <div className="user-page">
      <h2>{user.name}</h2>
      <p>Aluno nº: {user.studentNo}</p>
      {/* Add user-specific content here */}
    </div>
  );
}

function App() {
  const [showGroupNames, setShowGroupNames] = useState(false);

  const toggleGroupNames = () => {
    setShowGroupNames(!showGroupNames);
  };

  return (
    <div className="App">
      <Router>
        <header className='header-bunitu'>
          <h1>
            {/* Antes dizia IPM 2023/2024 */}
            <Link to="/">Nova Maps</Link>
          </h1>
          <button className="membros-button" onClick={toggleGroupNames}>
            Membros
          </button>
        </header>
        <main>
          <div className="main-content">
            {showGroupNames && (
              <div className={`group-names ${showGroupNames ? 'active' : ''}`}>

                {members.map((member, index) => (
                  <li key={index} className="group-member">
                    <Link to={`/${member.name.toLowerCase().replace(' ', '-')}` && `/${removeAccents(member.name)}`}>
                      {member.name}
                    </Link>
                  </li>
                ))}


              </div>
            )}
            <Switch>
              <Route path="/francisco-silvano" component={FranciscoPage} />
              <Route path="/joao-garcia" component={JoaoPage} />
              <Route path="/lucas-oliveira" component={LucasPage} />
              <Route path="/pedro-cavaleiro" component={PedroPage} />
              <Route path="/pedro-t1" component={PedroT1} />
              <Route path="/">
                {showGroupNames && (
                  <div className={`group-names ${showGroupNames ? 'active' : ''}`}>
                    <ul>
                      {members.map((member, index) => (
                        <li key={index} className="group-member">
                          <Link to={`/${member.name.toLowerCase().replace(' ', '-')}`}>
                            {member.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <GroupMembers />
                <center>
                  <h4>Projeto NOVA MAPS</h4>
                  <p>
                    Our project aims to address the challenge of efficiently navigating the vast and complex campus of the Faculty of Science and Technology (FCT). Students and staff often face difficulties finding specific locations, classrooms, or important facilities, leading to wasted time and frustration. They require a user-friendly solution to simplify campus navigation.
                  </p>
                  <img
                    src="/novaMaps.png"
                    alt="Project Image"
                    style={{ maxWidth: '100%' }}
                  />

                  <p>
                    The main goal of our project is to develop an application that provides a user-friendly map of the FCT campus, highlighting key points of interest such as lecture halls, laboratories, cafeterias, and administrative offices. Users will be able to easily search for specific locations and access detailed information about each point of interest. Our solution will also allow for updates on events and any changes in facility availability. We are open to modifying our solution based on user feedback and evaluation procedures to ensure it aligns with user needs. We also want to provide information about what’s in stock on each store (around the campus).
                  </p>
                  <a
                    href="https://drive.google.com/file/d/13hQ_iWvzdRF4JPTfuf-kMRO-xxf5XU05/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Entrega1
                  </a>
                </center>
                {/* Rest of your content */}
              </Route>
            </Switch>
          </div>
        </main>
      </Router>
      <footer className='header-bunitu'>
        <p className='footer-text'>© 2023/2024 IPM Grupo 8, Todos os direitos reservados </p>
      </footer>
    </div>
  );
}

export default App;
