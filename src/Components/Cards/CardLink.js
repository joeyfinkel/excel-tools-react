import React from 'react';
import PropTypes from 'prop-types';

import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Card } from './Card';

export const CardLink = ({ path, title, cardText }) => (
  <Col>
    {path ? (
      <Link to={`/${path}`}>
        <Card
          cardClass='info-card'
          title={title}
          bodyText={cardText}
          role={true}
        />
      </Link>
    ) : (
      <Card title={title} bodyText={cardText} />
    )}
  </Col>
);

CardLink.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  cardText: PropTypes.any.isRequired,
};
