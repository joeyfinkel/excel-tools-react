import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import writeXlsxFile from 'write-excel-file';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

import { readUploadedFile, transformData } from '../Utils/Helpers';

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

export const DragDrop = ({ templateType, type, newType, addFiles }) => {
  const multiple =
    templateType === 'sheet-merger' || templateType === 'image-template'
      ? true
      : false;

  const showSheetInformation = async (e) => {
    readUploadedFile(e, addFiles);
    newType('container');
  };

  const createSheet = async (e) => {
    readUploadedFile(e, addFiles);
    await writeXlsxFile(transformData(0), { fileName: 'New Sheet.xlsx' });
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
