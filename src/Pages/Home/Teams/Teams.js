import React from 'react';
import Team from '../Team/Team';


const ourTeam = [
    {
      id: 1,
      name: "Abdullah Al Tansen",
      img: "https://i.ibb.co/xScjt5C/tvs-4v.jpg",
    },
    {
      id: 2,
      name: "Fz-x",
      description: "This is new bike",
      price: 3000,
      img: "https://i.ibb.co/xScjt5C/tvs-4v.jpg",
    },
    {
      id: 3,
      name: "Fz-x",
      description: "This is new bike",
      price: 5000,
      img: "https://i.ibb.co/xScjt5C/tvs-4v.jpg",
    },
  ];
  

const Teams = () => {
    return (
        <div>
               <h2>Our Team</h2>
            {ourTeam.map((teams) => (
          <Team key={teams.id} team={teams} />
        ))}
        </div>
    );
};

export default Teams;