import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const BackButton = () => (
  <p className='ms-3 mt-4' role='button'>
    <FontAwesomeIcon icon={faArrowLeft} size='lg' />
  </p>
);
