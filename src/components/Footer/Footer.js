import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Footer.module.css"
import twitter from "../../images/twitter.png"
import facebook from "../../images/facebook.png"
import instagram from "../../images/instagram.png"
import github from "../../images/github.png"
import visa from "../../images/Visa.png"
import master from "../../images/Master.png"
import paypal from "../../images/PayPal.png"
import gpay from "../../images/GPay.png"
import applepay from "../../images/ApplePay.png"
import email from "../../images/Email.png"

function Footer() {
  return (
    <div className={styles.footer_container}>
    <div className={styles.footer__container}>
    <div className={styles.containerForSubscribe}>
        <div className={styles.textContainer}>
            <p>STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
        </div>
        <div className={styles.inputsContainer}>
            <div className={styles.inputContainer}>
            <input type='email' className={styles.email__input} placeholder='Enter your email address'/>
            <img src={email} className={styles.email__icon}/>
            </div>
           <div>
           <input type='text' className={styles.text__input} placeholder='Subscribe to Newsletter'/>
           </div>
         
        </div>
    </div>
    <div className={styles.footer__second_container}>
    <div className={styles.footer__item}>
        <p style={{fontWeight:"800", fontSize:"36px", fontFamily:"Integral CF"}} className={styles.footer__headings}>SHOP.COM</p>
        <p style={{fontSize:"12px"}}>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
        <div className={styles.iconsForSites_container}>
            <Link to='https://twitter.com/%22%22'><img src={twitter} className={styles.iconsForSites}/></Link>
            <Link to='https://www.facebook.com/'><img src={facebook} className={styles.iconsForSites}/></Link>
            <Link to='https://www.instagram.com/'><img src={instagram} className={styles.iconsForSites}/></Link>
            <Link to='https://github.com/'><img src={github} className={styles.iconsForSites}/></Link>
        </div>
    </div>
    <div className={styles.footerItems_container}>
    <div className={styles.footer__item}>
        <p className={styles.footer__headings}>COMPANY</p>
        <p>About</p>
        <p>Feauters</p>
        <p>Works</p>
        <p>Career</p>
    </div>
    <div className={styles.footer__item}>
        <p className={styles.footer__headings}>HELP</p>
        <p>Customer Support</p>
        <p>Delivery Details</p>
        <p>Terms conditions</p>
        <p>Privacy Policy</p>
    </div>
    <div className={styles.footer__item}>
        <p className={styles.footer__headings}>FAQ</p>
        <p>Account</p>
        <p>Manage Deliveries</p>
        <p>Orders</p>
        <p>Payments</p>
    </div>
    <div className={styles.footer__item}>
        <p className={styles.footer__headings}>RESOURCES</p>
        <p>Free eBooks</p>
        <p>Development Tutorial</p>
        <p>How to-Blog</p>
        <p>Youtube Playlist</p>
    </div>
    </div>
     </div>
    <div className={styles.footer__rigths}>
    <p>Shop.co © 2000-2023, All Rights Reserved</p>
    <div>
     <img src={visa} className={styles.iconsForCards}/>
    <img src={master} className={styles.iconsForCards}/>
    <img src={paypal} className={styles.iconsForCards}/>
    <img src={gpay} className={styles.iconsForCards}/>
    <img src={applepay} className={styles.iconsForCards}/>
    </div>
    </div>
    </div>
</div>
  )
}

export default Footer