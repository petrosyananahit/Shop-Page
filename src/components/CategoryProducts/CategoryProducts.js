import React, { useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import SingleProductCard from "../SingleProductCard/SingleProductCard"
import styles from "./CategoryProducts.module.css"


function CategoryProducts({ category }) {
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async () => {
    try {
      const data = await fetch(`https://fakestoreapi.com/products`);
      if (!data.ok) {
        throw new Error("Failed to fetch data");
      }
      setProducts(await data.json());

      if (category) {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        setFilteredProducts(await response.json());
      } else {
        setFilteredProducts(null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  return (
    <div style={{ textAlign: "center"}}>
      {category && <h1>{category.toUpperCase()}</h1>}
      <div className={styles.product__container}>
        {(!category && products)&&
          products.map((product) => (
            <NavLink to={`/products/${product.id}`} key={product.id}>
              <SingleProductCard
                image={product.image}
                name={product.title}
                rating={product.rating.rate}
                price={product.price}/>
            </NavLink>
          ))}
        {filteredProducts && filteredProducts.map((product) => (
          <NavLink to={`/products/${product.id}`} key={product.id}>
            <SingleProductCard
              image={product.image}
              name={product.title}
              rating={product.rating.rate}
              price={product.price}/>
          </NavLink>
        ))}
        {!products && <p style={{ fontWeight: "700" }}>Loading...</p>}
      </div>
    </div>
  );
}

export default CategoryProducts;

