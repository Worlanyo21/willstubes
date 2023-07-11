import React from 'react';
import { useParams, Link } from "react-router-dom";



const Categories = ({data}) => {
  const { id } = useParams();
  const mySongs = data.find((song) => song.id == id);
  const {img, title, singer, numSongs, dateReleased, albumLink, featuredArtist, category} = mySongs;
  return (
  <section>
    <div className='singles'>
      <div>
      <img src={img} alt='songs' className='artistImg'/>
      </div>
      <div className='albumDetails'>
        <p style={{fontSize: "20px"}}> Artist Name: <span style={{color:"white",  fontSize:"19px"}}>{singer}</span></p>
        <p style={{fontSize: "20px"}}> Album Title: <span style={{color:"white", fontSize:"19px"}}>{title}</span ></p>
        <p style={{fontSize: "20px"}}> Date Released: <span style={{color:"white", fontSize:"19px"}}>{dateReleased}</span ></p>
        <p style={{fontSize: "20px"}}> Number of Tracks: <span style={{color:"white", fontSize:"19px"}}>{numSongs}</span ></p>
        <p style={{fontSize: "20px"}}> Song Category: <span style={{color:"white", fontSize:"19px"}}>{category}</span ></p>
        <p style={{fontSize: "20px"}}> List of Featured Artists: <span style={{color:"white", fontSize:"19px"}}>{featuredArtist}</span></p>
        <a href={albumLink} className="btn btn-secondary" style={{marginRight: "10px"}}>Album Link</a>
        <Link to="/Home" className="btn btn-secondary" style={{ }}>Back Home</Link>
      </div>
    </div>
  </section>
  )
}


export default Categories