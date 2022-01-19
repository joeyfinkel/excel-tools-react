import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

/**
 * Creates the forward button to move to the next component.
 * @returns A right arrow used for moving to the next component.
 */
export const ForwardButton = ({ onClick }) => (
  <p className='float-end me-3 mb-4' role='button' onClick={onClick}>
    <FontAwesomeIcon icon={faArrowRight} size='lg' />
  </p>
);
