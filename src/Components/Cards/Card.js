import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Card as BootstrapCard } from 'react-bootstrap';
import '../../Styles/Components/Card.css';

const propTypes = {
  cardClass: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  role: PropTypes.bool,
  bodyText: PropTypes.any,
  onClick: PropTypes.func,
};

export const Card = forwardRef(
  ({ cardClass, id, title, subTitle, role, bodyText, onClick }, ref) => (
    <BootstrapCard
      ref={ref}
      className={cardClass}
      id={id}
      role={role && 'button'}
      onClick={onClick}
    >
      <BootstrapCard.Body>
        {title && <BootstrapCard.Title>{title}</BootstrapCard.Title>}
        {subTitle && (
          <BootstrapCard.Subtitle>{subTitle}</BootstrapCard.Subtitle>
        )}
        <BootstrapCard.Text as='div'>{bodyText}</BootstrapCard.Text>
      </BootstrapCard.Body>
    </BootstrapCard>
  )
);

Card.propTypes = propTypes;
