import React, { useState } from 'react';
import styles from "./Header.module.css";
import vector from "../../images/Vector.png";
import vector1 from "../../images/Vector1.png";
import search from "../../images/Search.png";
import downArrow from "../../images/downArrow.png";

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
            <p>Sign up and get 20% off to your first order. <a style={{textDecoration:"underline"}}>Sign Up Now</a></p>
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
                <li><a href="/" className={styles.menu__link}>Shop</a></li>
                <li><a href="/" className={styles.menu__link}>On Sale</a></li>
                <li><a href="/" className={styles.menu__link}>New Arrivals</a></li>
                <li><a href="/" className={styles.menu__link}>Brands</a></li>
              </ul>
            )}
          </div>
          <a href="/" ><h3 className={styles.header__logo}>SHOP.COM</h3></a>
          <nav>
            <ul className={styles.menu__list}>
              <li className={styles.shopAndArrow}><a href="/" className={styles.menu__link}> Shop<img src={downArrow} alt="Down Arrow" className={styles.down__arrow} /> </a></li>
              <li><a href="/" className={styles.menu__link}>On Sale</a> </li>
              <li><a href="/" className={styles.menu__link}>New Arrivals</a> </li>
              <li><a href="/categories" className={styles.menu__link}>Brands</a> </li>
            </ul>
          </nav>
          <div className={styles.search_container}>   
            <input type='text' className={styles.search__input} placeholder='Search for products...'/>
            <img src={search} className={styles.search__icon}/>
          </div>
          <div className={styles.header__icons}>
            <a href='/products/card'><img src={vector}/></a>
            <a href=''><img src={vector1}/></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
