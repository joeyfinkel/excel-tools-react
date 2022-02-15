import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Heading } from './Heading';
import { CardRow } from './Cards/CardRow';
import { DataContainer } from './DataContainer';
import { DragDrop } from './DragDrop';
import { SheetSelector } from './SheetSelector';

const propTypes = {
  templateType: PropTypes.oneOf([
    'home',
    'column-remover',
    'sheet-merger',
    'item-template',
    'image-template',
    'missing-data-template',
    'tutorials',
  ]),
};

export const Main = ({ templateType }) => {
  const [files, setFiles] = useState([]);
  const [type, setType] = useState('dragDrop');

  useEffect(() => {
    const fileUpload = document.getElementById('upload');

    setFiles(JSON.parse(localStorage.getItem('filesData')));
  }, []);

  return (
    <div className='d-flex flex-column overflow-hidden wrapper vh-100'>
      <Heading templateType={templateType} />
      {templateType === 'home' || templateType === 'tutorials' ? (
        <CardRow templateType={templateType} />
      ) : (
        <DataContainer componentType={type}>
          <DragDrop
            templateType={templateType}
            type={type}
            newType={setType}
            addFiles={setFiles}
          />
          <SheetSelector type={type} files={files} newType={setType} />
        </DataContainer>
      )}
    </div>
  );
};

Main.propTypes = propTypes;
