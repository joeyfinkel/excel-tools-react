import { Main } from '../Components/Main';

/**
 * Creates the main page for the column remover tool.
 * @returns The main page for the column remover page.
 */
export const ColumnRemover = () => (
  <Main
    mainHeading='Column Remover'
    subHeading='Create any item template easily!'
    templateType='column-remover'
    extraHeadings='Start here by uploading a CSV or XLSX file'
  />
);
