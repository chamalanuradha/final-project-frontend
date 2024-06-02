import Featured from "../../components/featured_event/Featured";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import "./event.css";
import React from "react";
import {Link } from "react-router-dom"; 

const Event = () => {
  return (  
    <div>
        
        <Navbar />
        <Header />
        <Banner />
        <div className="eventContainer">
        <div className="eventcontent">
        <div className="ETitle">  
        <h4 className="eventTitle">Event Categories</h4>
        <Link to="/CreateEvent"><button className="createBtn"><b>Create Events</b></button></Link>
        </div>
          <Featured />
          </div>
          <Footer />
        </div>
        
    </div>
  );
};

export default Event;