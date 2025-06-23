import React from 'react';
import logo from './logo.svg';
import './App.css';

import Like from './features/Like/Like';
import Comment from './features/CommentFeatures/Comment/Comment';
import CommentExpandableList from './features/CommentFeatures/CommentExpandableList/CommentExpandableList';
import Post from './features/Post/Post';

function App() {
  return (
    <div className="App">
      <Post publisherName='user' content='hi im a post'></Post>
    </div>
  );
}

export default App;
