import React from 'react'
import '../styles/home.css'
import homeimage from '../images/homeimage.png'
function Home() {

   return( 
    <>
    <div className = "titlesection"> 

        <div className = "title">
        <h1> Welcome to  </h1>
       
         <h2> Medication Calendar </h2>
     
         <h3>  A website keeping track of your medications to stay healthy and fit </h3>
        </div>
    <img src={homeimage} id="homeimage"/>
    </div>
    </>
   );
}
export default Home;

