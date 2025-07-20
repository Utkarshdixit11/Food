import React, { useContext } from 'react'
import "./FoodItem.css"
import { assests } from '../../assets/assests'
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {

  const {cardItems,addToCart,removeFromCart,url}=useContext(StoreContext);
  
  return (
    <div className='food-item'>
        <div className="food-item-container">
          <img className='food-item-image' src={url+"/images/"+image} alt="" style={{height:"250px",width:"300px"}}></img>
          {!cardItems[id]
              ?<img className="add" onClick={()=>addToCart(id)} src={assests.add_icon_white}></img>
              :<div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assests.remove_icon_red}></img>
                <p>{cardItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assests.add_icon_green}></img> 
                </div>

          }
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assests.rating_starts} alt=""></img>
          </div>
          <p className="food-item-desc">{description}</p>
          <p className="food-item-price">&#x20B9;{price}</p>
        </div>
    </div>
  )
}

export default FoodItem
