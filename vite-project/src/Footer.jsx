import React from "react";
import "../src/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="main_conatiner">
        <div className="container">
          <div className="f1">
            <div className="logo">
              <img src="../src/assets/Logo.jpg" alt="" />
            </div>

            <div className="content">
              <p style={{color:'#fff'}}>
                Lorem Ipsum is simply dummy of the printing and type setting.
              </p>
            </div>

            <div className="btns">
              <button>
                <img src="../src/assets/image 65.jpg" alt="" />

                <div className="t">
                  <p style={{fontSize:'8px',fontWeight:'600',color:'#747577'}}>Download From</p>
                  <p style={{fontSize:'12px',fontWeight:'600'}}>App Store</p>
                </div>
              </button>
              <button>
                <img src="../src/assets/image 64.jpg" alt="" />

                <div className="t">
                  <p style={{fontSize:'8px',fontWeight:'600',color:'#747577'}}>Download From</p>
                  <p style={{fontSize:'12px',fontWeight:'600'}}>Play Store</p>
                </div>
              </button>
            </div>
          </div>

          <div className="f2">
            <div className="company">
                <p>COMPANY</p>
            </div>
            <ul>
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li> Terms</li>
                <li>Blogs</li>
                <li>Branding</li>
                <li>Career</li>
            </ul>
            


          </div>

          <div className="f2">

          <div className="company">
                <p>GENERAL</p>
            </div>
            <ul>
                <li>Partner With us</li>
                <li>Write to us</li>
                <li> Mobile App</li>
                <li>Site map</li>
                
            </ul>
            



          </div>
          <div className="f2">

          <div className="company">
                <p>PAGES</p>
            </div>
            <ul>
                <li>Amazon Offer</li>
                <li>Google Pay Offers</li>
                <li> PayPal Offers</li>
                <li>PhonePe Offers</li>
                <li>Festival Offers</li>
                <li>Bank Offers</li>
            </ul>
            



          </div>
          <div className="f2">

          <div className="company">
                <p>MORE</p>
            </div>
            <ul>
                <li>City Offers</li>
                <li>Brand Offers</li>
                <li> Product Deals</li>
                <li>Gift Cards</li>
              
            </ul>
            



          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
