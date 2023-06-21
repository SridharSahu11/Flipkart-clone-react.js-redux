import React from 'react';
import './HomeProduct.css';

const HomeProduct = ({element}) => {
  return (
    
	<div className="outer" style={{height:"400px",width:"308px"}}>
		<div className="content" style={{height:"200px",width:"200px"}}>
		 <img src={element.img} width="300px" class="animated fadeInRight"/>
         </div>	
         <div className='Description'>
		    <div>{element.d1}</div>
            <div>{element.d2}</div>
            <div>{element.d3}</div>
			<div className="button">
				<a href="#">$115</a><a class="cart-btn" href="#"><i class="cart-icon ion-bag"></i>ADD TO CART</a>
			</div>
         </div>
	</div>
  )
}

export default HomeProduct;

