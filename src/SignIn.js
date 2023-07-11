import React from 'react';
import Navbar from './Navbar';
import Music from "./Images/Music.png";
import welcome from "./Images/Welcome6.jpeg";
import {Link} from 'react-router-dom';

const SignIn = () => {
const [profile, setProfile] = React.useState([
  {  Name : '',
    UserName  : '',
    Email : '',
    Password: ''}
])

const handleSubmit = (e) => {
    e.preventDefault();
        };

  return (
    <>
<img src={welcome} alt="welcome" className="logImage" />
        <div className="logDiv">
       
        
    <div className="LoginPage">
    
        <h2>Sign into Your Account</h2>
        <br/>
       <form className="Content" onSubmit={handleSubmit}>
       <div className="col-8 mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" />
  </div>
  <div className="col-8  mb-3">

<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
</div>
        <div className="Log">
        <p>Don't have an account?</p> <a href='/SignUp'>SignUp here</a>
        </div>
        <div className="signup">
        <Link to="/Home"><button type="Submit" className="col-8 btn btn-primary">SignIn</button></Link>
        </div>
    </form>
    </div>
    </div>
    </>
  )
}

export default SignIn;