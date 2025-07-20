import React, { useState } from 'react'
import "./Add.css"
import { assests } from '../../assets/assests'
import axios from "axios";
import { toast } from 'react-toastify';


const Add = ({url}) => {

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  })

  const onChangeHandleder = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number(data.price))
    formData.append("category", data.category)
    formData.append("image", image)
    const response = await axios.post(`${url}/api/food/add`, formData)
    if (response.data.success) {
         setData({
            name:"",
            description:"",
            price:"",
            category:"Salad",
          })
          setImage(false)
          toast.success(response.data.message)
    } else {
          toast.error(response.data.message)
    }

  }

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor='image'>
            <img src={image ? URL.createObjectURL(image) : assests.upload_area} alt="" />

          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required></input>
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onChangeHandleder} value={data.name} type='text' name="name" placeholder='Type here'></input>

        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea onChange={onChangeHandleder} value={data.description} name="description" row="6" placeholder='Write Content here' required></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select name="category" onChange={onChangeHandleder} value={data.category}>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desserts">Desserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
              <option value="Starters">Starters</option>
              <option value="Non-Veg">Non-Veg</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input onChange={onChangeHandleder} value={data.price} type="Number" name="price" placeholder='&#x20B9;250'></input>
          </div>
        </div>
        <button type="submit" className='add-btn'>Add</button>
      </form>


    </div>
  )
}

export default Add
