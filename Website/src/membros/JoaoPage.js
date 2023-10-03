import React from 'react';

const JoaoPage = () => {
    const name = 'João Garcia';
    const assignments = [
        {
            title: 'Trabalho 1',
            name: 'Bons e Maus exemplos de Design',
            link: 'https://drive.google.com/file/d/1nOmeq0nkl2qbI4iHs_CUVQtZpnriFjS_/view?usp=drive_link'
        },

        // Add more assignments here
    ];

    return (
        <div>
            <center>

                <h4>{name}</h4>
                <hr />
                <h2>Assignments:</h2>
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
export default JoaoPage;
