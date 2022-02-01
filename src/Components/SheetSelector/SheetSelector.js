import React from 'react';
import { ListGroup } from 'react-bootstrap';

import { Heading } from './Heading';
import { DataList } from './DataList';
import { AbstractSelector } from '../AbstractSelector';
import '../../Styles/Components/SheetDisplay.css';

/**
 *
 * @param {{files: [{filename: string, sheetAttributes: [{name: string, columns: number, rows: number}], sheetData: [{data: any[]}]}]}} props The props that are used for this component.
 * @returns
 */
export const SheetSelector = ({
  type,
  newType,
  templateType,
  files,
  radioOnClick,
}) => {
  const changeType = () => newType('headers');

  const populate = () => {
    switch (templateType) {
      case 'column-remover':
        return files.map(({ sheetAttributes, filename }, idx) => (
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
        ));
    }
  };

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
