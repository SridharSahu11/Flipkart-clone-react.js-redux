import React, { useEffect, useState } from "react";
import './Slideshow.css';


const Slideshow = () => {
 const images=[
    'https://i.gadgets360cdn.com/large/big_diwali_sale_flipkart_1665408801338.jpg',
    'https://c8.alamy.com/comp/2BGTR7X/a-smartphone-showing-the-flipkart-logo-rests-on-a-yellow-background-along-with-a-keyboard-glasses-pen-and-book-editorial-use-only-2BGTR7X.jpg',
    'https://www.businessinsider.in/photo/92062540/after-amazon-flipkart-reliance-and-tata-neu-indias-133-billion-ecommerce-market-may-be-too-little-for-a-fifth-player.jpg?imgsize=358311',
 ]
const interval=3000;
const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Function to increment the image index
    const incrementImageIndex = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const intervalId = setInterval(incrementImageIndex, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  return (
    <div className="slideshow">
     <img src={images[currentImageIndex]} alt="Slider" />
    </div>
  );
 
}

export default Slideshow;
