import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Card as BootstrapCard } from 'react-bootstrap';
import '../../Styles/Components/Card.css';

const propTypes = {
  cardClass: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  bodyText: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
  onClick: PropTypes.func,
};

export const Card = forwardRef((props, ref) => {
  const { cardClass, id, title, subTitle, bodyText, onClick } = props;

  return (
    <BootstrapCard
      ref={ref}
      className={cardClass}
      id={id}
      role='button'
      onClick={onClick}
    >
      <BootstrapCard.Body>
        {title && <BootstrapCard.Title>{title}</BootstrapCard.Title>}
        {subTitle && (
          <BootstrapCard.Subtitle>{subTitle}</BootstrapCard.Subtitle>
        )}
        <BootstrapCard.Text>{bodyText}</BootstrapCard.Text>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
});

Card.propTypes = propTypes;
