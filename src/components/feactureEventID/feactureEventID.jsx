import "./feacture_EventID.css";
import beach from "./beach.png";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const FeatureeventID = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`http://localhost:5000/api/v1/event/find/${id}`);

  return (
    
    <div className="Feacture_ID">
      {loading?(
      "loading"
      ):(
      <><div className="ID">
            <div className="IDtext">
              <h1 className="IDTopic">{data.event_name}</h1>

              <p className="IDTopic">{data.description}</p></div>

            <div className="IDvenue">
              <span>Starting Date : {data.starting_date}</span>
              <span>Starting Time : {data.starting_time}</span>
              <span>Ending Date : {data.ending_date}</span>
              <span>Ending Time : {data.ending_time}</span>
              <button>Join</button>
            </div>
          </div><div className="Pics">
          {data.addphoto?.map((photo1) =>(
              <div className="IDfeaturedItem">
               
                <img src={photo1} alt="" className="IDfeaturedImg" />
              </div>))}

             


            </div></>)}
      </div>
    
  );
};

export default FeatureeventID;