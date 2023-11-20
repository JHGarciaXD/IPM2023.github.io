import React from 'react';
import LucasT1 from '../trabalhos/lucas-t1.pdf'

const LucasPage = () => {
    const name = 'Lucas Oliveira';
    const assignments = [
        {
            title: 'Trabalho 1',
            link: LucasT1
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
                        {assignment.link && (
                            <a href={assignment.link} target="_blank" rel="noopener noreferrer" download>
                                Bons e maus exemplos
                            </a>
                        )}  </h3>
                ))}
            </center>
        </div>
    );
};

export default LucasPage;
