import "./searchItem.css";
import {Link } from "react-router-dom"; 

const SearchItem = ({item}) => {
  return (
    <div className="searchItem" key={item._id}>
      <img src={item.photos_of_location[0]} alt="" className="sItemImage" />
      <div className="sItemDiscription">
        <h3  className="sItemTitle">{item.campsite_name}</h3 >
        <span className="sItemDetails">{item.description}</span>
        <Link to={`/campsite/${item._id}`}><button className="sItemButton"><b>View</b></button></Link>
      </div>
    </div>
  )
}

export default SearchItem