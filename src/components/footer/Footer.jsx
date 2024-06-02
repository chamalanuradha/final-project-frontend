import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer"> 
      <div className="fLists">
        <div className="fList">

        <div className="ftitle"><h3 >About us</h3></div>
          
          <p>We have all information for camping such <br/> 
          camping guide, hotels, locations etc.<br/>
          to satisfy your camping experience.</p>
            
        </div>

        <div className="fList">
        
        <div className="ftitle"><h3 >Main menu</h3></div>
        
          <ul className="fList">
            <Link to="/" style={{color:"inherit", textDecoration:"none"}}><li className="fListItem">Home </li></Link>
            <Link to="/gallary" style={{color:"inherit", textDecoration:"none"}}><li className="fListItem">Galery </li></Link>
            <Link to="/Contactus" style={{color:"inherit", textDecoration:"none"}}><li className="fListItem">Contact us </li></Link>
          </ul>
        </div>  
        <div className="fList">

        <div className="ftitle"><h3 >Quick links</h3></div>  
        
          <ul className="fList">
          <Link to="/list_all" style={{color:"inherit", textDecoration:"none"}}><li className="fListItem">Camping sites</li></Link>
          <Link to="/event" style={{color:"inherit", textDecoration:"none"}}><li className="fListItem">Events</li></Link>
          <Link to="/rules" style={{color:"inherit", textDecoration:"none"}}><li className="fListItem">Camping regulations </li></Link>
          </ul>
        </div>

        <div className="fList">

        <div className="ftitle"><h3 >Contact us</h3></div>  
        
          <ul className="fList">
            <li className="fListItem">slcampingguide@gmail.com </li>
            <li className="fListItem">+94778691322</li>
            <li className="fListItem">+94771565695 </li>
          </ul>
        </div>
            
      </div>
      
      
      <div className="fText">Copyright © 2022 Sri Lankan Camping Guide.</div>
    </div>
  );
};

export default Footer;
