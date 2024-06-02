import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import "./event_ID.css";
import FeatureeventID from "../../components/feactureEventID/feactureEventID";



const EventID = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <Banner/>
      <div className="IDContainer">
        <FeatureeventID/>
        
           
        <Footer/>
      </div> 
    </div>
  );
};

export default EventID;