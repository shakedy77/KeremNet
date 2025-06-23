import React from 'react';
import logo from './logo.svg';
import './App.css';

import Like from './features/Like/Like';
import Comment from './features/CommentFeatures/Comment/Comment';
import CommentExpandableList from './features/CommentFeatures/CommentExpandableList/CommentExpandableList';

function App() {
  return (
    <div className="App">
      <CommentExpandableList></CommentExpandableList>
    </div>
  );
}

export default App;
