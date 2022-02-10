import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Container } from 'react-bootstrap';

import { Headers } from './Headers';
import { BackButton } from './Buttons/BackButton';
import { Title } from './Title';
import { CreateSheetButton } from './Buttons/CreateSheetButton';

import '../Styles/Components/SheetDisplay.css';
import '../Styles/Components/Button.css';

const propTypes = {
  type: PropTypes.string.isRequired,
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

export const SheetSelector = ({ type, files, radioOnClick }) => (
  <div className={type === 'dragDrop' ? 'd-none' : undefined}>
    <BackButton />
    <Title
      title='Select a sheet and columns for the new sheet'
      headingSize={2}
    />
    <div className='mt-5 position-relative w-auto'>
      <Row xs={2} lg={'auto'} className='justify-content-center'>
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
              <Col key={sheetIdx} lg='auto'>
                <Headers
                  filename={filename}
                  headers={headers}
                  btnText={btnText}
                  onClick={radioOnClick}
                />
              </Col>
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
      </Row>
      <Row>
        <Col>
          <CreateSheetButton />
        </Col>
      </Row>
      {/* <CreateSheetButton /> */}
    </div>
  </div>
);

SheetSelector.propTypes = propTypes;
