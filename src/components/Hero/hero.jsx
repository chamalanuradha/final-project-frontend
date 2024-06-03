import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import hero2 from "./hero2.jpg";
import hero1 from "./hero1.jpg";
import hero3 from "./hero3.jpg";
import hero4 from "./hero4.jpg";
import "./hero.css";




function Hero(){
  
  const images = [
   
    { url: hero4 },
    { url: hero2 },
    { url: hero3 },
    { url: hero1 },
  ];
  

   return(
    <div className="banner">
      <div className="slider">
      <SimpleImageSlider
        width={"100%"}
        height={"80vh"}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      </div>
        
        </div>
   ); 
}

export default Hero;


