import React, { useEffect, useState } from 'react';
import { FormCheck } from 'react-bootstrap';
import { AbstractSelector } from './AbstractSelector';
import writeXlsxFile from 'write-excel-file';
import { Title } from './Title';

/**
 *
 * @param {{files: [{filename: string, sheetAttributes: [{name: string, columns: number, rows: number}], sheetData: [any[]]}]}} props The props that are used for this component.
 * @returns
 */
export const HeaderSelector = ({ type, newType, files, activeSheet }) => {
  const [activeSheetIdx, setActiveSheetIdx] = useState(0);
  const [finalHeaders, setFinalHeaders] = useState([]);
  const [rowLength, setRowLength] = useState(0);

  const getDataFromStorage = () => {
    const data = JSON.parse(localStorage.getItem('filesData'));

    return data.map(({ sheetData }) => sheetData[activeSheetIdx]);
  };

  const getIndicesToRemove = (originalHeaders, headersList) => {
    const removeIndices = [];

    originalHeaders.filter(
      (header) =>
        !headersList.includes(header) &&
        removeIndices.push(originalHeaders.indexOf(header))
    );

    return removeIndices;
  };

  /**
   * Removes the columns that correspond with the unselected headers and returns the data from the selected headers.
   * @param {[*[]]} dataFromStorage Data from the uploaded sheet that was saved in local storage.
   * @returns {*[]} Array with data from the selected headers.
   */
  const removeData = (dataFromStorage) => {
    const originalHeaders = dataFromStorage[0][0];
    const uniqueHeaders = [...new Set(finalHeaders)];
    const indicesToRemove = getIndicesToRemove(originalHeaders, uniqueHeaders);
    const finalRowLength = originalHeaders.length - indicesToRemove.length;
    const data = [];
    const finalData = [];

    let count = 0;

    setRowLength(() => rowLength + 5);

    dataFromStorage.map((row) =>
      row.map((cell) =>
        cell.map(
          (value, idx) => !indicesToRemove.includes(idx) && data.push(value)
        )
      )
    );

    while (count < data.length) {
      finalData.push([data[count], data[count + 1]]);
      count += finalRowLength;
    }

    return finalData;
  };

  const transformData = (dataFromStorage) =>
    removeData(dataFromStorage).map((row) =>
      row.map((value) => {
        return { value };
      })
    );

  const createSheet = async () => {
    const dataFromStorage = getDataFromStorage();
    const transformedData = transformData(dataFromStorage);

    await writeXlsxFile(transformedData, { fileName: 'New Sheet.xlsx' });
    newType('dragDrop');
  };

  const headerOnClick = (e) =>
    setFinalHeaders([...finalHeaders, e.target.name]);

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
    type === 'headers' && (
      <AbstractSelector
        type={type}
        title={`Select headers from '${activeSheet}' to keep`}
        onClick={createSheet}
      >
        {files &&
          files.map(({ filename, sheetData }, fileIdx) => {
            const headers = sheetData[activeSheetIdx][0];

            return (
              <section
                key={fileIdx}
                className='headers-section col w-auto ms-5 mt-4'
              >
                <Title
                  title={files.length > 1 && `${filename}: `}
                  headingSize={4}
                />
                {headers.map((header, headerIdx) => (
                  <FormCheck
                    type='checkbox'
                    key={headerIdx}
                    id={`${filename}_${header}_${headerIdx}`}
                    name={header}
                    className='ms-3'
                    label={header}
                    onClick={headerOnClick}
                  />
                ))}
              </section>
            );
          })}
      </AbstractSelector>
    )
  );
};
