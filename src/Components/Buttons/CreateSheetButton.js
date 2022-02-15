import React from 'react';
import PropTypes from 'prop-types';

import '../../Styles/Components/Button.css';

const propTypes = {
  onClick: PropTypes.func.isRequired,
};

export const CreateSheetButton = ({ onClick }) => (
  <button className='btn btn-create' onClick={onClick}>
    Create new sheet
  </button>
);

CreateSheetButton.propTypes = propTypes;
