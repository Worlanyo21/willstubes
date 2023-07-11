import React from "react";
import Login from "./SignUp.js";
import brand from "./Images/brand11.png";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import {Link} from 'react-router-dom';



function Navbar(props) { 
  const [toggleMenu, setToggleMenu] = React.useState(false);
 
  const handleSubmit = (e) => e.preventDefault();

 
  return (
  /* <> <nav className="navbar navbar-expand-lg bg- flex" style={{height: 65}}>
      
        <a className="navbar-brand" href="#">
        <img src={brand} alt="" className="brand" />

        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
        <div
          className="justify-content-center collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="header-list navbar-nav mr-auto">
          <Link to="/Home" className="btn btn-outline-light rounded-pill active" style={{marginRight: "8px", marginTop: "20px"}} onClick={props.songs}>Home</Link>
          <button className="btn btn-outline-light rounded-pill" style={{margin: "8px", marginTop: "29px"}} onClick={() => props.filterCategory('Gospel')}>Gospel</button>
          <button className="btn btn-outline-light rounded-pill" style={{margin: "8px", marginTop: "29px"}} onClick={() => props.filterCategory('Afrosounds')}>Afrosounds</button>
          <button className="btn btn-outline-light rounded-pill" style={{margin: "8px", marginTop: "29px"}} onClick={() => props.filterCategory('Hip-hop')}>Hip-Hop</button>
          </ul>
         
       
        <form className="search">
      <input className="form-control" 
      type="text" 
      placeholder="Search by Song or Artiste" 
      aria-label="Search"
      style={{borderRadius: "20px", backgroundColor: "rgb(33, 37, 41)", color: "white", textAlign: "center"}}
     
      />
    </form>
        <div>
          <Link to="/" className="btn btn-light rounded" style={{marginTop: "9px"}}>LOG OUT</Link>      
        </div>
        </div>
      
    </nav>
    <hr/>
    </>*/
<div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src={brand} alt='log' />
          </div>
          <div className="gpt3__navbar-links_container">
           <p><Link to="/Home" className="btn btn-outline-warning rounded-pill" onClick={props.songs} >Home</Link></p>
            <p><a href="#album" className="btn btn-outline-warning rounded-pill"   onClick={() => props.filterCategory('Gospel')}>Gospel</a></p>
            <p><a href="#album" className="btn btn-outline-warning rounded-pill"  onClick={() => props.filterCategory('Afrosounds')}>Afrosounds</a></p>
            <p> <a href="#album" className="btn btn-outline-warning rounded-pill"  onClick={() => props.filterCategory('Hip-hop')}>Hip-Hop</a></p>
          </div>
        </div>
        <div className="gpt3__navbar-sign">
        <form className="">
      <input className="form-control" 
      type="text" 
      placeholder="Search by Song or Artiste" 
      aria-label="Search"
      style={{borderRadius: "20px", backgroundColor: "rgb(33, 37, 41)", color: "white", textAlign: "center"}}
      onChange={props.onChange}
      />
    </form>
          
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
            <p><a href="#" className="btn btn-outline-light rounded-pill"  >Home</a></p>
            <p><a href="#album" className="btn btn-outline-light rounded-pill" onClick={() => props.filterCategory('Gospel')}>Gospel</a></p>
            <p><a href="#" className="btn btn-outline-light rounded-pill" onClick={() => props.filterCategory('Afrosounds')}>Afrosounds</a></p>
            <p><a href="#" className="btn btn-outline-light rounded-pill" onClick={() => props.filterCategory('Hip-Hop')}>Hip-Hop</a></p>
            </div>
          </div>
          )}
        </div>
      </div>

  );
}
export default Navbar;
