import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

// import { readUploadedFile } from '../Utils/Data/readData';
import { removeData } from '../Utils/Data/writeData';
import { transformDataFromStorage } from '../Utils/CreateSheet/ItemTemplate';
import {
  getSheetData,
  getHeaders,
  readUploadedFile,
  removeColumns,
} from '../Utils/Helpers';

import '../Styles/Components/DragDrop.css';

const propsTypes = {
  templateType: PropTypes.oneOf([
    'home',
    'column-remover',
    'sheet-merger',
    'item-template',
    'image-template',
    'missing-data-template',
    'tutorials',
  ]),
  type: PropTypes.oneOf(['dragDrop']).isRequired,
  newType: PropTypes.func.isRequired,
  addFiles: PropTypes.func.isRequired,
};

type Props = {
  templateType:
    | 'home'
    | 'column-remover'
    | 'sheet-merger'
    | 'item-template'
    | 'image-template'
    | 'missing-data-template'
    | 'tutorials';
  type: 'dragDrop';
  newType: (component: string) => void;
  addFiles: (filesArr: any) => void;
};

export const DragDrop = ({ templateType, type, newType, addFiles }: Props) => {
  const multiple =
    templateType === 'sheet-merger' || templateType === 'image-template'
      ? true
      : false;

  const showSheetInformation = async (e: Event) => {
    readUploadedFile(e, addFiles);
    newType('container');
  };

  const createSheet = (e: Event) => {
    readUploadedFile(e, addFiles);
    // console.log(getHeaders(0));
    // console.log(getSheetData(0));
    // console.log(getSheetData(0)[0]);
    console.log(removeColumns(0, 1));
  };

  return (
    <div
      className={`${type !== 'dragDrop' ? 'd-none' : undefined}`}
      id='dragDrop'
      onChange={
        templateType === 'item-template' ? createSheet : showSheetInformation
      }
    >
      <form action='' className='mx-auto'>
        <input type='file' name='' id='upload' hidden multiple={multiple} />
        <div className='mx-auto'>
          <label htmlFor='upload' className=' text-center' role='button'>
            <p>
              <FontAwesomeIcon icon={faUpload} size='2x' />
            </p>
            <p>
              Drag file here or click to{' '}
              <span className='fw-bolder'>browse </span>
              for one.
            </p>
          </label>
        </div>
      </form>
    </div>
  );
};

DragDrop.propTypes = propsTypes;
