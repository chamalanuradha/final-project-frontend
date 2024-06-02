import './sitePackage.css'
import {useState} from 'react'
import { Link } from "react-router-dom";

const SitePackage = () => {


const getFormattedPrice = (price) => `${price.toFixed(2)}Rs`;


const toppings = [
  {
    name: "Campsite",
    price: 1000
  },
  {
    name: "Tent",
    price: 800
  },
  {
    name: "Gril",
    price:200 
  },
  {
    name: "Light",
    price: 200
  }]

  
  const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + toppings[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };



  return (
    <div  className="App123">
      <h3>Add Package</h3>
      <div method="POST" className="list1"><ul className="toppings-list">
        {toppings.map(({ name, price }, index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)} 
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
                <div className="right-section">{getFormattedPrice(price)}</div>
              </div>
            </li>
          );
        })}
        <li>
          <div className="toppings-list-item">
            <div className="left-section">Total:</div>
            <div className="right-section">{getFormattedPrice(total)}</div>
            <Link to="/"><button className='mybutton'>Done</button></Link>
          </div>
        </li>
      </ul></div>
    </div>
  );
}
export default SitePackage