import React, { useContext } from 'react'
import "./LoginPopup.css"
import { useState } from 'react'
import { StoreContext } from '../../Context/StoreContext';
import axios from "axios";

const LoginPopup = ({setShowLogin}) => {

  const {url,setToken}=useContext(StoreContext)

    const [currState,setCurrState]=useState("Login");
    const [data,setData]=useState({
      name:"",
      email:"",
      password:"",
    })

    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))
      }

      const onLogin =async(event)=>{
          event.preventDefault();
          let newUrl=url;
          if(currState==="Login"){
            newUrl+="/api/user/login"
          }
          else{
            newUrl+="/api/user/register"
          }
          const response =await axios.post(newUrl,data);
          if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token)
            setShowLogin(false)
          }
          else{
            alert(response.data.message)
          }
      }


  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-pop-container'>
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <i className="fa-solid fa-xmark"  onClick={()=>setShowLogin(false)} ></i>
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input name="name"  onChange={onChangeHandler}  value={data.name} type="text" placeholder="Your name" required></input>}
            <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required></input>
            <input  name="password" onChange={onChangeHandler}  value={data.password} type="password" placeholder="Password" required></input>
        </div>
        <button type="submit">{currState ==="SignUp"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required></input>
            <p>By continuing ,i agree to the terms of use and privacy policy</p>
        </div>
        {currState==="Login"
        ?<p>Create a new Account? <span onClick={()=>setCurrState("Sign Up")}>Click Here!</span></p>:<p>Already have an account ? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
        
        
      </form>
    </div>
  )
}

export default LoginPopup
