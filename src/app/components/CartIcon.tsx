import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const CartIcon: React.FC = () => {
  const context = useContext(CartContext);

  if (!context) {
    return null;
  }

  return (
    <div className="cart-icon">
      <span>{context.cartCount}</span>
    </div>
  );
};

export default CartIcon;
