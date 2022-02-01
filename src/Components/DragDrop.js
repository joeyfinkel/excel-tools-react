import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { getDataFromSheet } from '../Utils/File';
import readXlsxFile from 'read-excel-file';
import '../Styles/Components/DragDrop.css';

/**
 * Creates the drag and drop component.
 * @returns The drag and drop component.
 */
export const DragDrop = ({ templateType, type, newType, addFiles }) => {
  const templateTypes = ['sheet-merger', 'image-template'];
  const multiple =
    templateType === 'sheet-merger' || templateType === 'image-template'
      ? true
      : false;

  const addToFiles = async (filesArr, filename, sheets, file) => {
    const sheetAttributes = await getDataFromSheet(sheets, file, 'attributes');
    const sheetData = await getDataFromSheet(sheets, file, 'data');

    filesArr.push({ filename, sheetAttributes, sheetData });
    addFiles(filesArr);
    localStorage.setItem('filesData', JSON.stringify(filesArr, null, 2));
  };

  /**
   * Reads the uploaded XLSX file and gets information on each sheet.
   * @param {Event} e The XLSX file that was uploaded.
   */
  const showSheetInformation = async (e) => {
    const filesObj = e.target.files;
    const filesArr = [];

    for (const file of filesObj) {
      const sheets = await readXlsxFile(file, {
        getSheets: true,
      });
      const filename = file.name.replace('.xlsx', '');

      await addToFiles(filesArr, filename, sheets, file);
    }

    newType('sheets');
  };

  return (
    <div
      className={`${
        type === 'dragDrop'
          ? 'd-flex justify-content-center align-items-center mx-auto mt-5'
          : 'd-none'
      }`}
      id='dragDrop'
      onChange={showSheetInformation}
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
