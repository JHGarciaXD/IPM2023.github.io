import React from 'react';

const JoaoPage = () => {
    const name = 'João Garcia';
    const assignments = [
        {
            title: 'Trabalho 1',
            link: 'https://drive.google.com/file/d/1nOmeq0nkl2qbI4iHs_CUVQtZpnriFjS_/view?usp=drive_link'
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
export default JoaoPage;
