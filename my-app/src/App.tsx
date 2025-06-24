import React from 'react';
import './App.css';

import Page from './features/Components/Page/Page';
import JsonData from './data/json-server/json-server';




function App() {

  console.log(JsonData())

  return (
    <div className="App">
      <Page></Page>
    </div>
  );
}

export default App;
