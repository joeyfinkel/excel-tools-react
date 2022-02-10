import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, FormCheck, Fade } from 'react-bootstrap';

import { Card } from './Cards/Card';

import '../Styles/Components/Button.css';
import '../Styles/Components/Overlay.css';

const propTypes = {
  headers: PropTypes.array.isRequired,
  filename: PropTypes.string.isRequired,
  btnText: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};

export const Headers = ({ headers, filename, btnText, onClick }) => {
  const [open, setOpen] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button
        ref={target}
        onClick={() => setOpen(!open)}
        aria-controls='headers'
        aria-expanded={open}
        variant='outline-none'
        className='btn-sheet'
      >
        {btnText}
      </Button>
      <Fade in={open}>
        <div id='headers' className='mt-3'>
          <Card
            ref={target}
            cardClass='header-card border-0'
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
    </>
  );
};

Headers.propTypes = propTypes;
