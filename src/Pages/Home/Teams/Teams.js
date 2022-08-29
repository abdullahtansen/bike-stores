import React from "react";
import Team from "../Team/Team";
import { Container } from "react-bootstrap";
import "./Teams.css";

const ourTeam = [
  {
    id: 1,
    name: "Abdullah AL Tansen",
    img: "https://i.ibb.co/6yMPFwf/team1.jpg",
    position: "Co-Manager",
  },
  {
    id: 2,
    name: "Sajid Ul Islam",
    img: "https://i.ibb.co/s13Hvb6/team2.jpg",
    position: "Product-Manager",
  },
  {
    id: 3,
    name: "Irfan Sheikh",
    img: "https://i.ibb.co/6yMPFwf/team1.jpg",
    position: "Sells-Manager",
  },
];





const Teams = () => {
  return (
    <div>
      <h2 className="team_title" style={{color:'tomato',fontWeight:'700',marginBottom:'20px'}}>Our Team</h2>
      <Container className="team_container">
        {ourTeam.map((teams) => (
          <Team key={teams.id} team={teams} />
        ))}
      </Container>
    </div>
  );
};

export default Teams;
