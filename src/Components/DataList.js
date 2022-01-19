import React from 'react';
import { Radio } from './Radio';

/**
 *
 * @param {{type: string, headers: string[], attribute: {name: string, columns: string, rows: string}, filename: string}} props Props for this component.
 * @returns
 */
export const DataList = ({ type, headers, attribute, filename }) => {
  const listStyle =
    'list-group-item bg-transparent border-0 h6 mx-auto mb-0 text';

  const handleClick = (e) =>
  {
    
    console.log(e.target.value);
  };

  switch (type) {
    case 'sheets':
      return (
        <>
          <li key='1' className={listStyle}>
            <Radio
              name={attribute.name}
              id={`${filename}_${attribute.name}`}
              onClick={handleClick}
            />
          </li>
          <li key='2' className={listStyle}>
            {attribute.columns}
          </li>
          <li key='3' className={listStyle}>
            {attribute.rows}
          </li>
        </>
      );
    case 'headers':
      return headers.map((header) => <li className={listStyle}>{header}</li>);
    default:
      return <div />;
  }
};
