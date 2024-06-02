import "./listAll.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header"
import SearchItem from "../../components/SearchItems/SearchItem";
import useFetch from "../../hooks/useFetch";

const ListAll = () => {



  const {data, loading } = useFetch("http://localhost:5000/api/v1/allcampsites")

  return (
    <div>
      <Navbar type='list'/>
      <Header />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listResult">
            {loading ? "Loading" : <>
            {data.map(item=>(
              <SearchItem item={item} key={item._id}/>
            ))}
            
            </>} 
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListAll