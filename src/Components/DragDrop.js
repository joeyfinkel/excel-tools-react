import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

import { readUploadedFile } from '../Utils/Data/readData';
import { removeData } from '../Utils/Data/writeData';
import { transformDataFromStorage } from '../Utils/CreateSheet/ItemTemplate';

import '../Styles/Components/DragDrop.css';
import { Data, getHeaders, } from '../Utils/Helpers';

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

export const DragDrop = ({ templateType, type, newType, files, addFiles }) => {
  const multiple =
    templateType === 'sheet-merger' || templateType === 'image-template'
      ? true
      : false;

  const showSheetInformation = async (e) => {
    readUploadedFile(e, addFiles);
    newType('container');
  };

  const createSheet = (e) => {
    readUploadedFile(e, addFiles);
    // console.log(JSON.parse(localStorage.getItem('filesData')));
    // transformDataFromStorage(1);

    // console.log(new Data(0).getHeaders());
    console.log(Data.read.headers(0));
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
