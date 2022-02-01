import { pages } from '../Utils/Pages';

/**
 * Creates the heading section.
 * @param {{mainHeading: string, subHeading: string, extraHeadings?: string}} headings The headings that are shown.
 * @returns The heading section.
 */
export const Heading = ({ templateType }) => {
  const textStyle = 'text-center mt-4 mb-2';

  return pages.map(
    ({ path, title, headings }, idx) =>
      path === templateType && (
        <div className='title pt-2' key={idx}>
          <h1 className={textStyle}>
            <strong>{title}</strong>
          </h1>
          {headings.map((heading, headingIdx) => (
            <h5 className={textStyle} key={headingIdx}>
              <strong>{heading}</strong>
            </h5>
          ))}
        </div>
      )
  );
};
