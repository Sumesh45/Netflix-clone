import React, { useEffect, useState } from 'react';
import { API_KEY,imageUrl } from '../../Constants/Constant';
import axios from '../../axios';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) =>{
      console.log(response.data.results[0])
      setMovie(response.data.results[Math.floor(Math.random()*20)])
      
    })

  },[])
  return (
    <div
    style={{backgroundImage:`url(${movie ? imageUrl + movie.backdrop_path : ""})`}}
     className='banner'>
      <div className="content">
        <h1 className='title'>{movie ? movie.name || movie.title : ""}</h1>
        <div className="buttons">
            <button className='button'>Play</button>
            <button className='button'>My Lists</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade"></div>
    </div>
  )
}

export default Banner
