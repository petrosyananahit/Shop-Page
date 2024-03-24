import React from 'react'
import styles from "./SingleProductCard.module.css"
import star from "../../images/Star.png";

function SingleProductCard({ image, name, rating, price }) {
  const ratingColorClass = rating > 4 ? styles.highRating : styles.lowRating;
  return (
    <div className={styles.product_Card}>
      <div className={styles.product_image_container}>
      <img src={image} alt="asfafa" className={styles.product_Image} />
      </div>
            <div className={styles.product_Details}>
                <h2 className={styles.product_Name}>{name}</h2>
                <div className={`${styles.product_Rating} ${ratingColorClass}`}>
                <div className={styles.imageContainer}>
                  <img src={star} alt="star" />
                     <img src={star} alt="star" />
                     <img src={star} alt="star" />
                     <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                 <div>{rating}/5</div>
                  </div>
                <div className={styles.product_Price}> ${price}</div>
            </div>
        </div>
  )
}

export default SingleProductCard