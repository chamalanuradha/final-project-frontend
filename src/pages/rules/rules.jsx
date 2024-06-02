import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import {Link } from "react-router-dom";
import "./rules.css";


const Rule = () => {
    return (
      <div>
        <div></div>
        
        <Navbar/>
        <Header/>
        <Banner/>
        <div className="ruleContainer">
          <h1 className="ruleTitle">Rules Given By the Government</h1>
          <div className="content">
          <h3>REGULATIONS</h3>
          <ol>
            <li><br/>These regulations may be cited as the Tourism (Registration of Tourist Camping 
                and/or Caravanning Sites as Tourist Enterprises) Regulations No. ………..of 
                2012 and shall come into operation from …………………..</li>
            <li><br/>Every registered proprietor shall ensure at all times the registered Tourism 
                Camping and/or Caravanning Site conforms to the general guidelines indicated in 
                section 3 and complies with the minimum requirements as stipulated in section 4
                below.
            </li>
            
          </ol>

          <h3><br/>GENERAL GUIDLINES</h3>
          <ol><li><br/>Location
            <ol>
                <li><br/> Location of sites in a restricted area should be done either at the request of the 
                        relevant government Authority or by obtaining prior approval of the Authority. 
                        In such cases, the proprietor, in addition to complying with the rules and 
                        regulations of the Authority, should also comply with the minimum 
                        requirements stipulated in these regulations</li>
                <li><br/>Sites can also be located in non-restricted areas such as in government land 
                    obtained on lease or in private lands, with the necessary natural and/or cultural 
                    attractions.
                </li>
                <li><br/>The extent of land necessary to set up a viable site with the minimum necessary 
                    facilities should preferably be around three acres, depending on whether the 
                    land is flat or hilly or terraced.</li>
            </ol>
        </li>
         <li><br/> Sites Located in Restricted Areas
         <ol><li><br/>Limited/restricted camp fires are permitted at the discretion of the relevant 
                Authority, depending on the location of the site.</li>
         <li><br/>Any noise levels which can disturb the environment are not permitted in these 
                Sites.</li>
         <li><br/>Cutting of trees or their branches within the Site or environs are strictly 
                prohibited.</li>
                <li><br/>The Operators of these sites should strictly abide by the rules prescribed by the 
                relevant government authority.</li>
            </ol></li>

            <li> <br/>Sites Located in Non-Restricted Areas. 
                <ol><li>The sites in non-restricted areas should be developed in a manner which will not 
                cause any adverse impacts on the physical and socio-cultural environment.</li>
                <li><br/>The extent of development should be in proportion to the carrying capacity of 
                    the land area available for development in order to avoid any adverse effects of 
                    over development.
                </li></ol>
            </li>
            <li><br/>The Essential Facilities and Services to be provided at Sites
                <ol>
                <li><br/>The sites can be developed to provide facilities and services both for camping 
            and for caravanning.
                </li>
                <li><br/>Separate camping pads should be constructed for camping purposes and 
                    separate parking slots should be constructed for caravanning purposes. In 
                    addition, there should be a general parking area for the use of the campers.</li>
                <li><br/>Running water should be made available to the site for washing, cleaning, 
                    bathing and cooking purposes and potable water for drinking purposes.
                    </li>
                <li><br/>Electric lighting or solar lighting or any other form of lighting should be made 
                    available to the site.</li>
                <li><br/>Common toilet facilities should made available at the site, separately for the 
                        males and females, for the use of the campers and the other inmates of the site.</li>
                <li><br/> There should be common sitting and resting places in the form of summer 
                    houses to be used freely by the campers</li>
                <li><br/>There should be separate structures built for dining purposes with adequate 
                    number of tables and chairs.</li>
                <li><br/>There should be common hearths with facilities for cooking, if the site operator 
                    has no other means of providing food and beverage services to the campers.
                </li>
                <li><br/>There should be a sales outlet within the site stocked with bare necessities and 
                    also sufficient number of tents to be rented, if the campers do not bring their 
                    own tents and other materials.</li>

                </ol> </li> </ol>

                <h3><br/>MINIMUM REQUIRMENTS</h3>
                <ol>
                    <li><br/>
                    Access 
                    <ol>
                        <li><br/>There should be unobstructed motorable access to the site from a main trunk 
                            road with distinguishable signage leading to the Site.
                            </li>
                        </ol> 
                    </li>
                    <li><br/>The Site
                      <ol>
                        <li><br/>The site should be landscaped and well maintained at all times
                        </li>
                        <li><br/>The borders of the site should be sprayed regularly with any form of repellant 
                            material or adopt suitable best practices to keep the serpents or any other 
                            harmful insects and creatures from entering the site.</li>
                                                    <li><br/>The site should have pathways leading to common areas and to the individual 
                            tents and caravan parking lots.
                        </li>
                        <li><br/>All common areas and the pathways should be adequately lit in the night </li>
                        </ol>  
                    </li>
                    <li><br/>Visitor Reception Area
                        <ol>
                            <li><br/>There should be a separate reception area to receive the guests on arrival, 
                                attend to registration matters and other requirements.</li>
                            <li><br/>Guests should be fully briefed about the rules and regulations regarding the 
                                use of facilities provided and also the services available to them.</li>
                           <li><br/>  Information regarding the attractions in the area and the activities that can be 
                                engaged in should be made available to the guests on arrival.</li>
                        </ol>
                    </li>
                    <li><br/> Camping Pads and Tents 
                        <ol>
                            <li><br/>A minimum of ten camping pads (platforms) should be constructed within the 
                                site either by hardening the top-soil or by stone paving or by fixing timber 
                                decks. The minimum size of a camping pad to erect a tent for two sleepers 
                                should be 9.3 m2
                                . This should leave a small area in front to serve as a 
                                verandah.</li>
                            <li><br/>Each camping pad should be supplied with a minimum of two small 
                                wooden/plastic chairs with a small wooden/plastic table and sleeping pads or 
                                mattresses. </li>
                            <li><br/>The tents should have a front entry which becomes sealed once closed and at 
                                least two windows with protective nets which could be kept open for 
                                ventilation purposes.</li>
                            <li><br/>The tents should become sealed once fixed to prevent entry of harmful insects,
                                rodents, reptiles, serpents etc.</li>
                            <li><br/>Some system of lighting, either electricity, solar or lanterns, to be used in the 
                                night should be available. </li>
                            <li><br/>There should be a canopy over each tent, if considered necessary, to prevent 
                                any inconveniences causing from adverse weather conditions</li>
                            <li><br/>The distance between any two camping pads should be around 20 meters.
                                </li>
                            <li><br/>The camp operator should have adequate number of tents of different 
                                dimensions to be hired to the campers.</li>

                        </ol>
                    </li>
                    <li><br/>Common Toilet Units
                        <ol>
                            <li><br/>The floors and walls up to 1.5 m of common toilet units should be paved with 
                                impervious materials.
                                </li>
                            <li><br/>They should be fitted at least with commodes with cisterns, bidet showers, 
                                wash basins, bath showers, soap dispensers and towel holders.</li>
                            <li><br/>There should be adequate lighting in the common toilet units, particularly in 
                                the night. </li>
                            <li><br/>They should be clean and well maintained at all times</li>
                        </ol>
                    </li>
                    <li><br/>Common Hearth for Cooking Area 
                        <ol>
                            <li><br/>There should be a common hearth for cooking, appropriately arranged with at 
                                least four outlets for cooking. This facility, however, will not be required if 
                                5
                                the camping rules do not permit the campers to have their own food and 
                                beverage services.</li>
                        <li><br/>The hearth should have a separate sink for washing and cleaning purposes 
                            with the required number of items of cooking utensils</li>
                        <li><br/>There should be adequate lighting in and around the hearth/kitchen,
                                particularly in the night</li>
                        <li><br/> The place should be kept clean, hygienic and well maintained at all times</li>
                        </ol>
                    </li>
                    <li><br/>Dining area
                        <ol>
                            <li><br/>There should be a separate building or a separate area in the Site preferably 
                                with half walls and thatched roofs, for dining, with adequate number of dining 
                                tables and chairs.
                                </li>                       
                            <li><br/>The dining area should be kept clean and free of insects and rodents at all 
                                    times and should be well maintained</li>
                            <li><br/>There should be adequate lighting in the dining area, particularly in the night.</li>       
                        </ol>
                    </li>
                    <li><br/>Health and Fire Fighting Measures
                        <ol>
                            <li><br/> A doctor on call should be available at all times to deal with any emergency 
                                situation.
                                </li>
                            <li><br/>Adequate fire precautions should be available on the site with the installation 
                                of basic fire fighting equipment</li>
                        </ol></li>
                </ol></div>



            

         
          
         
          <Footer/>
        </div> 
        
      </div>
    );
  };
  
  export default Rule;