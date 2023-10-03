import React from 'react';

const FranciscoPage = () => {
    const name = 'Francisco Silvano';
    const assignments = [
        {
            title: 'Trabalho 1',
            name: 'Bons e Maus exemplos de Design',
            link: 'https://drive.google.com/file/d/1N1-_zHGL81oAwmLkXfIrCFh8jk9LnLlh/view?usp=sharing'

        }
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
                        {assignment.link && (
                            <a href={assignment.link} target="_blank" rel="noopener noreferrer">
                                Bons e maus exemplos
                            </a>
                        )}  </h3>
                ))}
            </center>

        </div>
    );
};

export default FranciscoPage;

