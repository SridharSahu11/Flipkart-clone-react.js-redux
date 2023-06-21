import React,{ useContext, useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {allProductContext} from '../../Api/ProductContext';
import { AddCart } from '../../Redux/Action/Action'

function Products() {
    let [data,setdata]=useState([]);
    let product = useParams();
    let Allproducts = useContext(allProductContext);
    console.log(Allproducts);
    let dispatch=useDispatch();

    useEffect(()=>{
      if(product.name === "mobiles" && Allproducts.products) {
        setdata(Allproducts.products.filter((a)=>a.category === "smartphones"))
      } else if(product.name === "beauty" && Allproducts.products) {
        setdata(Allproducts.products.filter((a)=>a.category === "fragrances"))
      } else if(product.name === "electronics" && Allproducts.products) {
        setdata(Allproducts.products.filter((a)=>a.category === "laptops"))
      }
      else if(product.name === "furnitures" && Allproducts.products) {
        setdata(Allproducts.products.filter((a)=>a.category === "home-decoration"))
      }
      else if(product.name === "Grocery" && Allproducts.products) {
        setdata(Allproducts.products.filter((a)=>a.category === "groceries"))
      }
    },[Allproducts.products])



  return (
    <div className='d-flex m-2'>
      {
        data ? data.map(a=>{
          // console.log(a)
          return(
            <div className='card m-2' style={{width:"300px"}}>
             <img className='card-img-top' src={a.thumbnail} alt="Phone" style={{height:"190px"}}/>
              <div className='card-body'>
                <h4>{a.title}</h4>
                <h5>Price:- {a.price}</h5>
              </div>
              <div className='card-footer bg-white'>
                <button className='btn btn-success' onClick={()=>dispatch(AddCart(a))}>Add To Cart</button>
              </div>
            </div>
          );
        }):null
      }
    </div>
  )
}

export default Products;