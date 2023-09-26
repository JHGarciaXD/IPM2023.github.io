import React from 'react';

const FranciscoPage = () => {
    const name = 'Francisco Silvano';
    const assignments = [
        {
            title: 'Trabalho 1',
            link: 'https://drive.google.com/file/d/1vuvf82eu3KfRz7UjCBlXAt0Th7-y0os-/view?usp=drive_link" target="_blank'
        },
        {
            title: 'Assignment 2',
            description: 'Description of Assignment 2',
        },
        // Add more assignments here
    ];

    return (
        <div>
            <h2>{name}</h2>
            <h3>Assignments:</h3>
            <ul>
                {assignments.map((assignment, index) => (
                    <li key={index}>
                        <h4>{assignment.title}</h4>
                        <p>{assignment.description}</p>
                        {assignment.link && (
                            <a href={assignment.link} target="_blank" rel="noopener noreferrer">
                                Bons e maus exemplos
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FranciscoPage;
