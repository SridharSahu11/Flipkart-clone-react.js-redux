import React,{createContext,useEffect, useState} from 'react';
import Axios from 'axios';

export const allProductContext=createContext();

let ProductContext=({children})=>{
    let [products,setproducts]=useState([]);
    let [fetchrerros,setfetchrerros]=useState();
    
    useEffect(()=>{
       Axios.get('https://dummyjson.com/products').then(a=>setproducts(a.data.products)).catch(err=>setfetchrerros({err}))
    
    },[]);

    return(
        <allProductContext.Provider value={{products,fetchrerros}}>
            {children}
        </allProductContext.Provider>
    )
}


export default ProductContext