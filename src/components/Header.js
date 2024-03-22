import React from 'react'
import styles from "../styles/Header.module.css"
import vector from "../images/Vector.png"
import vector1 from "../images/Vector1.png"
import search from "../images/Search.png"
import downArrow from "../images/downArrow.png"

function Header() {
  return <>
    <div className={styles.header__container}>
    <div className={styles.before__header__container}>
    <p>Sign up and get 20% off to your first order. <a style={{textDecoration:"underline"}}>Sign Up Now</a></p>    
    </div>
    <div className={styles.header}>
        <a href="" ><h3 className={styles.header__logo}>SHOP.COM</h3></a>
    <nav>
            <ul className={styles.menu__list}>
                <li className={styles.shopAndArrow}>Shop<a href="/" className={styles.menu__link}><img src={downArrow} alt="Down Arrow" className={styles.down__arrow} /> </a></li>
                <li><a href="" className={styles.menu__link}>On Sale</a> </li>
                <li><a href="/newArrivals" className={styles.menu__link}>New Arrivals</a> </li>
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
}

export default Header