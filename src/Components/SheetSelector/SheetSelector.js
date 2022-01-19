import React, { useEffect, useState } from 'react';
import { Heading } from './Heading';
import { Title } from '../Title';
import { DataContainer } from '../DataContainer';
import { ForwardButton } from '../Buttons/ForwardButton';
import { DataList } from './DataList';
import '../../Styles/Components/SheetDisplay.css';
import { ListGroup } from 'react-bootstrap';

/**
 *
 * @param {{files: [{filename: string, sheetAttributes: [{name: string, columns: number, rows: number}], sheetData: [{data: any[]}]}]}} props The props that are used for this component.
 * @returns
 */
export const SheetSelector = ({ files, isShown, btnOnClick, radioOnClick }) => {
  const type = 'sheets';

  useEffect(() => {
    const setIsShown = () => !isShown;

    setIsShown();
    console.log(isShown);
  }, [isShown]);

  return (
    <DataContainer type={type} isShown={isShown}>
      <Title title='Select a sheet' />
      {files.map(({ sheetAttributes, filename }, idx) => (
        <div key={idx}>
          <Heading headings={['Sheet name', 'Columns', 'Rows']} />
          <section>
            {sheetAttributes.map((attributes, attrIdx) => (
              <ListGroup
                as='ul'
                horizontal
                key={attrIdx}
                className='mt-2 underline'
              >
                <DataList
                  attributes={attributes}
                  filename={filename}
                  onClick={radioOnClick}
                />
              </ListGroup>
            ))}
          </section>
        </div>
      ))}
      <ForwardButton onClick={btnOnClick} />
    </DataContainer>
  );
};
