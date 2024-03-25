import React, { useEffect, useState } from "react";
import styles from "./AboutProduct.module.css";
import star from "../../images/Star.png";

function AboutProduct({ id }) {
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState(null);

  const fetchData = async () => {
    const product = await fetch(`https://fakestoreapi.com/products/${id}`);

    const data = await product.json();

    setProduct(data);

    const storageData = localStorage.getItem("cart");

    if (storageData) {
      const cart = JSON.parse(storageData);
      const current = cart.find((item) => item.id == id);
      if (current) {
        setCount(current.qty);
      } else {
        setCount(0);
      }
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  };

  useEffect(() => {
    if (!id) return;

    fetchData()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [id])

  useEffect(() => {
    if (!product) return;

    let storageData = localStorage.getItem("cart");

    if (storageData) {
      storageData = JSON.parse(storageData);

      let item = storageData.find((item) => item.id == id);

      if (item && count) {
        item.qty = count;
      } else if (item && !count) {
        storageData = storageData.filter((item) => item.id != id);
      } else if (count) {
        storageData.push({ ...product, qty: count });
      }

    } else {
      storageData = [];
    }

    localStorage.setItem("cart", JSON.stringify([...storageData]));
  }, [count]);

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
            <h4 className={styles.order} style={{ marginBottom: "5px" }}>Order now</h4>
            <div className={styles.buttonsContainer}>
              <div className={styles.quantityButtons}>
                <button
                  onClick={() => {
                    if (!count) return;
                    setCount(count - 1);
                  }}
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
