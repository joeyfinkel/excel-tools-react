/**
 * Creates the heading section.
 * @param {{mainHeading: string, subHeading: string, extraHeadings?: string}} headings The headings that are shown.
 * @returns The heading section.
 */
export const Heading = ({ mainHeading, subHeading, extraHeadings = '' }) => {
  const textStyle = 'text-center mt-4 mb-2';

  return (
    <div className='title pt-2'>
      <h1 className={`h1 ${textStyle}`}>
        <strong>{mainHeading}</strong>
      </h1>
      <h5 className={`h5 ${textStyle}`}>
        <strong>{subHeading}</strong>
      </h5>
      <h5 className={`h5 ${textStyle}`}>
        <strong>{extraHeadings}</strong>
      </h5>
    </div>
  );
};
