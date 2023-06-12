import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Search.css';


function Search({ setqueryData }) {
  const [query, setquery] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      try{
        const res = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}`);
        setqueryData(res.data.data);
        
      }catch(err){
        console.log(err)
      }
    };

    fetchData();
    setquery("");
  };
  return (
    <div className="search">
      <form onSubmit={searchHandler}>
        <input
          type="text"
          placeholder="Search Here..."
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <button className="search_btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Search