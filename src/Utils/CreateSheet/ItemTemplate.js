import { getData } from '../Helpers';

export const transformDataFromStorage = (activeSheetIdx) => {
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
  const dataFromStorage = getData(activeSheetIdx);
  console.log(dataFromStorage);
  const getIndicesToRemove = (originalHeaders) => {
    const removeIndices = [];
    // console.log(originalHeaders);
    originalHeaders.filter(
      (header) =>
        !headersToRemove.includes(header) &&
        removeIndices.push(originalHeaders.indexOf(header))
    );

    console.log(removeIndices);

    return removeIndices;
  };

  const removeData = () => {
    const originalHeaders = dataFromStorage[0][0];
    const indicesToRemove = getIndicesToRemove(originalHeaders);
    const finalRowLength = originalHeaders.length - indicesToRemove.length;
    const data = [];
    const finalData = [];

    let count = 0;

    // setRowLength(() => rowLength + 5);

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

  //   return removeData().map((row) =>
  //     row.map((value) => {
  //       return { value };
  //     })
  //   );
};
