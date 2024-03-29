import axios from "axios";
import React, { useEffect, useState } from "react";
import './App.css';
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Loader from "./components/Loader";

export function App() {
  const [postdata,setPostData] = useState()
  const [queryData, setqueryData] = useState();
  const api = `https://api.jikan.moe/v4/top/anime`;


  useEffect(() =>{
    const fetchData = async () => {
      const res = await axios.get(api) 
      const data = res.data.data

      setPostData(data);
    }

    fetchData()
  },[])
  return (
    <div className="App">
      <Header setqueryData={setqueryData} />
      {postdata ? (
        <Feed postData={queryData ? queryData : postdata} />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App
