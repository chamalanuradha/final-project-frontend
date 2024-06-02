import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Campsite from "./pages/campsite/Campsite";
import List from "./pages/list/List";
import CamperLogin from "./pages/login/camperLogin/CamperLogin";
import Event from "./pages/event/Event";
import RoleSelector from "./pages/roleSelector/RoleSelector";
import RoleSelectorReg from "./pages/roleSelectorReg/RoleSelectorReg";
import Eventupcoming from "./pages/eventupcoming/Eventupcoming";
import Gallary from "./pages/gallary/gallary";
import CamperRegistration from "./pages/registration/camperRegistrarion/CamperRegistration";
import EventID from "./pages/eventid/EventID";
import CreateEvent from "./pages/EventCreate/CreateEvent";
import CampsiteRegistration from "./pages/campsiteRegistration/CampsiteRegistration";
import CampsiteLogin from "./pages/login/campsiteLogin/CampsiteLogin";
import Contactus from "./pages/Contactus/Contactus";
import Rule from "./pages/rules/rules";
import ListAll from "./pages/listAll/listAll";
import SitePackage from "./components/SitePackage/SitePackage";
import Logout from "./components/Logout/Logout";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/campsites" element={<List/>}/>
        <Route path="/campsite/:id" element={<Campsite/>}/>
        <Route path="/camper_login" element={<CamperLogin/>}/>
        <Route path="/campsite_login" element={<CampsiteLogin/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/roleselector" element={<RoleSelector/>}/> 
        <Route path="/roleselectorReg" element={<RoleSelectorReg/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/list_all" element={<ListAll/>}/>
        <Route path="/event_upcoming" element={<Eventupcoming/>}/>
        <Route path="/gallary" element={<Gallary/>}/>
        <Route path="/camper_registration" element={<CamperRegistration/>}/>
        <Route path="/event/:id" element={<EventID/>}/>
        <Route path="/CreateEvent" element={<CreateEvent/>}/>
        <Route path="/campsite_registration" element={<CampsiteRegistration/>}/>
        <Route path="/Contactus" element={<Contactus/>}/>
        <Route path="/rules" element={<Rule/>}/>
        <Route path="/pkgs" element={<SitePackage/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

