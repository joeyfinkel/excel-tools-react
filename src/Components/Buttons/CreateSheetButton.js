import React from 'react';
import { Button } from 'react-bootstrap';
import '../../Styles/Components/Button.css';

export const CreateSheetButton = ({ onClick }) => (
  <button className='btn btn-create float-end me-3 mb-4' onClick={onClick}>
    Create new sheet
  </button>
);
