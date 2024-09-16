import React from 'react';
import { useCart } from '../context/CartContext';
import logo from './logo.png';

const Header: React.FC = () => {
  const { cart } = useCart();

  return (
    <header>
      <h1 className="site-heading">
      Satyaki's E-commerce Site</h1>
      <div className="cart-icon">
        <span>Cart ({cart.length})</span>
      </div>
    </header>
  );
};

export default Header;
