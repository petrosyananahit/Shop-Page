import React from 'react'
import styles from "../styles/ProductsCards.module.css"


function ProductsCards({ image, name, rating, price }) {
  const ratingColorClass = rating > 4 ? styles.highRating : styles.lowRating;
  return (
    <div className={styles.product_Card}>
      <div className={styles.product_image_container}>
      <img src={image} alt="asfafa" className={styles.product_Image} />
      </div>
            <div className={styles.product_Details}>
                <h2 className={styles.product_Name}>{name}</h2>
                <div className={`${styles.product_Rating} ${ratingColorClass}`}>{rating}/5</div>
                <div className={styles.product_Price}> ${price}</div>
            </div>
        </div>
  )
}

export default ProductsCards