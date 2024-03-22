import React from 'react'
import styles from "../styles/Main.module.css"
import image from "../images/generalImage.jpg"
import versache from "../images/Versace.png"
import zara from "../images/Zara.png"
import guchi from "../images/Gucci.png"
import prada from "../images/Prada.png"
import blackStar from "../images/BlackStar.png"
import calvin from "../images/CalvinKlein.png"

function Main() {
  return (
    <>
        <div className={styles.main__container}>
            <div className={styles.image_container}>
                <img src={image} alt="Your Image" className={styles.main__image} />
                    <div className={styles.text__overlay}>
                     <p className={styles.first__text__overlay}>FIND CLOTHES THAT MATCHES YOUR STYLE</p>
                     <div className={styles.textAndStar}>
                     <p className={styles.second__text__overlay}>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                     <img src={blackStar} alt="star" className={styles.blackstar}/>
                     <img src={blackStar} alt="star" className={styles.blackstarForCorner} /> 
                     </div>
                     <p className={styles.button_container}><button className={styles.button}>Shop Now</button></p>
                   <div className={styles.after__button_container}>
                   <div className={styles.statistics}>
                      <p className={styles.statistics_heading}>200+</p>
                      <p className={styles.statistics__text}>International Brands</p>
                     </div>
                     <div className={styles.statistics}>
                      <p className={styles.statistics_heading}>2,000+</p>
                      <p className={styles.statistics__text}>High-Quality Products</p>
                     </div>
                     <div className={`${styles.statistics} ${styles.lastStatistics}`}>
                      <p className={styles.statistics_heading}>30,000+</p>
                      <p className={styles.statistics__text}>Happy Customers</p>
                     </div>
                   </div>
                    </div>
            <div className={styles.brandsContainer}>
            <img src={versache} alt="Brand Image" className={styles.brands__image} />
            <img src={zara} alt="Brand Image" className={styles.brands__image} />
            <img src={guchi} alt="Brand Image" className={styles.brands__image} />
            <img src={prada} alt="Brand Image" className={styles.brands__image} />
            <img src={calvin} alt="Brand Image" className={styles.brands__image} />
            </div>
            </div>
            
        </div>
    </>
  )
}

export default Main