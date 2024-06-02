import Campimg from "../../components/Gallary/campimg";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Eventimg from "../../components/Gallary/eventimg";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import "./gallary.css";


const Gallary = () => {
  return (
    <div>


      <Navbar />
      <Header />
      <Banner />
      <div className="gallaryContainer">
        <h1 className="gallaryTitle">Campsites</h1>
        <Campimg/>
        <h1 className="gallaryTitle">Events</h1>
        <Eventimg/>
      



        <Footer />
      </div> 
      
    </div>
  );
};

export default Gallary;

