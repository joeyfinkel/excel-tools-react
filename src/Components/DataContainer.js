import React, { useEffect, useState } from 'react';

export const DataContainer = ({ componentType, children }) => {
  const [style, setStyle] = useState('');
  const mainStyle = 'position-relative px-4 mx-auto mt-4';

  const styles = {
    dragDrop: `drag-drop__container overflow-hidden ${mainStyle}`,
    dataView: `data-view__container ${mainStyle}`,
  };

  useEffect(() => {
    switch (componentType) {
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
  }, [componentType, styles.dragDrop, styles.dataView]);

  return (
    <div className={style} id='dataContainer'>
      {children}
    </div>
  );
};
