import React, { useEffect, useState } from 'react';
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
  const [isShown, setIsShown] = useState(true);

  const changeShown = () => {
    setIsShown(false);
  };

  const sheetSelectorBtnOnClick = () => {
    setIsShown(true);
    document.getElementById('headers').classList.remove('d-none');
    document.getElementById('sheets').classList.add('d-none');
  };

  const sheetSelectorRadioOnClick = (e) => {
    setActiveSheet(e.target.value);
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
      <div className='mx-auto' id='main' onChange={changeShown}>
        <DragDrop addFiles={setFilesArr} isShown={isShown} />
        {filesArr && (
          <>
            <SheetSelector
              files={filesArr}
              isShown={isShown}
              btnOnClick={sheetSelectorBtnOnClick}
              radioOnClick={sheetSelectorRadioOnClick}
            />
            <HeaderSelector
              files={filesArr}
              isShown={isShown}
              activeSheet={activeSheet}
            />
          </>
        )}
      </div>
    </div>
  );
};
