import React from "react";
import { Link } from "react-router-dom";
import offers from "../../Images/offers.png";
import mobils from "../../Images/mobils.png";
import Tv from "../../Images/Tv.png";
import Flight from "../../Images/Flight.png";
import Beauty from "../../Images/Beauty.png";
import Furniture from "../../Images/Furniture.png";
import Fashion from "../../Images/Fashion.png";
import Electronics from "../../Images/Electronics.png";
import Grocery from "../../Images/Grocery.png";
import "../Pages/Pages.css";
import Slideshow from "../ImageSlider/Slideshow";
import HomeProduct from "../HomeProduct/HomeProduct";

const Home = () => {
  // Array for Homeproduct;
  const arr = [
    {
      img: "https://www.wallpaperflare.com/static/800/486/460/headphones-yellow-background-music-black-wallpaper.jpg ",
      d1: "Best Of HeadPhones",
      d2: "From 999",
      d3: "JBL, MI, STUDIO & More",
    },
    {
      img: "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      d1: "Top Mirrorless Cameras",
      d2: "Shop Now!",
      d3: "CANON, SONY, FUJIFILM...",
    },
    {
      img: " https://images.unsplash.com/photo-1623216216626-f8bfd191552d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnljbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      d1: "Electric Cycles",
      d2: "From 4999",
      d3: "LEADER, CARADIC and More",
    },
    {
      img: "https://img.freepik.com/premium-psd/black-t-shirt-model-front-view-mockup_125540-1059.jpg?size=626&ext=jpg&ga=GA1.2.674841064.1680008824&semt=ais",
      d1: "Mens T-Shirts",
      d2: "From 299",
      d3: "Min. 50% Off",
    },
  ];
  return (
    <div>
      <div id="product-item">
        <div>
          <Link to="product\offer">
            <img src={offers} alt="offer img" />
            Top Offers
          </Link>
        </div>
        <div>
          <Link to="product\mobiles">
            <img src={mobils} alt="offer img" />
            Mobiles & Tablets
          </Link>
        </div>
        <div>
          <Link to="product\electronics">
            <img src={Electronics} alt="offer img" />
            Electronics
          </Link>
        </div>
        <div>
          <Link to="product\tv">
            <img src={Tv} alt="offer img" />
            TVs & Appliances
          </Link>
        </div>
        <div>
          <Link to="product\fashion">
            <img src={Fashion} alt="offer img" />
            Fashion
          </Link>
        </div>
        <div>
          <Link to="product\beauty">
            <img src={Beauty} alt="offer img" />
            Beauty
          </Link>
        </div>
        <div>
          <Link to="product\furnitures">
            <img src={Furniture} alt="offer img" />
            Home & Furniture
          </Link>
        </div>
        <div>
          <Link to="product\flights">
            <img src={Flight} alt="offer img" />
            Flights
          </Link>
        </div>
        <div>
          <Link to="product\Grocery">
            <img src={Grocery} alt="offer img" />
            Grocery
          </Link>
        </div>
      </div>
      <Slideshow />
      <div className="Homeproduct">
        {arr.map((ele) => {
          return <HomeProduct element={ele} />;
        })}
      </div>
    </div>
  );
};

export default Home;
