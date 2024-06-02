import "./campimg.css"
import {useState} from 'react';

import useFetch from "../../hooks/useFetch";


const Campimg = () => {

  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/v1/allcampsites",
   { method:"GET"
});
     console.log(data);
  

  
    return (
      <div>
      {loading ? (
        "loading"
      ) : (
      <>
       {data.map((item)=>(

        <div className="gaItem" key={item._id}>
  

  {item.photos_of_location?.map((photo) => (
           <div>
          <img src={photo} alt="" className="gaImg" /></div>))}

          

          



        </div> 
         ))}
         </>
      
      )}</div>)}

export default Campimg;