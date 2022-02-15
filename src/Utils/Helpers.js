export const Data = {
  uploadedFile: JSON.parse(localStorage.getItem('filesData')),
  write: {},
  read: {
    headers: (activeSheetIdx) =>
      Data.uploadedFile.map(({ sheetData }) => sheetData[activeSheetIdx][0]),
  },
};

// export class Data {
//   data = JSON.parse(localStorage.getItem('filesData'));

//   constructor(activeSheetIdx) {
//     this.activeSheetIdx = activeSheetIdx;
//   }

//   getSheetData = () =>
//     this.data.map(({ sheetData }) => sheetData[this.activeSheetIdx]);

//   getSheetAttributes = () =>
//     this.data.map(
//       ({ sheetAttributes }) => sheetAttributes[this.activeSheetIdx]
//     );

//   getHeaders = () =>
//     this.data.map(({ sheetData }) => sheetData[this.activeSheetIdx][0]);
// }

export const getData = (activeSheetIdx) => {
  const data = JSON.parse(localStorage.getItem('filesData'));
  console.log(data.sheetData);
  return data.map(({ sheetData }) => sheetData[activeSheetIdx]);
};

export const getHeaders = (activeSheetIdx) =>
  getData(activeSheetIdx).map(({ sheetData }) => sheetData[activeSheetIdx][0]);
