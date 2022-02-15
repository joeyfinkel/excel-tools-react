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
const headersToRename = {
  asin: 'ASIN',
  model: 'SKU',
  description: 'Marketing Copy',
  upcList: 'UPC',
};

const getData = (activeSheetIdx) => {
  const data = JSON.parse(localStorage.getItem('filesData'));

  return data.map(({ sheetData }) => sheetData[activeSheetIdx]);
};

const getIndicesToRemove = (originalHeaders, headersList) => {
  const removeIndices = [];

  originalHeaders.filter(
    (header) =>
      !headersList.includes(header) &&
      removeIndices.push(originalHeaders.indexOf(header))
  );

  return removeIndices;
};

export const removeData = (
  activeSheetIdx,
  templateType,
  ...{ finalHeaders, setRowLength, rowLength }
) => {
  const dataFromStorage = getData(activeSheetIdx);
  const originalHeaders = dataFromStorage[0][0];
  const finalHeadersList =
    templateType === 'item-template'
      ? headersToRemove
      : [...new Set(finalHeaders)];
  const indicesToRemove = getIndicesToRemove(originalHeaders, finalHeadersList);
  const finalRowLength = originalHeaders.length - indicesToRemove.length;
  const data = [];
  const finalData = [];

  let count = 0;

  templateType !== 'item-template' && setRowLength(() => rowLength + 5);

  dataFromStorage.map((row) =>
    row.map((cell) =>
      cell.map(
        (value, idx) => !indicesToRemove.includes(idx) && data.push(value)
      )
    )
  );

  while (count < data.length) {
    finalData.push([data[count], data[count + 1]]);
    count += finalRowLength;
  }

  return finalData;
};

export const transformDataFromStorage = (
  activeSheetIdx,
  templateType,
  ...{ finalHeaders, setRowLength, rowLength }
) => {
  const newData = removeData(
    activeSheetIdx,
    templateType,
    finalHeaders,
    setRowLength,
    rowLength
  );

  return newData.map((row) =>
    row.map((value) => {
      return { value };
    })
  );
};
