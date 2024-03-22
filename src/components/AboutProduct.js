import React, { useEffect, useState } from 'react';
import styles from '../styles/AboutProduct.module.css'; 

function AboutProduct({ id }) {
    const [product, setProduct] = useState(null);
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    useEffect(() => {
        fetchData();
    }, [id]);   

    useEffect(() => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        const isProductInCart = existingCart.some(item => item.id === product?.id);
        setIsAddedToCart(isProductInCart);
    }, [product]);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const addToCart = () => {
        if (product) {
            const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
            const isProductInCart = existingCart.some(item => item.id === product.id);
            if (!isProductInCart) {
                existingCart.push(product);
                localStorage.setItem('cart', JSON.stringify(existingCart));
                setIsAddedToCart(true); 
            }
        }
    };

    return (
        <div className={styles.productContainer}>
            {product && (
                <div key={product.id} id='productMain' className={styles.productMain}>
                    <div className={styles.imageContainer}>
                        <img src={product.image} alt={product.title} className={styles.productImage} />
                    </div>
                    <div className={styles.detailsContainer}>
                        <h2 className={styles.productName}>{product.title}</h2>
                        <div className={styles.productRating}>Rating: {product.rating && product.rating.rate}/5</div>
                        <div className={styles.productPrice}>Price: ${product.price}</div>
                        <div className={styles.productDescription}>{product.description}</div>
                        <p className={styles.selectColors}>Select Colors</p>
                        <div className={styles.colorsContainer}>
                            <div className={styles.color} style={{ backgroundColor: '#4f4631' }}></div>
                            <div className={styles.color} style={{ backgroundColor: '#314f4a' }}></div>
                            <div className={styles.color} style={{ backgroundColor: '#31344f' }}></div>
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
                        <div className={styles.buttonsContainer}>
                            <div className={styles.quantityButtons}>
                                <button className={styles.quantityButton}>-</button>
                                <div className={styles.quantityDisplay}>1</div>
                                <button className={styles.quantityButton}>+</button>
                            </div>
                            <button className={styles.addButton} onClick={addToCart}>
                                {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AboutProduct;
