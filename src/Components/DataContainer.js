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

export const DataContainerNew = ({ type, children }) => {
  const [style, setStyle] = useState('');
  const mainStyle = 'position-relative pt-3 mx-auto mt-4';

  const styles = {
    dragDrop: `drag-drop__container overflow-none ${mainStyle}`,
    dataView: `data-view__container overflow-auto ${mainStyle}`,
  };

  useEffect(() => {
    switch (type) {
      case 'dragDrop':
        setStyle(styles.dragDrop);
        break;
      case 'sheets':
        setStyle(styles.dataView);
        break;
      case 'headers':
        setStyle(styles.dataView);
        break;
      default:
        setStyle(styles.dragDrop);
    }
  }, [type, styles.dragDrop, styles.dataView]);

  return (
    <div className={style} id='dataContainer'>
      {children}
    </div>
  );
};
