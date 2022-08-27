import React from "react";
import { Container, Card } from "react-bootstrap";
import './Team.css';

const Team = (team) => {
    const {name,img} = team;
  return (
    <div>
         <Container className='team-container'>
         <Card className="product " style={{ width: "350px", height: "440px" }}>
            <img src={img} alt="Fz-x" />
            <Card.Body className="card_body">
              <Card.Title>
                <h4>{name}</h4>
              </Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
         </Container>
    </div>
  );
};

export default Team;
