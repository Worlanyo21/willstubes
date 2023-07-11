import React from 'react';
import artiste from "./ArtistImages"

const Artist = () => {
  return (
    <div className='container flex items-center text-white  justify-content-center pt-10' style={{display: "flex", marginBottom: "20px", cursor: "pointer"}}>
        <div className='flex items-center '>
            {
                artiste.map((artist, index) => (
                    <div className="flex"  key={index} style={{display: "inline"}}>
                        <img src={artist.img} alt='artist' className='object-cover rounded-pill' style={{height: "140px", width: "140px", marginLeft: "-30px", position: "relative"}} />
                    </div>
                ))
            }

        </div>
        <div className='Playlist'>
            <h1 style={{fontSize: "27px"}}>Tell us which artist you like</h1>
            <p>We'll create an experience just for you</p>
            <div>
                <button className='btn btn-warning rounded text-white' style={{ Color: "white"}}>Let's Go</button>
            </div>
        </div>
       
    </div>
  )
}

export default Artist;