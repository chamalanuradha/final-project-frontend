import Features from "../../components/Features_home/Features";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import FeaturedSites from "../../components/FeaturedSites/FeaturedSites";
import "./home.css";



const Home = () => {
  return (
    <div>
      <div></div>
      
      <Navbar/>
      <Header/>
      <Banner/>
      <div className="homeContainer">
        <h1 className="homeTitle">Features</h1>
        <Features/>
        <h1 className="homeTitle">Featured Campsites</h1>
        <FeaturedSites/> 
        <Footer/>
      </div> 
      
    </div>
  );
};

export default Home;