import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/Components/Card.css';

export const CardElement = ({ path, title, text }) => (
  <Col>
    <Link to={`/${path}`}>
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  </Col>
);
