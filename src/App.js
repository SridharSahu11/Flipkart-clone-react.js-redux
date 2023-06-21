import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Components/Pages/Home";
import Seller from "./Components/Pages/Seller";
import Contact from "./Components/Pages/Contact";
import More from "./Components/Pages/More";
import Cart from "./Components/Pages/Cart/Cart";
import PageNotFound from "./Components/Pages/PageNotFound";
import Login from "./Components/Pages/Auth/Login";
import ProductContext from "./Api/ProductContext";
import Products from "./Components/Products/Products";
import Store from './Redux/Store/Store';
import {Provider} from 'react-redux';
import Counter from "./Components/Counter";
import Footer from "./Components/Footer/Footer";

const App=()=>{
    return(
        <div>
         <BrowserRouter>
        <Provider store={Store}>
        <ProductContext>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='product/:name' element={<Products/>}></Route>
                <Route path='/seller' element={<Seller/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/more' element={<More/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='*' element={<PageNotFound/>}></Route>
            </Routes>
            <Footer/>
            </ProductContext>
            <Counter/>
            </Provider>
        </BrowserRouter>
        </div>
        
    )
}

export default App;