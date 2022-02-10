import React from 'react';

import '../../Styles/Components/Button.css';

export const CreateSheetButton = ({ onClick }) => (
  <button className='btn btn-create' onClick={onClick}>
    Create new sheet
  </button>
);
