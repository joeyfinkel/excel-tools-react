import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// type Page = string;
type Icon = IconDefinition
// export interface Pages {
//   columnRemover: Page;
//   itemTemplate: Page;
//   imageTemplate: Page;
//   sheetMerger: Page;
//   missingDataTemplate: Page;
//   tutorial: Page;
//   home: Page;
// }

interface Page {
  path: string;
  title: string;
  headings: string[];
  icon?: Icon;
  cardProps?: [{ homeText: string; tutorialText: string }];
}
