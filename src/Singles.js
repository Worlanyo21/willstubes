import React from 'react';
import {useParams, Link} from 'react-router-dom';


const Singles = ({music}) => {
  const {songid} = useParams();
  const mySongs = music.find((song) => song.id == songid);
  const {img, title, singer} = mySongs;
  return (
    <section>
    <div className='singles'>
      <div>
      <img src={img} alt='songs' className='artistImg'/>
      </div>
      <div className='albumDetails'>
        <p> Artist Name: <span style={{color:"white",  fontSize:"17px"}}>{singer}</span></p>
        <p> Song Title: <span style={{color:"white", fontSize:"17px"}}>{title}</span ></p>
      </div>
    </div>
    <Link to="/Home" className="btn btn-secondary" style={{}}>Back Home</Link>
  </section>
  )
}

export default Singles