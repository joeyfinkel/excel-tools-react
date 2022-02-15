import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { App } from './App';
import {
  ColumnRemover,
  Home,
  ImageTemplate,
  ItemTemplate,
  MissingDataTemplate,
  SheetMerger,
  Tutorials,
} from './Pages';
import './Styles/Style.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='column-remover' element={<ColumnRemover />} />
          <Route path='sheet-merger' element={<SheetMerger />} />
          <Route path='item-template' element={<ItemTemplate />} />
          <Route path='image-template' element={<ImageTemplate />} />
          <Route
            path='missing-data-template'
            element={<MissingDataTemplate />}
          />
          <Route path='tutorials' element={<Tutorials />} />
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
