import React from 'react';
import Melody from './Images/Melody10.jpg'
import Melody1 from './Images/Melody11.jpg'
import Navbar from './Navbar';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <>
 

    <div className="About">

<br/>
<div className="About1">
<img src={Melody1} className="AboutImage" alt="image1" style={{width: "800px", height: "400px"}}/>
<div>
<h1 className='mission' style={{color: "gold"}}>Our Mission</h1>
<h2 className="mission" style={{height: "300px", fontSize: "25px"}}>Our mission is to bring the world of music to you, whether you're a seasoned fan or just getting started. We believe that music is a universal language that has the power to bring people together, inspire creativity, and change the world. We are committed to celebrating the diversity of music and showcasing the talents of artists from all backgrounds and cultures.
We have a deep understanding of the music industry and a passion for sharing our knowledge and insights with our readers.

<br></br>
</h2>
</div>
</div>
<hr/>
<div className="MainSub">
            <h1 className='Theme'>We Provide You With:</h1>
           <ul className="Sub">
           <li className="Sub1">Diversity</li>
           <li className="Sub1">Top-Notch Music</li>
           <li className="Sub1">Most Trending</li>
           </ul>
           </div>
           <hr/>
<br/>
<div className="About2">
<h3 className="Note2" style={{height: "300px", fontSize: "25px"}}>
Our website is your one-stop-shop for all things music, whether you're looking for the latest news, reviews, interviews, or just want to discover new artists and genres.Our team is made up of experienced music journalists, writers, and industry professionals who are dedicated to delivering the highest quality content. 
We are constantly striving to improve our website and provide our visitors with the best possible experience. We welcome feedback from our readers and are always looking for new ways to engage with our audience.

Thank you for visiting our website and we hope that you enjoy exploring the world of music with us.</h3>

<img src={Melody} className="AboutImage" alt="image1" style={{width: "800px", height: "400px"}} />
</div>
    </div>
    <Footer/>
    </>
  );
}

export default AboutUs;