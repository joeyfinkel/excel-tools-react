import React, { useState, useEffect } from 'react';

import { Sidebar } from './Components/Sidebar';

export const App = () => {
  const [title, setTitle] = useState('EDS Tools');

  const changeTitle = (_title) => setTitle(_title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <Sidebar onCLick={changeTitle} />
    </div>
  );
};
