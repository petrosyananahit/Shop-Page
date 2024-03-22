import React, { useEffect, useState } from 'react';
import styles from "../styles/Carts.module.css";
import deleteButton from "../images/Delete.png";

function Cart() {
  const [cart, setCart] = useState([]);
  const [calculateTotal, setCalculateTotal] = useState(false);
  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      const updatedCart = savedCart.map(product => ({ ...product, quantity: 1 }));
      setCart(updatedCart);
    }
  }, []);

  useEffect(() => {
    handleCalculateTotal();
  }, [cart]);

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleCalculateTotal = () => {
    const subtotalValue = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    const discountValue = subtotalValue * 0.2; 
    const deliveryFee = 15; 
    const totalPrice = subtotalValue - discountValue + deliveryFee;
    setSubtotal(subtotalValue.toFixed(2));
    setDiscount(discountValue.toFixed(2));
    setTotal(totalPrice.toFixed(2));
    setCalculateTotal(true);
  };
  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity < 0) {
      newQuantity = 0; 
    }
    const updatedCart = cart.map((item, i) => {
      if (i === index) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  

  return (
    <div style={{textAlign:"center"}}>
      <h4 style={{fontSize:"34px", fontWeight:"700"}}>Carts</h4>
      <div className={styles.carts__container}>
        {cart.length > 0 ? (
          <div className={styles.productsContainer}>
            {cart.map((product, index) => (
              <div key={index} className={styles.product_Card}>
                <img src={product.image} alt={product.title} className={styles.product_Image} />
                <div className={styles.product_Details}>
                  <div className={styles.titleAndDeleteContainer}>
                    <h2 className={styles.product_Name}>{product.title}</h2>
                    <a href='' onClick={() => removeFromCart(index)}><img src={deleteButton}/></a>
                  </div>
                  <div className={styles.productSizeAndColor}>
                    <p>Size: <span>Large</span></p>
                    <p>Color: <span>White</span></p>
                  </div>
                  <div className={styles.priceAndQuantityButtons}>
                    <div className={styles.product_Price}><h4>${product.price}</h4></div>
                    <div className={styles.quantityButtons}>
                      <button className={styles.quantityButton} onClick={() => handleQuantityChange(index, product.quantity - 1)}>-</button>
                      <div className={styles.quantityDisplay}>{product.quantity}</div>
                      <button className={styles.quantityButton} onClick={() => handleQuantityChange(index, product.quantity + 1)}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.productsContainer}>Your cart is empty</p>
        )}
        <div className={styles.totalContainer}>
          <div className={styles.orderSummary}>
            <div className={styles.summary_container}>
              <div >
                <p style={{textAlign:"left", fontSize:"18px", fontWeight:"700"}}>Order Summary</p>
              </div>
              <div>
                <div><p>Subtotal</p></div>
                <div><p style={{textAlign: 'right'}}>${calculateTotal ? subtotal : ''}</p></div>
              </div>
              <div>
                <div><p>Discount (-20%)</p></div>
                <div><p style={{textAlign: 'right'}}>${calculateTotal ? discount : ''}</p></div>
              </div>
              <div>
                <div><p>Delivery Fee</p></div>
                <div><p style={{textAlign: 'right'}}>$15.00</p></div>
              </div>
              <div>
                <div><p>Total</p></div>
                <div><p style={{textAlign: 'right'}}>${calculateTotal ? total : ''}</p></div>
              </div>
            </div>
            <div>
            <button className={styles.applyButton}>Apply</button>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
