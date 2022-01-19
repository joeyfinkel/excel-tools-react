/**
 * Creates the title section for the sheet selector. If `templateType` is 'sheet-merger' then
 * `filename` is not needed, otherwise, provide the filename.
 * @param {{title: string}} props Used for determining and creating the title.
 * @returns The title component for the sheet selector.
 */
export const Title = ({ title }) => (
  <p className='text-center h2 '>
    <strong>{title}</strong>
  </p>
);
