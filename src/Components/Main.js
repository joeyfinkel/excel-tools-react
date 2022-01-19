import React, { useEffect, useState } from 'react';
import { DataContainer, DataContainerNew } from './DataContainer';
import { DragDrop } from './DragDrop';
import { HeaderSelector } from './HeaderSelector';
import { Heading } from './Heading';
import { SheetSelector } from './SheetSelector/SheetSelector';

/**
 * Creates an abstract main section for every page that it's used for.
 * @param {{mainHeading: string, subHeading: string, templateType: string extraHeadings?: string}} headings The headings that are shown.
 * @returns An abstract component that could be used with any page.
 */
export const Main = ({
  mainHeading,
  subHeading,
  templateType,
  extraHeadings = '',
}) => {
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
    <div className='main-section mx-auto'>
      <Heading
        mainHeading={mainHeading}
        subHeading={subHeading}
        extraHeadings={extraHeadings}
      />
      <div className='mx-auto' id='main'>
        <DataContainerNew type={type}>
          <DragDrop type={type} newType={setType} addFiles={setFilesArr} />
          <SheetSelector
            type={type}
            newType={setType}
            files={filesArr}
            radioOnClick={sheetSelectorRadioOnClick}
          />
          <HeaderSelector
            type={type}
            newType={setType}
            files={filesArr}
            activeSheet={activeSheet}
          />
        </DataContainerNew>
      </div>
    </div>
  );
};
