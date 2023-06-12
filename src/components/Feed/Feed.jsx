import React from 'react';
import Card from './Card';
import './Feed.css';
import Loader from '../Loader';

function Feed({ postData }) {
  return (
    <div className="feed">
      <h2 className="second_header">Latest Anime:</h2>
     {postData ?  <Card postData={postData} /> : <Loader/>}
    </div>
  );
}

export default Feed