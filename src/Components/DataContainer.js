import React, { useEffect, useState } from 'react';
import { BackButton } from './Buttons/BackButton';
import { CreateSheetButton } from './Buttons/CreateSheetButton';
import { ForwardButton } from './Buttons/ForwardButton';

/**
 * Creates the container for displaying the sheet data. Can be used with
 * `<SheetSelector />` by passing in `'sheets'` for `type` and `<HeaderSelector />`
 * by passing in `'headers'` for `type`.
 * @param {{type: 'sheets' | 'headers', children: JSX.Element}} props The props for the component.
 * @returns The wrapping `<div></div>` that can be used for `<SheetSelector />` and `<HeaderSelector />`.
 */
export const DataContainer = ({ type, isShown, onClick, children }) => {
  useEffect(() => {
    const setIsShown = (state) => !state;

    setIsShown(isShown);
  }, [isShown]);

  return (
    <div
      className='position-relative overflow-auto pt-3 sheet-display mx-auto mt-4'
      id={type}
      onClick={onClick}
    >
      <BackButton />
      {children}
    </div>
  );
};

export const DataContainerNew = ({ type, children }) => (
  <div
    className='position-relative overflow-auto pt-3 sheet-display mx-auto mt-4'
    id={type}
  >
    {children}
  </div>
);
