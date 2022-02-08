import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  FormCheck,
  OverlayTrigger,
  Popover,
  PopoverHeader,
  PopoverBody,
} from 'react-bootstrap';
import '../Styles/Components/Overlay.css';

const propTypes = {
  sheetName: PropTypes.string.isRequired,
  headers: PropTypes.array.isRequired,
  filename: PropTypes.string.isRequired,
  btnText: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};

export const Overlay = ({ sheetName, headers, filename, btnText, onClick }) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <OverlayTrigger
      placement='right'
      trigger='click'
      delay={40}
      overlay={
        <Popover>
          <PopoverHeader className='border-0'>Choose Columns from {sheetName}</PopoverHeader>
          <PopoverBody>
            {headers.map((header, headerIdx) => (
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
          </PopoverBody>
        </Popover>
      }
    >
      <Button
        ref={target}
        onClick={() => setShow(!show)}
        variant='outline-none'
      >
        {btnText}
      </Button>
    </OverlayTrigger>
  );
};

Overlay.propTypes = propTypes;
