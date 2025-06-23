import React from 'react';
import logo from './logo.svg';
import './App.css';

import Like from './features/Like/Like';
import Comment from './features/Comment/Comment';

function App() {
  return (
    <div className="App">
      <Comment publisherName='yon' content='heasdfasdfasdfasdfasdfasdfllo'></Comment>
    </div>
  );
}

export default App;
