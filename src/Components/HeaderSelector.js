import React, { useEffect, useState } from 'react';
import { CreateSheetButton } from './Buttons/CreateSheetButton';
import { DataContainer } from './DataContainer';
import { Title } from './Title';
import { FormCheck } from 'react-bootstrap';
import { BackButton } from './Buttons/BackButton';
import { AbstractSelector } from './AbstractSelector';

/**
 *
 * @param {{files: [{filename: string, sheetAttributes: [{name: string, columns: number, rows: number}], sheetData: [any[]]}]}} props The props that are used for this component.
 * @returns
 */
export const HeaderSelector = ({ type, newType, files, activeSheet }) => {
  const [activeSheetIdx, setActiveSheetIdx] = useState(0);

  const changeType = () => newType('dragDrop');

  useEffect(() => {
    files &&
      files.map(({ sheetAttributes }, idx) => {
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
        onClick={changeType}
      >
        {files &&
          files.map(({ filename, sheetData }, fileIdx) => {
            const headers = sheetData[activeSheetIdx][0];

            return (
              <section key={fileIdx} className='w-auto ms-5 mt-4'>
                {headers.map((header, headerIdx) => (
                  <FormCheck
                    type='checkbox'
                    key={headerIdx}
                    id={`${filename}_${header}_${headerIdx}`}
                    className='ms3'
                    label={header}
                  />
                ))}
              </section>
            );
          })}
      </AbstractSelector>
    )
  );
};
