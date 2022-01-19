import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

/**
 * Creates the headings for the component.
 * @returns The heading component.
 */
export const Heading = ({ headings }) => (
  <ListGroup className='mt-3 underline' horizontal>
    {headings.map((heading, idx) => (
      <ListGroupItem
        key={idx}
        className='bg-transparent border-0 h6 mx-auto mb-0 text'
      >
        {heading}
      </ListGroupItem>
    ))}
  </ListGroup>
);
