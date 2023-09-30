import React from 'react';
import LucasT1 from '../trabalhos/lucas-t1.docx'

const LucasPage = () => {
    const name = 'Lucas Oliveira';
    const assignments = [
        {
            title: 'Trabalho 1',
            link: LucasT1
        },
        {
            title: 'Trabalho 2',
            link: '',
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
                            <a href={assignment.link} target="_blank" rel="noopener noreferrer" download>
                                Bons e maus exemplos de design
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LucasPage;
