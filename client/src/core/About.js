import React from 'react';
require('typeface-oswald')


const About = () => {
    return (
        <div style={{paddingTop:140,paddingRight:50,paddingLeft:50,paddingBottom:250,textAlign:'center', backgroundColor:'white'}}>
        <h1 style={{fontSize:35,fontFamily:'oswald'}}>School of technology Essaouira</h1>
        <p>Recently created EST Essaouira joins the network of ESTs in Morocco, to give a chance to graduates of the region to access a professional training, especially with the growing need for skilled labor and managers intermediate.

        Access to EST Essaouira is open to bachelors in science, economics and technology. The duration of studies is spread over 2 years, with 2 internships (1 month in first year, and 2 months in second year). These internships are the object of reports supported before a jury of teachers.</p>
            <h2 style={{textAlign:'center',fontFamily:'Oswald',fontSize:38, paddingTop:80,paddingBottom:50}}>University Trainings</h2>
                  <div style={{display:'inline-block',marginRight:150}} id='Formation initiale'>
                <h3 style={{fontFamily:'Oswald',fontWeight:'bold',fontSize:33}}>Initial training</h3>
                <div>
        <a style={{backgroundColor:'rgb(2, 117, 216)',display:'block',padding:30,fontSize:20,borderRadius:10,fontFamily:'Oswald',color:'white',marginTop:50}} href="http://www.este.ucam.ac.ma/fi_dut.php">University Diploma of Technology</a>
        <a style={{backgroundColor:'rgb(2, 117, 216)',display:'block',padding:30,fontSize:20,borderRadius:10,fontFamily:'Oswald',color:'white',marginTop:20}}  href="http://www.este.ucam.ac.ma/fi_lp.php">Professional license</a>
        </div> 
        </div>
        
        <div style={{display:'inline-block'}} id='Formation continue'>
        <h3 style={{fontFamily:'Oswald',fontWeight:'bold',fontSize:33}}>Continuing education</h3>
        <div>
        <a style={{backgroundColor:'rgb(2, 117, 216)',display:'block',padding:30,fontSize:20,borderRadius:10,fontFamily:'Oswald',color:'white',marginTop:50}} href="http://www.este.ucam.ac.ma/fc_lu.php">Professional University degree</a>
        <a style={{backgroundColor:'rgb(2, 117, 216)',display:'block',padding:30,fontSize:20,borderRadius:10,fontFamily:'Oswald',color:'white',marginTop:20}} href="http://www.este.ucam.ac.ma/fc_mu.php"> University Master</a>
        </div> 
        </div>
        </div>
    );
};

export default About;