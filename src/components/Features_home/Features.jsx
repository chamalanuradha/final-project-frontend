import "./features.css";
import x from "./x.jpg";
import y from "./y.jpg";
import z from "./z.jpg";
import {Link } from "react-router-dom";


const Features = () => {


  return (
    <div className="features">
      
        <>
          <div className="featuredItem">
          <Link to="/event"> <img
              src={z}
              alt=""
              className="featuredImg"
            /></Link>
            <div className="featuredTitles">
              <h1>Events</h1>
            </div>
          </div>

          <div className="featuredItem">
          <Link to="/list_all"><img
              src={y}
              alt=""
              className="featuredImg"
            /></Link>
            <div className="featuredTitles">
              <h1>Campsites</h1>
            </div>
          </div>
          <div className="featuredItem">
          <Link to="/rules"> <img
              src={x}
              alt=""
              className="featuredImg"
            /></Link>
            <div className="featuredTitles">
              <h1>Guidelines</h1>
            </div>
          </div>
        </>
      
    </div>
  )
}

export default Features