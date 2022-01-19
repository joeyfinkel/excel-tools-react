import readXlsxFile from 'read-excel-file';

const setSheetNames = (sheets) => sheets.map((sheet) => sheet.name);

/**
 * Gets the number of columns in every sheet in the uploaded file.
 * @param {Row[]} data The data from the uploaded file.
 * @returns The number of columns in each sheet.
 */
const setColumns = (data) => data.map((row) => row.length)[0];

/**
 * Gets each sheet name, total columns, and total rows in every sheet in the file uploaded.
 * @param {{name: string}} sheets List of sheet names from the uploaded XLSX file.
 * @param {Event} file The uploaded XLSX file.
 * @param {'attributes' | 'data'} returnData The type of data to return
 * @returns Array of arrays containing each sheet name, total columns, and total rows.
 */
export const getDataFromSheet = (sheets, file, returnData) => {
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

  return returnData === 'attributes'
    ? Promise.all(sheetAttributes)
    : Promise.all(sheetData);
};
