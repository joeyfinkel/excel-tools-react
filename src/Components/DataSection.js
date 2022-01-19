import React from 'react';
import { DataContainer } from './DataContainer';
import { DataList } from './DataList';

const sectionStyle =
  'list-group list-group-flush list-group-horizontal mt-2 underline';

/**
 * Creates the sheet data section that shows the sheet name, total columns, and total rows.
 * @param {{file: {filename: string, sheetAttributes: [{name: string, columns: number, rows: number}], sheetData: [{data: any[]}]}}} props
 * The sheet data that is shown.
 * @private Used for making the {@link DataSection}
 * @returns The section that shows the sheet data.
 */
const SheetsSection = ({ file }) =>
  file.sheetAttributes.map((attribute, idx) => (
    <ul key={idx} className={sectionStyle}>
      <DataList type='sheets' attribute={attribute} filename={file.filename} />
    </ul>
  ));

/**
 * Creates the sheet data section that shows the sheet name, total columns, and total rows.
 * @param {{file: {filename: string, sheetAttributes: [{name: string, columns: number, rows: number}], sheetData: [{data: [any[]]}]}}} props
 * The sheet data that is shown.
 * @private Used for making the {@link DataSection}
 * @returns The section that shows the headers.
 */
const HeadersSection = ({ file }) =>
  file.sheetData.map((data, idx) => (
    <ul key={idx} className={sectionStyle}>
      <DataList type='headers' header={data.data} />
    </ul>
  ));

export const DataSection = ({ type, file }) => {
  switch (type) {
    case 'sheets':
      return <SheetsSection file={file} />;
    case 'headers':
      return <HeadersSection file={file} />;
    default:
      return <DataContainer type={type} />;
  }
};
