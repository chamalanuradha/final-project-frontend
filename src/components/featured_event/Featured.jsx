import "./featured.css";
import beach from "./beach.png";
import jungle from "./jungle.jpg";
import adventure from "./adventure.jpg";
import birdwatching from "./bird-watching.jpg";
import luxury from "./luxury.jpg";
import river from "./river.jpg";
import useFetch from "../../hooks/useFetch";
import {Link } from "react-router-dom";

import React from 'react';


const Featured = () => {
    

  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/v1/events/countByCategory?category=Adventure,Beach,Jungle,Luxury,River,Birdwatching",
   { method:"GET"
});
     console.log(data);
  return (
    <div>
      {loading ?(
        "Loading please wait"
      ):( 
        
      
    <><div className="feature">
            <div className="featureItem">
              <Link to="/event_upcoming">  <img
                src={adventure} alt="" className="featureImg" /></Link>
              <div className="featureTitles">
                <h1>Adventure Camping</h1>
                <h2>{data[0]}</h2>
              </div>
            </div><div className="featureItem">
              <Link to="/event_upcoming"><img
                src={beach}
                alt=""
                className="featureImg" /></Link>
              <div className="featureTitles">
                <h1>Beach Camping</h1>
                <h2>{data[1]}</h2>
              </div>
            </div><div className="featureItem">
              <Link to="/event_upcoming"> <img
                src={jungle}
                alt=""
                className="featureImg" /></Link>
              <div className="featureTitles">
                <h1>Jungle Camping</h1>
                <h2>{data[2]}</h2>
              </div>
            </div>

          </div><div className="feature1">
              <div className="featureItem1">
                <Link to="/event_upcoming"> <img
                  src={luxury}
                  alt=""
                  className="featureImg1" /></Link>
                <div className="featureTitles1">
                  <h1>Luxury Camping</h1>
                  <h2>{data[3]}</h2>
                </div>
              </div>

              <div className="featureItem">
                <Link to="/event_upcoming"> <img
                  src={river}
                  alt=""
                  className="featureImg" /></Link>
                <div className="featureTitles">
                  <h1>River Camping</h1>
                  <h2>{data[4]}</h2>
                </div>
              </div>

              <div className="featureItem1">
                <Link to="/event_upcoming"> <img
                  src={birdwatching}
                  alt=""
                  className="featureImg1" /></Link>
                <div className="featureTitles1">
                  <h1>BirdWatching Camping</h1>
                  <h2>{data[5]}</h2>
                </div>
              </div>

            </div></> 

      )}
</div>
  );
};

export default Featured;
