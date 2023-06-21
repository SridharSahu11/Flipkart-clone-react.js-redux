import React from 'react'
import { Link } from 'react-router-dom';
import "./MoreHover.css"
import { MdNotifications } from 'react-icons/md';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2';
import { MdDownload } from 'react-icons/md';

const MoreHover = () => {
  return (
    <div id='more-hover'>
        <div className='more-item'>
            <Link><MdNotifications className='more-icons'/>Notification Preformance</Link>
        </div>
        <div className='more-item'>
            <Link><RiCustomerService2Fill className='more-icons'/>24x7 Customer Care</Link>
        </div>
        <div className='more-item'>
            <Link><HiOutlineArrowTrendingUp className='more-icons'/>Advertise</Link>
        </div>
        <div className='more-item1'>
            <Link><MdDownload className='more-icons'/>Download App</Link>
        </div>
    </div>
  )
}

export default MoreHover