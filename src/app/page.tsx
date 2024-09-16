"use client"; 

import { useState, useEffect } from 'react';
import { fetchProducts } from './services/productService';
import { CartProvider, useCart } from './context/CartContext';
import { Product } from './types/product';
import ProductList from './components/ProductList';
import Sort from './components/Sort';
import Filter from './components/Filter';
import Header from './components/Header';
import Cart from './components/Cart';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState<string>('asc');
  const [category, setCategory] = useState<string>('all');
  const { addToCart } = useCart(); 

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      setProducts(data);
    }
    loadProducts();
  }, []);

  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <CartProvider>
      <Header />
      <div style={{ display: 'flex' }}>
        <aside style={{ width: '250px' }}>
          <Filter category={category} setCategory={setCategory} />
          <Sort sortOption={sortOption} setSortOption={setSortOption} />
        </aside>
        <main style={{ flex: 1 }}>
          <ProductList products={sortedProducts} addToCart={addToCart} />
        </main>
        <Cart />
      </div>
      
    </CartProvider>
  );
};

export default Home;
