import React from 'react';
import welcome from "./Images/Welcome6.jpeg";
import Loading from './Loading';
import brand from "./Images/brand11.png"
import {Link} from "react-router-dom";


const Homepage = () => {
  const [isLoading, setLoading] = React.useState(true);
  

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, []);


  

  if(isLoading) {
    return <Loading />;
  }else {
  return (
    <>
    
    <div >
         <img src={welcome} alt="welcome" className="front"/>
         
         <a className="navbar-brand" href="#">
        <img src={brand} alt="" className="brand" style={{position: "relative"}} />
        </a>
         
         <h1 className="intro">STAY INFORMED WITH US!</h1>
         <p className="intro1">Become a part of our community to stay updated on the latest news and hottest trends in music.</p>
        <div className="btn1" style={{textDecoration: "none"}}>
          <Link to="/SignIn" >
          <button className='btn btn-light rounded-pill' style={{fontWeight: "bold",fontSize: "13px", color: "rgb(255,193,7)", marginRight: "10px"}}>Get Started</button>
          </Link>
          <Link to="/AboutUs">
          <button className='btn btn-light rounded-pill' style={{fontWeight: "bold",fontSize: "13px", color: "rgb(255,193,7)"}}>About Us</button>
          </Link>
            </div>
            </div>
        </>
  )
}
  }


export default Homepage;