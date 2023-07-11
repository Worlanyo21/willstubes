import "./App.css";
import Home from "./Home";
import SignUp from "./SignUp";
import AboutUs from "./AboutUs";
import SignIn from "./SignIn";
import frontUs from "./FrontUs";
import Homepage from "./Homepage";
import Categories from "./Categories";
import Singles from "./Singles";
import data from "./Data";
import Music from "./Music";
import {Routes, Route} from "react-router-dom";

function App() {
  

  return (
   <>
<Routes>
<Route path="/" element={<Homepage/>} />
  <Route path="/Home" element={<Home/>} />
  <Route path="/SignUp" element={<SignUp />} />
  <Route path="/AboutUs" element={<AboutUs />} />
  <Route path="/frontUs" element={<frontUs />} />
  <Route path="/SignIn" element={<SignIn />} />
  <Route exact path="/Home/Categories" element={<Categories />} />
  <Route path="/Home/Categories/:id" element={<Categories data={data}/>} />
 <Route exact path="/Home/Singles" element={<Singles />} />
 <Route path="/Home/Singles/:songid" element={<Singles music={Music} />} />
</Routes>
  
   </>
  );
}

export default App;
