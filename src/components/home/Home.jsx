import React from "react";
import './home.css';
import SectionThree from "./Three/SectionThree";
import SectionTwo from "./Two/SectionTwo";
import SectionOne from "./One/SectionOne";
import SectionFour from "./Four/SectionFour";
import Footer from "../footer/Footer";
import NavBar from '../navbar/NavBar';

const Home = () => {

    return ( 
        <div>
        <NavBar/>
        <SectionOne/>
        <SectionTwo/>
       <SectionThree/>
       <SectionFour/>
       <Footer/>
       
        </div>
     );
}
 
export default Home;