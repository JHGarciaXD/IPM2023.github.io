import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

const PedroPage = () => {
  const name = 'Pedro Cavaleiro';
  const assignments = [
    {
      title: 'Trabalho 1',
      name: 'Bons e Maus exemplos de Design',
      link: '/pedro-t1', // Use the correct relative path
    },
    {
      title: 'Trabalho 2',
      name: 'Unknown',
      link: '#',
    },
    // Add more assignments here
  ];

  return (
    <div>
      <center>
        <h4>{name}</h4>
        <hr />
        <h2>Assignments</h2>
        <hr />
        {assignments.map((assignment, index) => (
          <h3 key={index}>
            &nbsp;
            <h3>{assignment.title}</h3>
            &nbsp;
            <Link to={assignment.link}>{assignment.name}</Link>
          </h3>
        ))}
      </center>
      
    </div>
  );
};

export default PedroPage;