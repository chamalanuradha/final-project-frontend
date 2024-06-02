import EUfeacture from "../../components/feacture_EU/feactures_EU_1/EUfeacture";
import EUfeacture2 from "../../components/feacture_EU/feactures_EU_2/EUfeacture_2";
import EUfeacture3 from "../../components/feacture_EU/feactures_EU_3/EUfeacture_3";
import EUfeacture4 from "../../components/feacture_EU/feactures_EU_4/EUfeacture_4";
import EUfeacture5 from "../../components/feacture_EU/feactures_EU_5/EUfeacture_5";
import EUfeacture6 from "../../components/feacture_EU/feactures_EU_6/EUfeacture_6";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import "./event_upcoming.css";
import React from "react";
import {Link } from "react-router-dom";


const Eventupcoming = () => {
  return (  
    <div>
        
        <Navbar />
        <Header />
        <Banner />
        <div className="coming_Container">
          <div className="coming_content">
          <div className="coming_Title">
          <Link to="/event_upcoming"> <button className="eventButton1"><b>Upcoming Events</b></button></Link>
         
        </div>
            <div className="coming_topic">
                <h1>Adventure Camping</h1>
            </div>
        <EUfeacture/>
            <div className="coming_topic">
                <h1>Beach Camping</h1>
            </div>
        <EUfeacture2/>
            
            <div className="coming_topic">
                <h1>Jungle Camping</h1>
            </div>
        <EUfeacture3/>
        <div className="coming_topic">
                <h1>Luxury Camping</h1>
            </div>
        <EUfeacture4/>

        <div className="coming_topic">
                <h1>River Camping</h1>
            </div>
        <EUfeacture5/>

        <div className="coming_topic">
                <h1>Birdwatching Camping</h1>
            </div>
        <EUfeacture6/>

        
        
          </div>
          <Footer />
        </div>
        
    </div>
  );
};

export default Eventupcoming;