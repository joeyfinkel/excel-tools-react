import React from 'react';
import { Button } from 'react-bootstrap';
import '../../Styles/Components/Button.css';

export const CreateSheetButton = ({ onClick }) => (
  <Button className='btn-create float-end me-3 mb-4' onClick={onClick}>
    Create new sheet
  </Button>
);
