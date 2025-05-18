import React from 'react';
import { Card } from 'react-bootstrap';

function Player({ name, team, nationality, jerseyNumber, age, image }) {
  const cardStyle = {
    width: '18rem',
    margin: '1rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={image} alt={name} style={{ height: '250px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}<br />
          <strong>Nationality:</strong> {nationality}<br />
          <strong>Jersey #:</strong> {jerseyNumber}<br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

// Default props
Player.defaultProps = {
  name: "Unknown Player",
  team: "Free Agent",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: "N/A",
  image: "https://via.placeholder.com/250x250?text=No+Image"
};

export default Player;
