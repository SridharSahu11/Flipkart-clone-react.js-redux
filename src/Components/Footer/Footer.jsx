import React from 'react';
import './Footer.css';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h6>About</h6>
          <p className="text-justify">Filpcart.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. focuses on providing the most efficient code or snippets as the code wants to be simple.</p>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6 style={{color:"#bbb"}}>Categories</h6>
          <ul className="footer-links">
            <li><a href="">Contact Us</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Filpkart Stories</a></li>
            <li><a href="">Corporate</a></li>
            <li><a href="">Information</a></li>
          </ul>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>CONSUMER POLICY</h6>
          <ul className="footer-links">
            <li><a href=" ">Return Policy </a></li>
            <li><a href=" ">Terms Of Use </a></li>
            <li><a href=" ">Security</a></li>
            <li><a href="">Privacy</a></li>
            <li><a href="">EPR Compliance</a></li>
          </ul>
        </div>
      </div>
      <hr/>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className="copyright-text"> Copyright &copy; 2023 All Rights Reserved by 
       <a href="#"> Flipcart.com</a>.
          </p>
        </div>

        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className="social-icons">
            <li><a className="facebook" href="#"><i className="fa fa-facebook"><BsFacebook/></i></a></li>
            <li><a className="twitter" href="#"><i className="fa fa-twitter"><BsInstagram/></i></a></li>
            <li><a className="dribbble" href="#"><i className="fa fa-dribbble"><BsLinkedin/></i></a></li>
            <li><a className="linkedin" href="#"><i className="fa fa-linkedin"><BsTwitter/></i></a></li>   
          </ul>
        </div>
      </div>
    </div>
</footer>
  )
}

export default Footer