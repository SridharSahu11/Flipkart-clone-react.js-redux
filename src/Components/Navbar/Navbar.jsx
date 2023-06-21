import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import Login from "../Pages/Auth/Login";
import LoginHover from "../HoverComponents/LoginHover";
import LoginHoverShap from "../HoverComponents/LoginHoverShap";
import MoreHover from "../HoverComponents/MoreHover";
import MoreHoverShap from "../HoverComponents/MoreHoverShap";
import { useSelector } from "react-redux";

const Navbar=()=>{
    let [model,setmodel]=useState(false);
    // let navigate=useNavigate();
    let displaymodel =()=>{
        if(model){
            setmodel(false)
        } else {
            setmodel(true)
        }
    }
    let CartProduct=useSelector(state=>state.AddCartReducer)
    
    return(
       <div>
         <div>
            <nav id="navbar">
                <div id="h1">
                    <span><Link to="/">Flipkart</Link></span><sub id="sub">plus</sub>
                </div>
                <div>
                    <input type="text" id="input" placeholder="Search Item"></input>
                    <span className="search"><FiSearch/></span>
                </div>
                <div id="login">
                    <div>
                        <button id="btn" onClick={displaymodel}>Login</button>

                    </div>
                    <div id="dropdown">
                        <LoginHover/>
                    </div>
                    <div id="dropdownshap">
                        <LoginHoverShap/>
                    </div>
                </div>
               <div>
                <ul id="ul">
                    {/* <li><Link to="/">Home</Link></li> */}
                    <li><Link to="/seller">Seller</Link></li>
                    {/* <li><Link to="/contact">Contact</Link></li> */}
                    <li id="more"><Link to="/more">More</Link>
                        <div id="dropdown-more">
                            <MoreHover/>
                        </div>
                        <div id="dropdown-shap">
                            <MoreHoverShap/>
                        </div>
                    </li>
                </ul>
               </div>
               <div>
                <Link to="/cart" id="cart"><AiOutlineShoppingCart className="cart-icon"/><sup>{CartProduct.length=== 0? null:CartProduct.length}</sup>Cart</Link>
               </div>
            </nav>
        </div>

        {
            model?<Login></Login> : null
        }
       </div>
    )
}

export default Navbar;