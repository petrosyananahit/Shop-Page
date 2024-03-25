import React, { useState } from 'react';
import styles from "./Header.module.css";
import vector from "../../images/Vector.png";
import vector1 from "../../images/Vector1.png";
import search from "../../images/Search.png";
import downArrow from "../../images/downArrow.png";
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={styles.header__container}>
        <div className={styles.containerBeforeHeader}>
          <div className={styles.before__header__container}>
            <p>Sign up and get 20% off to your first order. <Link to="" style={{textDecoration:"underline", color:"white"}}>Sign Up Now</Link></p>
          </div>
        </div>
        <div className={styles.header}>
          <div className={styles.mobileContent} onClick={toggleMenu}>
            <div className={styles.mobileLines}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
            {isMenuOpen && (
              <ul className={styles.dropdown__menu}>
                <li><Link to="/" className={styles.menu__link}>Shop</Link></li>
                <li><Link to="/" className={styles.menu__link}>On Sale</Link></li>
                <li><Link to="/" className={styles.menu__link}>New Arrivals</Link></li>
                <li><Link to="/categories" className={styles.menu__link}>Brands</Link></li>
              </ul>
            )}
          </div>
          <Link to="/" ><h3 className={styles.header__logo}>SHOP.COM</h3></Link>
          <nav>
            <ul className={styles.menu__list}>
              <li className={styles.shopAndArrow}><Link to="/" className={styles.menu__link}> Shop<img src={downArrow} alt="Down Arrow" className={styles.down__arrow} /> </Link></li>
              <li><Link to="/" className={styles.menu__link}>On Sale</Link> </li>
              <li><Link to="/" className={styles.menu__link}>New Arrivals</Link> </li>
              <li><Link to="/categories" className={styles.menu__link}>Brands</Link> </li>
            </ul>
          </nav>
          <div className={styles.search_container}>   
            <input type='text' className={styles.search__input} placeholder='Search for products...'/>
            <img src={search} className={styles.search__icon}/>
          </div>
          <div className={styles.header__icons}>
            <Link to='products/card'><img src={vector}/></Link>
            <Link to=''><img src={vector1}/></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
