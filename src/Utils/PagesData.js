import {
  faBarcode,
  faCut,
  faExchangeAlt,
  faImage,
  faQuestionCircle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

/** Object containing every page's static data */
export const data = [
  {
    path: 'home',
    title: 'Excel Tools',
    headings: ['Easily edit or create new spreadsheets'],
  },
  {
    path: 'column-remover',
    title: 'Column Remover',
    icon: faCut,
    cardProps: [
      {
        homeText: 'Remove those unwanted columns here.',
        tutorialText: 'Tutorial - Remove those unwanted columns here.',
      },
    ],
    headings: [
      'Create any item template easily!',
      'Start here by uploading a CSV or XLSX file',
    ],
  },
  {
    path: 'sheet-merger',
    title: 'Sheet Merger',
    icon: faExchangeAlt,
    cardProps: [
      {
        homeText: 'Merge 2 sheets together easily here.',
        tutorialText: 'Tutorial - Merge 2 sheets together easily here.',
      },
    ],
    headings: [
      'Create any item template easily!',
      'Start here by uploading a CSV or XLSX file',
    ],
  },
  {
    path: 'item-template',
    title: 'Item Template',
    icon: faBarcode,
    cardProps: [
      {
        homeText: 'Create the basic item template here.',
        tutorialText: 'Tutorial - Create the basic item template here.',
      },
    ],
    headings: [
      'Create any item template easily!',
      'Start here by uploading a CSV or XLSX file',
    ],
  },
  {
    path: 'image-template',
    title: 'Image Template',
    icon: faImage,
    cardProps: [
      {
        homeText: 'Create the image template here.',
        tutorialText: 'Tutorial - Create the image template here.',
      },
    ],
    headings: [
      'Create any item template easily!',
      'Start here by uploading a CSV or XLSX file',
    ],
  },
  {
    path: 'missing-data-template',
    title: 'Missing Data Template',
    icon: faTimes,
    cardProps: [
      {
        homeText: 'Create the missing data template here.',
        tutorialText: 'Tutorial - Create the missing data template here.',
      },
    ],
    headings: [
      'Create any item template easily!',
      'Start here by uploading a CSV or XLSX file',
    ],
  },
  {
    path: 'tutorials',
    title: 'Tutorials',
    icon: faQuestionCircle,
    cardProps: [
      {
        homeText: 'Not sure how something works? Check out the tutorials here.',
        tutorialText:
          'Tutorial - Not sure how something works? Check out the tutorials here.',
      },
    ],
    headings: [
      'Create any item template easily!',
      'Start here by uploading a CSV or XLSX file',
    ],
  },
];
