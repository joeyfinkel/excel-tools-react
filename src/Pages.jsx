import React from 'react';
import { Main } from './Components/Main';

export const ColumnRemover = () => <Main templateType='column-remover' />;
export const Home = () => <Main templateType='home' />;
export const ItemTemplate = () => <Main templateType='item-template' />;
export const ImageTemplate = () => <Main templateType='image=template' />;
export const MissingDataTemplate = () => (
  <Main templateType='missing-data-template' />
);
export const SheetMerger = () => <Main templateType='sheet-merger' />;
export const Tutorials = () => <Main templateType='tutorials' />;
