import readXlsxFile from 'read-excel-file';
import { getDataFromSheet } from '../File';

const saveToStorage = async (filesArr, filename, sheets, file, addFiles) => {
  const sheetAttributes = await getDataFromSheet(sheets, file, 'attributes');
  const sheetData = await getDataFromSheet(sheets, file, 'data');

  localStorage.clear();
  filesArr.push({ filename, sheetAttributes, sheetData });
  addFiles(filesArr);
  localStorage.setItem('filesData', JSON.stringify(filesArr, null, 2));
};

export const readUploadedFile = async (e, addFiles) => {
  const filesObj = e.target.files;
  const filesArr = [];

  for (const file of filesObj) {
    const sheets = await readXlsxFile(file, {
      getSheets: true,
    });
    const filename = file.name.replace('.xlsx', '');

    await saveToStorage(filesArr, filename, sheets, file, addFiles);
  }
};
