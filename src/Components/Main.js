import React, { useEffect, useState } from 'react';
import { CardRow } from './Cards/CardRow';
import { DataContainer } from './DataContainer';
import { DragDrop } from './DragDrop';
import { HeaderSelector } from './HeaderSelector';
import { Heading } from './Heading';
import { SheetSelector } from './SheetSelector/SheetSelector';

/**
 * Creates an abstract main section for every page that it's used for.
 * @param {{templateType: string}} headings The headings that are shown.
 * @returns An abstract component that could be used with any page.
 */
export const Main = ({ templateType }) => {
  const [filesArr, setFilesArr] = useState([]);
  const [activeSheet, setActiveSheet] = useState('');
  const [type, setType] = useState('dragDrop');

  const sheetSelectorRadioOnClick = (e) => {
    setActiveSheet(e.target.name);
  };

  useEffect(() => {
    setFilesArr(JSON.parse(localStorage.getItem('filesData')));
  }, []);

  return (
    <div className='d-flex flex-column justify-content-center align-items-center overflow-hidden wrapper'>
      <Heading templateType={templateType} />
      {templateType === 'home' || templateType === 'tutorials' ? (
        <CardRow templateType={templateType} />
      ) : (
        <DataContainer componentType={type}>
          <DragDrop
            templateType={templateType}
            type={type}
            newType={setType}
            addFiles={setFilesArr}
          />
          <SheetSelector
            files={filesArr}
            radioOnClick={sheetSelectorRadioOnClick}
          />
          <HeaderSelector
            type={type}
            newType={setType}
            files={filesArr}
            activeSheet={activeSheet}
          />
        </DataContainer>
      )}
    </div>
  );
};
