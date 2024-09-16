"use client";

import React from 'react';
import { Product } from '../types/product';
import { useCart } from '../context/CartContext';
import styles from './ProductList.module.css';

interface ProductListProps {
    products: Product[];
    addToCart: (product: Product) => void;
  }

  const ProductList: React.FC<ProductListProps> = ({ products }) => {
    const { addToCart } = useCart();
    return (
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Rating: {product.rating.rate}</p>
            <button className={styles.addToCartButton} onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          </div>
        ))}
      </div>
    );
  };

  

export default ProductList;


