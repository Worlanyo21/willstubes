import React from 'react';

import Loading from "./Loading";

import Trending from "./Trending";
import Classics from "./Classics";
import Footer from './Footer';
import data from "./Data";
import Navbar from './Navbar';
import Music from "./Music";
import Artist from './Artiste';



const Home = () => {
  const [songs, setSongs] = React.useState(data);
  const [trending, setTrending] = React.useState(Music);
  const [isLoading, setLoading] = React.useState(true);
  const [query, setQuery] = React.useState("");
 


 React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, []);

  const handleScroll = () => {
    const element = document.getElementById('section');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  

  const filterCategory = (categoryItem) => {
    const result = data.filter((currentCategory) => {
      return currentCategory.category === categoryItem;
    }
    );
    setSongs(result);
  }

  const keys = ["title", "singer"]

  const search = (data) => {
    return data.filter((item) => keys.some((key) => item[key].toLowerCase().includes(query))) 
   || Music.filter((item) => keys.some((key) => item[key].toLowerCase().includes(query)));
  }
  
  const handleChange = (e) => {
    setQuery(e.target.value)
  }



  if(isLoading) {
    return <Loading />;
  }else {
    return (
      /*  <>
      <div className="bar">
       
       <nav className="navbar navbar-expand-lg bg- flex responsive " >
    <div className="container-fluid col-md-12 col-sm-6 col-xs-6">
      <div className='nav-header'>
      <a className="navbar-brand" href="#">
      <img src={brand} alt="" className="brand" />
      </a>
      <button className='nav-toggle' onClick={toggleLinks}>
          <FaBars />
        </button>
      </div>
     

      <div
        className="mylinks justify-content-center collapse navbar-collapse "
        id="navbarSupportedContent"
      >
         <ul className="header-list">
        <Link to="/Home" className="btn btn-outline-warning rounded-pill active"  style={{fontSize: "13px", marginRight: "10px"}} onClick={songs}>Home</Link>
        <button className="btn btn-outline-warning rounded-pill"  style={{fontSize: "13px", marginRight: "10px"}} onClick={() => filterCategory('Gospel')}>Gospel</button>
        <button className="btn btn-outline-warning rounded-pill"  style={{fontSize: "13px", marginRight: "10px"}} onClick={() => filterCategory('Afrosounds')}>Afrosounds</button>
        <button className="btn btn-outline-warning rounded-pill"  style={{fontSize: "13px", marginRight: "10px"}} onClick={() => filterCategory('Hip-hop')}>Hip-Hop</button>
        </ul>
       
      </div>
    
      <form className="search">
    <input 
    className="form-control" 
    type="text" 
    placeholder="Search Album title or Artiste" 
    aria-label="Search"
    style={{borderRadius: "20px", backgroundColor: "rgb(33, 37, 41)", color: "gold", fontSize: "13px"}}
   onChange={(e) => setQuery(e.target.value)}
    />
  </form>
  <div className='log'>
        <Link to="/" className="btn btn-warning rounded-pill" style={{fontSize: "13px"}}>LOG OUT</Link>
      </div>
    </div>
  </nav>
       </div></>*/
       <>
       <Navbar filterCategory={filterCategory} songs={songs} onChange={handleChange}/>
    <hr/>
         <Trending music={search(trending)}/>
    <hr/>
    <Artist/>
    <hr/>
  <Classics newData={search(songs)} onScroll={handleScroll} id="section"/>
  
<Footer/>

  

        </>
    );
  }
}
export default Home;