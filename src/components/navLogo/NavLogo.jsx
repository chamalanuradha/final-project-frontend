import "./navLogo.css"
import logo from "../navbar/logo.png"


const NavLogo = () => {
  return (
    <div className="navLogoContainer">
        <div className="logoContainer">
          <img src={logo} className="applogo" alt="applogo" />
          <b>Sri Lankan<br/>Camping Guide</b>
        </div>
    </div>
  )
}

export default NavLogo