import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FormCheck, Fade } from 'react-bootstrap';

import { Card } from './Cards/Card';

import '../Styles/Components/Button.css';
import '../Styles/Components/Overlay.css';

const propTypes = {
  filename: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  headers: PropTypes.array.isRequired,
  setActiveSheet: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export const Headers = ({
  headers,
  filename,
  setActiveSheet,
  onClick,
  name,
  totalSheets,
}) => {
  const [open, setOpen] = useState(false);
  const target = useRef(null);

  return (
    <div className='col'>
      <div
        ref={target}
        onClick={(e) => {
          setOpen(!open);
          setActiveSheet(e.target.id);
        }}
        aria-controls='headers'
        aria-expanded={open}
        variant='outline-none'
        id={name}
        className='btn btn-sheet btn-outline-none px-5 py-2'
      >
        {name}
      </div>
      <Fade in={open} >
        <div id='headers' className='my-3'>
          <Card
            ref={target}
            className='header-card border-0'
            title='Headers:'
            bodyText={headers.map((header, headerIdx) => (
              <FormCheck
                type='checkbox'
                key={headerIdx}
                id={`${filename}_${header}_${headerIdx}`}
                name={header}
                className='ms-3'
                label={header}
                onClick={onClick}
              />
            ))}
          />
        </div>
      </Fade>
    </div>
  );
};

Headers.propTypes = propTypes;
