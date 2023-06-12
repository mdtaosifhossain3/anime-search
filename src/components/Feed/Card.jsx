import React, { useState } from 'react';
import './Card.css';

function Card({ postData }) {
  const [visible,setvisible] = useState(9)
  
  const clickHandler = () => {
    if(visible <= postData.length){

      setvisible((pvalue) => pvalue + 6)
    }
    else{
      setvisible(6);
    }
  }
  
  
  return (
    <div className="card">
      <div className="cards">
        {postData &&
          postData.slice(0, visible).map((post) => (
            <div className="cardBody" key={post.mal_id}>
              <a href={post.url} target="_blank">
                <div>
                  {/* Image */}
                  <img src={post.images.jpg.image_url} alt="anime" />
                </div>
                <div className="cardDetails">
                  {/* Details */}
                  <h3>{post.title}</h3>
                  <h4>Episodes:{post.episodes}</h4>
                  <p>Rank:{post.rank}</p>
                </div>
              </a>
            </div>
          ))}
      </div>
      {postData.length === 0 ? (
        ""
      ) : (
        <button className="showMoreBtn" onClick={clickHandler}>
          Show {visible >= postData.length ? "Less" : "More"}
        </button>
      )}
    </div>
  );
}

export default Card