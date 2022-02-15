import { getData } from '../Helpers';

export const transformDataFromStorage = (
  activeSheetIdx,
  finalHeaders,
  setRowLength,
  rowLength
) => {
  const dataFromStorage = getData(activeSheetIdx);

  const getIndicesToRemove = (originalHeaders, headersList) => {
    const removeIndices = [];

    originalHeaders.filter(
      (header) =>
        !headersList.includes(header) &&
        removeIndices.push(originalHeaders.indexOf(header))
    );

    return removeIndices;
  };

  const removeData = () => {
    const originalHeaders = dataFromStorage[0][0];
    const uniqueHeaders = [...new Set(finalHeaders)];
    const indicesToRemove = getIndicesToRemove(originalHeaders, uniqueHeaders);
    const finalRowLength = originalHeaders.length - indicesToRemove.length;
    const data = [];
    const finalData = [];

    let count = 0;

    setRowLength(() => rowLength + 5);

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

  return removeData().map((row) =>
    row.map((value) => {
      return { value };
    })
  );
};
