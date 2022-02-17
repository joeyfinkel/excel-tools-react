const uploadedFile = JSON.parse(localStorage.getItem('filesData'));

type Cell = string | number | boolean | typeof Date;
type Row = Cell[];
type Sheets = { name: string };
type SheetDataType = 'attributes' | 'data';
type Header = string;

interface Files {
  setSetSheetNames?: (sheets: Sheets) => string[];
  setColumns?: (data: Row[]) => number;
  getSheetData?: (activeSheetIdx: number) => Row[];
  getAllSheetData?: (
    sheets: Sheets,
    file: Event,
    sheetDataType: SheetDataType
  ) => Promise<any[]>;
  getHeaders: (activeSheetIdx: number) => Header[];
}
