import React from 'react';
import { FormCheck, ListGroupItem } from 'react-bootstrap';

/**
 *
 * @param {{attributes: {name: string, columns: string, rows: string}, filename: string}} props Values from the uploaded file to display.
 * @returns
 */
export const DataList = ({ attributes, filename, onClick }) => {
  const listStyle = 'bg-transparent border-0 h6 mx-auto mb-0 text';

  return (
    <>
      <ListGroupItem className={listStyle}>
        <FormCheck
          type='radio'
          id={`${filename}_${attributes.name}`}
          name={attributes.name}
          label={attributes.name}
          onClick={onClick}
        />
      </ListGroupItem>
      <ListGroupItem className={listStyle}>{attributes.columns}</ListGroupItem>
      <ListGroupItem className={listStyle}>{attributes.rows}</ListGroupItem>
    </>
  );
};
