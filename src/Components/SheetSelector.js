import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import writeXlsxFile from 'write-excel-file';

import { Col, Row, Container } from 'react-bootstrap';

import { Headers } from './Headers';
import { BackButton } from './Buttons/BackButton';
import { Title } from './Title';
import { CreateSheetButton } from './Buttons/CreateSheetButton';
import { transformDataFromStorage } from '../Utils/CreateSheet/ColumnRemover';

import '../Styles/Components/SheetDisplay.css';
import '../Styles/Components/Button.css';

const propTypes = {
  type: PropTypes.string.isRequired,
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
  ),
  newType: PropTypes.func.isRequired,
};

export const SheetSelector = ({ type, files, newType }) => {
  const [activeSheet, setActiveSheet] = useState('');
  const [activeSheetIdx, setActiveSheetIdx] = useState(0);
  const [finalHeaders, setFinalHeaders] = useState([]);
  const [rowLength, setRowLength] = useState(0);

  const headerOnClick = (e) =>
    setFinalHeaders([...finalHeaders, e.target.name]);

  const createSheet = async () => {
    const transformedData = transformDataFromStorage(
      activeSheetIdx,
      finalHeaders,
      setRowLength,
      rowLength
    );

    await writeXlsxFile(transformedData, { fileName: 'New Sheet.xlsx' });
    newType('dragDrop');
  };

  useEffect(() => {
    files &&
      files.map(({ sheetAttributes }) => {
        return sheetAttributes.map(
          ({ name }, attrIdx) =>
            name === activeSheet && setActiveSheetIdx(attrIdx)
        );
      });
  }, [files, activeSheet]);

  return (
    files && (
      <div className={type === 'dragDrop' ? 'd-none' : undefined}>
        <BackButton />
        <Title
          title='Select a sheet and columns for the new sheet'
          headingSize={2}
        />
        <Container className='mt-5 position-relative w-auto'>
          <div
            className={
              files.length === 1
                ? 'sheets-data'
                : 'sheets-data d-flex justify-content-between'
            }
          >
            {files.map(({ sheetAttributes, filename, sheetData }, idx) => (
              <Row
                xs={2}
                lg={'auto'}
                className='justify-content-start'
                key={idx}
              >
                {files.length === 1 ? (
                  sheetAttributes.map(({ name, columns, rows }, sheetIdx) => {
                    const headers = sheetData[sheetIdx][0];

                    return (
                      <Col key={sheetIdx} lg='auto'>
                        <Headers
                          filename={filename}
                          headers={headers}
                          name={name}
                          totalSheets={sheetAttributes.length}
                          setActiveSheet={setActiveSheet}
                          onClick={headerOnClick}
                        />
                      </Col>
                    );
                  })
                ) : (
                  <>
                    <Col>
                      <h3>{filename}</h3>
                      <Row>
                        {sheetAttributes.map(({ name }, sheetIdx) => {
                          const headers = sheetData[sheetIdx][0];

                          return (
                            <Headers
                              key={sheetIdx}
                              filename={filename}
                              headers={headers}
                              name={name}
                              setActiveSheet={setActiveSheet}
                              onClick={headerOnClick}
                            />
                          );
                        })}
                      </Row>
                    </Col>
                  </>
                )}
              </Row>
            ))}
          </div>
          <Row>
            <Col>
              <CreateSheetButton onClick={createSheet} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  );
};

SheetSelector.propTypes = propTypes;
