import "./Packages.css"
import campsite from "./campsite.jpg"
import tent from "./tent.jpg"
import gril from "./gril.jpg"
import light from "./light.jpg"

import {Link } from "react-router-dom"; 

const Packages = () => {
  return (
    <div className="cList">
      <div className="cListItem">
      <Link to="/campsites/:id"><img src={campsite} alt="" className="cListImg"/></Link>
        <div className="cListTitles">
        <h1>Campsite</h1>
      </div>
      </div>
      
      <div className="cListItem">
        <img src={tent} alt="" className="cListImg"/>
        <div className="cListTitles">
        <h1>Tent</h1>
      </div>
      </div>
      
      <div className="cListItem">
        <img src={gril} alt="" className="cListImg"/>
        <div className="cListTitles">
        <h1>Gril</h1>
      </div>
      </div>
      
      <div className="cListItem">
        <img src={light} alt="" className="cListImg"/>
        <div className="cListTitles">
        <h1>Light</h1>
      </div>
      </div>
      
    </div>
  )
}

export default Packages