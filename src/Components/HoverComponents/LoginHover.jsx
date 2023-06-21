import React from 'react'
import { Link } from 'react-router-dom'
import "./LoginHover.css"
import { CgProfile } from 'react-icons/cg';
import { TiPlusOutline } from 'react-icons/ti';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsSuitHeartFill } from 'react-icons/bs';
import { GiWantedReward } from 'react-icons/gi';
import { TbGiftCard } from 'react-icons/tb';

const LoginHover = () => {
  return (
    <div id="btn-hover">
        <div className='btn-span'>
            <span style={{marginLeft:'10px'}}>New Customer?</span>
            <span style={{marginRight:'10px'}}><Link to="/signup">SignUp</Link></span>
        </div>
        <div className='btn-item'>
            <Link><CgProfile className='profil-icon'/>My Profile</Link>
        </div>
        <div className='btn-item'>
            <Link><TiPlusOutline className='profil-icon'/>Flipkart Plus Zone</Link>
        </div>
        <div className='btn-item'>
            <Link><AiOutlineUnorderedList className='profil-icon'/>Orders</Link>
        </div>
        <div className='btn-item'>
            <Link><BsSuitHeartFill className='profil-icon'/>Wishlist</Link>
        </div>
        <div className='btn-item'>
            <Link><GiWantedReward className='profil-icon'/>Rewards</Link>
        </div>
        <div className='btn-item1'>
            <Link><TbGiftCard className='profil-icon'/>Gift Cards</Link>
        </div>
    </div>
  )
}

export default LoginHover