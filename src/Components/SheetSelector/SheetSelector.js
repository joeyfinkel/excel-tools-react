import React from 'react';
import { Heading } from './Heading';
import { DataList } from './DataList';
import { ListGroup } from 'react-bootstrap';
import '../../Styles/Components/SheetDisplay.css';
import { AbstractSelector } from '../AbstractSelector';

/**
 *
 * @param {{files: [{filename: string, sheetAttributes: [{name: string, columns: number, rows: number}], sheetData: [{data: any[]}]}]}} props The props that are used for this component.
 * @returns
 */
export const SheetSelector = ({ type, newType, files, radioOnClick }) => {
  const changeType = () => newType('headers');

  return (
    type === 'sheets' && (
      <AbstractSelector type={type} title='Select a sheet' onClick={changeType}>
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
      </AbstractSelector>
    )
  );
};
