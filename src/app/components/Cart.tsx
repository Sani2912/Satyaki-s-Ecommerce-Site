import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <>
      <button 
        className="cart-button" 
        onClick={() => setIsOpen(prev => !prev)}
      >
        Cart ({cart.length})
      </button>
      {isOpen && (
        <div className="cart-sidebar">
          <button 
            className="close-button" 
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
          <h2>Shopping Cart</h2>
          <ul>
            {cart.map(product => (
              <li key={product.id}>
                <span>{product.title}</span>
                <span>${product.price.toFixed(2)}</span>
                <button onClick={() => removeFromCart(product.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="total">
            <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
