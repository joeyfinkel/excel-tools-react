type Cell = string | number | boolean | typeof Date;
type Row = Cell[];
type Sheets = { name: string };
type SheetDataType = 'attributes' | 'data';
type Header = string;

export function getSheetData(activeSheetIdx: number): Row[];
// export function getSheetData(
//   sheets: Sheets,
//   file: Event,
//   sheetDataType: SheetDataType
// ): Promise<any[]>;

export default getSheetData;
