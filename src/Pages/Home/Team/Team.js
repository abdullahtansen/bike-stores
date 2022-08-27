import React from "react";
import { Container, Card } from "react-bootstrap";
import './Team.css';

const Team = ({team}) => {
    const {name,img,position} = team;
  return (
    <div>
        <Container className='team-container'>
         <Card style={{ width: "350px",height:'300px'}}>
            <img className="images" src={img} alt="Fz-x" />
            <Card.Body>
              <Card.Title>
                <h4 className="name">{name}</h4>
              </Card.Title>
              <Card.Text className="position">
                {position}
              </Card.Text>
            </Card.Body>
          </Card>
         </Container>
    </div>
  );
};

export default Team;
