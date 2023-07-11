import React from 'react';
import { Link } from 'react-router-dom';

const Trending = (props) => {
  

  /*details*/ 

  return (
    <div className="container bg-dark">
        <div className="">
            <p className="Popular">MOST POPULAR SONG</p>
            <p className="Trending">Weekly Trendz</p>
        </div>
        <section className="main-body">
      <div className="container ">
        <div className="row">
          {props.music.map((itm, index) => (
            <div className="col-sm-12 col-md-6 col-lg-4 " key={index}>
            <Link to={`/Home/Singles/${itm.id}`} style={{textDecoration: "none"}}>
              <div className="Image bg-secondary d-flex mb-3 rounded" style={{height: "100px"}}>
                <div className="Images">
                <img src={itm.img} alt="Image" />
                </div>
                <div className="text">
                <p className="title">{itm.title}</p> 
                 <p className="title2"> {itm.singer} </p>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    </div>
  )
}

export default Trending;


