import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Col, Stack } from 'react-bootstrap';

import { Overlay } from '../Overlay';
import { BackButton } from '../Buttons/BackButton';
import { Title } from '../Title';
import '../../Styles/Components/SheetDisplay.css';

const propTypes = {
  /** Information from the uploaded files */
  files: PropTypes.arrayOf(
    PropTypes.shape({
      filename: PropTypes.string,
      sheetAttributes: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          columns: PropTypes.number,
          rows: PropTypes.number,
        })
      ),
      sheetData: PropTypes.arrayOf(PropTypes.array),
    })
  ).isRequired,
  radioOnClick: PropTypes.func.isRequired,
};

export const SheetSelector = ({ files, radioOnClick }) => (
  <div>
    <BackButton />
    <Title
      title='Select a sheet and columns for the new sheet'
      headingSize={2}
    />
    <Stack gap={4} className='col-md-5 mt-4 ms-5'>
      {files.map(({ sheetAttributes, filename, sheetData }, idx) =>
        sheetAttributes.map(({ name, columns, rows }, sheetIdx) => {
          const headers = sheetData[sheetIdx][0];
          const btnText = (
            <>
              {name} <br />
              <small>
                Column: {columns} {String.fromCharCode(183)} Rows: {rows}
              </small>
            </>
          );

          return files.length === 1 ? (
            <Overlay
              key={sheetIdx}
              filename={filename}
              headers={headers}
              sheetName={name}
              btnText={btnText}
              onClick={radioOnClick}
            />
          ) : (
            <Col id={files.length} key={idx}>
              {/* <Card
                      cardClass='w-auto'
                      title={filename}
                      bodyText={<Overlay sheetAttributes={sheetAttributes} />}
                    /> */}
            </Col>
          );
        })
      )}
    </Stack>
  </div>
);

SheetSelector.propTypes = propTypes;
