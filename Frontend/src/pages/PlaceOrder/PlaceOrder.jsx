import React,{ useContext, useEffect, useState } from 'react'
import { StoreContext } from "../../Context/StoreContext";
import "./PlaceOrder.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {

  const {getTotalCartAmount,token,food_list,cardItems,url } = useContext(StoreContext);

  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    pincode:"",
    country:"",
    phone:""

  })

  const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value

    setData(data=>({...data,[name]:value}))
}

const placeOrder=async(event)=>{
    event.preventDefault();
    let orderItems=[];
    food_list.map((item)=>{
      if(cardItems[item._id]>0){
        let itemInfo=item;
        itemInfo["quantity"]=cardItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData={
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+90,

    }
    let response =await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    console.log(response)
    if(response.data.success){
        const {session_url}=response.data;
        window.location.replace(session_url);
    }else{
      alert("ERROR");
    }
}

const navigate=useNavigate();

useEffect(()=>{
  if(!token){
      navigate("/cart")
  }
  else if(getTotalCartAmount()===0){
    navigate("/cart")
  }
},[token])
  
  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input name="firstName" onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name' required></input>
          <input name="lastName" onChange={onChangeHandler} value={data.lastName}  type="text" placeholder='Last Name'required></input>
         </div>
        <input name="email" onChange={onChangeHandler} value={data.email}  type="email" placeholder='Email address' required></input>
        <input  name="street" onChange={onChangeHandler} value={data.street}  type="text" placeholder='Street' required></input>
        <div className="multi-fields">
          <input name="city" onChange={onChangeHandler} value={data.city}  type="text" placeholder='City' required></input>
          <input name="state" onChange={onChangeHandler} value={data.state}  type="text" placeholder='State' required></input>
       </div>
       <div className="multi-fields">
          <input name="pincode" onChange={onChangeHandler} value={data.pincode}  type="text" placeholder='Pin Code' required></input>
          <input  name="country" onChange={onChangeHandler} value={data.country}  type="text" placeholder='Country' required></input>
         </div>
      <input name="phone" onChange={onChangeHandler} value={data.phone}  text="text" placeholder='Phone' required></input>

      </div>
      <div className="place-order-right">
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
           <button type="submit"  >PROCEED TO PAYMENT</button>
        </div>
      </div>

    </form>
  )
}

export default PlaceOrder
