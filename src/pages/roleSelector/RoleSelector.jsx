import "./roleSelector.css";
import NavLogo from '../../components/navLogo/NavLogo';
import {Link } from "react-router-dom";

const RoleSelector = () => {
  return (
    <div className="fullRoleContainer">
      <NavLogo/>
      <div className="roleContainer">
        <div className="container">
            <h1 style={{textAlign:"center"}}>Hello User</h1>
            <h1 style={{textAlign:"left"}}>Are you a,</h1>
            <div className="buttons1">
            <Link to="/camper_login"><button className="navButton1">Camper</button></Link>
            <Link to="/campsite_login"> <button className="navButton1">Campsite</button></Link>
            </div>
        </div>
    </div>

    </div>
    
    
  )
}

export default RoleSelector