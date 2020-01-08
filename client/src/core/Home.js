import React from "react";
import Featured from './featured';
import Footer from './Footer';
import About from './About';
const Home = () => (
  <div className="bck_blue" style={{backgroundColor:' #813E1D'}}>
   <Featured/>
   <About/>
   <Footer/>
  </div>
);

export default Home;
