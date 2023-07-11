import React from 'react';
import Navbar from './Navbar';
import Music from "./Images/Music.png";
import welcome from "./Images/Welcome6.jpeg";
import {Link} from 'react-router-dom';

const SignUp = () => {
const [profile, setProfile] = React.useState(
  {  Name : '',
    UserName  : '',
    Email : '',
    Password: '',
    cPassword: ''
  }
)

const handleSubmit = (e) => {
    e.preventDefault();
        };

        const handleChange = (e) => {
          setProfile(e.target.value);
         
        }

  return (
    <>
<img src={welcome} alt="welcome" className="logImage" />
        <div className="logDiv">
       
    <div className="LoginPage">
        <h2>Create Your Account</h2>
        <br/>
       <form className="Content" onSubmit={handleSubmit}>
       <div className="col-8 mb-3">
    
    <input onChange={handleChange} type="Name" value={profile.Name} className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Enter Name" />
  </div>
        
        <div className="col-8 mb-3">
 
    <input onChange={handleChange} type="Email" value={profile.Email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com" />
  </div>
  <div class="col-8  mb-3">

    <input onChange={handleChange} type="Password" value={profile.Password} className="form-control" id="exampleInputPassword1" placeholder="Create password"/>
  </div>
  <div className="col-8 ">
    
    <input onChange={handleChange} type="Password" value={profile.cPassword} className="form-control" id="exampleInputPassword1" placeholder="Confirm password"/>
  </div>
  <div className="Log">
        <p>Already have an account?</p> <a href='/SignIn'>Log In</a>
        </div>
        <div className="signup">
        <Link to="/SignIn"><button type="Submit" disabled={!profile} className="col-8 btn btn-primary">Sign Up</button></Link>
        </div>
    </form>
    </div>
    </div>
    </>
  )
}

export default SignUp;