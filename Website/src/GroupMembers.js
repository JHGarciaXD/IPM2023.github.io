import React from 'react';

const members = [
  {
    name: "João Garcia",
    studentNo: '60106',

  },
  {
    name: "Francisco Silvano",
    studentNo: '60059',

  }
  ,
  {
    name: "Pedro Cavaleiro",
    studentNo: '57974',
  },
  {
    name: "Lucas Oliveira",
    studentNo: '64485',
  }
  // Add more members as needed
];

function GroupMembers() {
  return (
    <section>
      <h2>List of Group Members</h2>
      <ul>
        {members.map((member, index) => (
          <li key={index}>
            <p style={{ fontSize: '1.5em' }}>{member.name}</p>
            <p></p>
            <p>Student No: {member.studentNo}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default GroupMembers;
