import React from 'react';

const members = [
  {
    name: "João Garcia",
    studentNo: '60106',
    photo: 'path_to_member1_photo.jpg'
  },
  {
    name: "Francisco Silvano",
    studentNo: '60059',
    photo: 'path_to_member2_photo.jpg'
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
            <img src={member.photo} alt={member.name} width="100" />
            <p>Name: {member.name}</p>
            <p>Student No: {member.studentNo}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default GroupMembers;
