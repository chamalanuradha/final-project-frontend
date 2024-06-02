import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import banner2 from "./banner2.jpg";
import banner1 from "./banner1.jpg";
import banner3 from "./banner3.jpg";
import banner4 from "./banner4.jpg";
import "./banner.css";




function Banner(){
  
  const images = [
   
    { url: banner4 },
    { url: banner2 },
    { url: banner3 },
    { url: banner1 },
  ];
  

   return(
    <div className="banner">
      <div className="slider">
      <SimpleImageSlider
        width={"100%"}
        height={"70vh"}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      </div>
        
        </div>
   ); 
}

export default Banner;


