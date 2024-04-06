import React,{useEffect,useState} from 'react'
import { API_KEY, imageUrl } from '../../Constants/Constant'
import YouTube from 'react-youtube'
import axios from '../../axios'
import './Cards.css'

function Cards(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')
     useEffect(() => {
      axios.get(props.url).then(response => {
        console.log(response.data);
        setMovies(response.data.results)
      }).catch(err => {
        alert("Network error")
      })
      },[])

      const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const handleMovie = (id) => {
      console.log(id);
      axios.get(`/movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then(response => {
        if(response.data.results.length !==0){
          setUrlId(response.data.results[0])

        }else{
          console.log("Empty Array");
        }
      })
    }
  return (
    <div className='card-container'>
      <h2>{props.title}</h2>
      <div className={`${props.isSmall ? 'small-posters' : 'card-posters'}`} >
      {movies.map((obj) => 
        <img onClick={() => handleMovie(obj.id)} src={`${imageUrl+obj.backdrop_path}`} alt="poster logo" />
      )}
       
 
      </div>
      {urlId && <YouTube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default Cards
