import React from 'react';
import Player from './Player';
import players from '../players';
import { Container, Row, Col } from 'react-bootstrap';

function PlayersList() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Football Stars</h2>
      <Row className="justify-content-center">
        {players.map((player, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3}>
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PlayersList;
