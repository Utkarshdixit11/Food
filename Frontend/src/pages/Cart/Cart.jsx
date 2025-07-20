import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from 'react-router-dom';


const Cart = () => {

  const { cardItems, food_list, removeFromCart,getTotalCartAmount,url } = useContext(StoreContext);
  const navigate=useNavigate()

  return (
    <div className='cart'>
      <div className="card-items">
        <div className="card-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br></br>
        <hr></hr>
        <hr></hr>
        {food_list.map((item, index) => {
          if (cardItems[item._id] > 0) {
            return (
              <div>
                <div className='card-items-title card-items-item'>
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>&#x20B9;{item.price}</p>
                  <p>{cardItems[item._id]}</p>
                  <p>&#x20B9;{item.price * cardItems[item._id]}</p>
                  <p className='cross' onClick={()=>removeFromCart(item._id)}>X</p>

                </div>
                <hr></hr>
              </div>
            )
          }
        })}
      </div>
      <div className="card-bottom">
        <div className="card-total">
          <h2>Card Totals</h2>
          <div>
            <div className="card-total-details">
              <p>Subtotal</p>
              <p>&#x20B9;{getTotalCartAmount()}</p>
            </div>
            <hr></hr>
            <div className="card-total-details">
              <p>Delivery Fee</p>
              <p>&#x20B9;{getTotalCartAmount()===0? 0:90}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <b>Total</b>
              <b>&#x20B9;{getTotalCartAmount()===0? 0:getTotalCartAmount()+90}</b>
            </div>
           
          </div>
           <button onClick={()=>navigate("/order")} >PROCEED TO CHECKOUT</button>
        </div>
        <div className="card-promocode">
          <div>
            <p>If you have a promo code,Enters it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Enter promo code'></input>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
