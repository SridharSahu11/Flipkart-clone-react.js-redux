import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import "./Cart.css"
import {RemoveCart} from "../../../Redux/Action/Action"

const Cart = () => {
  let dispatch=useDispatch();
  let CartProduct=useSelector(state=>state.AddCartReducer)
  console.log(CartProduct)
  return(
    <div className='card-container'>
      {CartProduct.map(a=>{
        return (
        
            <div className='container2'>
              <img src={a.thumbnail} alt="imagetext" className='image'/>
             <div>
             <h3 style={{marginTop:'25px'}}>{a.title}</h3>
              <p>{a.description}</p>
              <h4>$.{a.price}/-</h4>
              <button className='btn btn-primary'onClick={()=>dispatch(RemoveCart(a))}>Remove</button>
             </div>
            </div>
          
        )
      })}
    </div>
  )
}

export default Cart