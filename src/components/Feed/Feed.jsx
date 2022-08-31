import React from 'react';
import Card from './Card';
import './Feed.css';

function Feed({ postData }) {
  return (
    <div className="feed">
      <h2 className="second_header">Latest Anime:</h2>
      <Card postData={postData} />
    </div>
  );
}

export default Feed