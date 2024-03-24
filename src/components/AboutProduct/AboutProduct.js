import React, { useEffect, useState } from "react";
import styles from "./AboutProduct.module.css";
import star from "../../images/Star.png";

function AboutProduct({ id }) {
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!product) fetchData();
    else { let existingCart = JSON.parse(localStorage.getItem("cart")) || [];
          const isProductInCart = existingCart.find((item) => item.id === id);

    if (!isProductInCart && count !== 0) {
        existingCart.push({ ...product, qty: count });
        localStorage.setItem("cart", JSON.stringify(existingCart));
        } else { if (count == 0 && isProductInCart) {
          setCount(isProductInCart.qty);}
        existingCart = existingCart.map((e) => {
          if (e.id == id) return { ...e, qty: count };
          return e;
        });
        localStorage.setItem("cart", JSON.stringify(existingCart));
      }
    }
  }, [count]);

  const fetchData = async () => {
    const product = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await product.json();
    setProduct(data);
    let existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const prod = existingCart.find((item) => item.id === id);
    if(prod)
    setCount(prod.qty)
  };

  return (
    <div className={styles.productContainer}>
      {product && (
        <div key={product.id} id="productMain" className={styles.productMain}>
          <div className={styles.imageContainer}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.productImage}
            />
          </div>
          <div className={styles.detailsContainer}>
            <h2 className={styles.productName}>{product.title}</h2>
            <div className={styles.starsAndRate}>
            <div className={styles.starsContainer}>
                  <img src={star} alt="star" />
                     <img src={star} alt="star" />
                     <img src={star} alt="star" />
                     <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                  <div className={styles.productRating}>
              {product.rating && product.rating.rate}/5
            </div>
            </div>
           
            <div className={styles.productPrice}>
                <p>${product.price}</p></div>
            <div className={styles.productDescription}>
              {product.description}
            </div>
            <p className={styles.selectColors}>Select Colors</p>
            <div className={styles.colorsContainer}>
              <div
                className={styles.color}
                style={{ backgroundColor: "#4f4631" }}
              ></div>
              <div
                className={styles.color}
                style={{ backgroundColor: "#314f4a" }}
              ></div>
              <div
                className={styles.color}
                style={{ backgroundColor: "#31344f" }}
              ></div>
            </div>
            <div className={styles.sizeContainer}>
              <p className={styles.chooseSize}>Choose Size:</p>
              <div className={styles.dimensionsContainer}>
                <div className={styles.dimension}>Small</div>
                <div className={styles.dimension}>Medium</div>
                <div className={styles.dimension}>Large</div>
                <div className={styles.dimension}>X-Large</div>
              </div>
            </div>
            <h4 className={styles.order} style={{marginBottom:"5px"}}>Order now</h4>
            <div className={styles.buttonsContainer}>
              <div className={styles.quantityButtons}>
                <button
                  onClick={() => setCount(count - 1)}
                  className={styles.quantityButton}>-</button>
                <div className={styles.quantityDisplay}>{count}</div>
                <button
                  onClick={() => setCount(count + 1)}
                  className={styles.quantityButton}>+</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutProduct;

