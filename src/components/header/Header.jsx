 import "./header.css";
 import {Link } from "react-router-dom"; 
 
const Header = ({ type }) => {
  return (
    <div className="header">
      
      
        <div className="headerList">
          <div className="headerListItem">
           
          <Link to="/" style={{color:"inherit", textDecoration:"none"}}> <span><b>Home</b></span></Link>
          </div>
          <div className="headerListItem">
            
          <Link to="/Gallary" style={{color:"inherit", textDecoration:"none"}}> <span><b>Gallery</b></span></Link>
          </div>
          <div className="headerListItem">
            
          <Link to="/Contactus" style={{color:"inherit", textDecoration:"none"}}> <span><b>Contact US</b></span></Link>
          </div>
          <div className="headerListItem">
            
          
          </div>
          
        
        
      </div>
    </div>
  );
};

export default Header;
