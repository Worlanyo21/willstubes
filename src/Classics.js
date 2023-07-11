import React from "react";
import { Link } from "react-router-dom";
import data from "./Data";



const Trending = (props) => {
  

  return (
    <div className="container bg-dark mt-5" id="album">
    
      <div className="">
        <p className="Trending">New Albums</p>
      </div>
      <section className="main-body" >
        <div className="container">
       
          <div className="row">
            {props.newData.map((itm, index) => (
              <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
                
                <div className="Image2 mb-5 ">
                <Link to={`/Home/Categories/${itm.id}`} style={{textDecoration: "none"}}>
                  <div className="Image3">
                    <img src={itm.img} alt="Image" />
                  </div>
                  
                  <div className="text">
                    <p className="title3" >
                      {itm.title} </p>                    
                      <p className="title4"> {itm.singer}{" "}</p>
                  </div>
                  </Link>
                </div>
                
              </div>
            ))}
            
          </div>
         
         
        </div>
      </section>
      
    </div>
  );
};

export default Trending;
