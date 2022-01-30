import React from 'react';
import { BackButton } from './Buttons/BackButton';
import { CreateSheetButton } from './Buttons/CreateSheetButton';
import { ForwardButton } from './Buttons/ForwardButton';
import { Title } from './Title';

/**
 *
 * @param {{type: string, title: string, children: JSX.Element, onClick: () => any}} props Props for this component.
 * @returns
 */
export const AbstractSelector = ({ type, title, children, onClick }) => (
  <div
    className={type === 'sheets' || type === 'headers' ? '' : 'd-none'}
    id={type}
  >
    <BackButton />
    <Title title={title} />
    {children}
    {type === 'sheets' ? (
      <ForwardButton onClick={onClick} />
    ) : (
      <CreateSheetButton onClick={onClick} />
    )}
  </div>
);
