import readXlsxFile from 'read-excel-file';

const uploadedFile = JSON.parse(localStorage.getItem('filesData'));
const headersToRemove = [
  'isAdultProduct',
  'isEligibleForTradeIn',
  'isEligibleForSuperSaverShipping',
  'salesRanks',
  'salesRankReference',
  'salesRankReferenceHistory',
  'hasReviews',
  'liveOffersOrder',
  'buyBoxSellerIdHistory',
  'offersSuccessful',
  'type',
  'eanList',
  'variations',
];

// Can be used globally (for all pages)
export const getSheetData = (activeSheetIdx) =>
  uploadedFile.map(({ sheetData }) => sheetData[activeSheetIdx]);
export const getHeaders = (activeSheetIdx) =>
  getSheetData(activeSheetIdx)[0][0];

// For item template
const getHeaderIdxToRemove = (activeSheetIdx) => {
  const headers = [];
  getHeaders(activeSheetIdx).forEach(
    (header) =>
      headersToRemove.includes(header) &&
      headers.push(getHeaders(activeSheetIdx).indexOf(header))
  );

  return headers;
};
const removeColumns = (activeSheetIdx) => {
  const sheetData = getSheetData(activeSheetIdx)[0];
  const headers = getHeaderIdxToRemove(activeSheetIdx);
  const row = [];
  console.log(sheetData);
  sheetData.forEach((_row) => {
    const newRow = [];
    _row.forEach((cell, idx) => !headers.includes(idx) && newRow.push(cell));
    row.push(newRow);
  });
  return row;
};
export const transformData = (activeSheetIdx) =>
  removeColumns(activeSheetIdx).map((row) =>
    row.map((value) => {
      return { value };
    })
  );

const setSheetNames = (sheets) => sheets.map((sheet) => sheet.name);
const setColumns = (data) => data.map((row) => row.length)[0];
const getAllSheetData = (sheets, file, type) => {
  const sheetNames = setSheetNames(sheets);
  const sheetAttributes = sheetNames.map(async (sheet) => {
    const data = await readXlsxFile(file, {
      sheet,
    });

    return {
      name: sheet,
      columns: setColumns(data),
      rows: data.length,
    };
  });
  const sheetData = sheetNames.map(async (sheet) =>
    readXlsxFile(file, {
      sheet,
    })
  );

  return type === 'attributes'
    ? Promise.all(sheetAttributes)
    : Promise.all(sheetData);
};

const saveToStorage = async (filesArr, filename, sheets, file, addFiles) => {
  const sheetAttributes = await getAllSheetData(sheets, file, 'attributes');
  const sheetData = await getAllSheetData(sheets, file, 'data');

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

export const getData = (activeSheetIdx) => {
  const data = JSON.parse(localStorage.getItem('filesData'));
  console.log(data.sheetData);
  return data.map(({ sheetData }) => sheetData[activeSheetIdx]);
};
