import React, { useEffect, useState } from 'react';
import { CreateSheetButton } from './Buttons/CreateSheetButton';
import { DataContainer } from './DataContainer';
import { Title } from './Title';
import { FormCheck } from 'react-bootstrap';

/**
 *
 * @param {{files: [{filename: string, sheetAttributes: [{name: string, columns: number, rows: number}], sheetData: [any[]]}]}} props The props that are used for this component.
 * @returns
 */
export const HeaderSelector = ({ files, isShown, activeSheet }) => {
  const [activeSheetIdx, setActiveSheetIdx] = useState(0);
  const type = 'headers';

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
    <DataContainer type={type} isShown={isShown}>
      <Title title={`Select headers from ${activeSheet} to keep`} />
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
      <CreateSheetButton />
    </DataContainer>
  );
};
