import React, { useEffect, useState, useContext } from 'react';
import '../../index.css';
import CartContext from '../../store/CartContext';

const Button = (props) => {
  const [isTextOnly, setIsTextOnly] = useState('');
  const [StyleClass, setStyleClass] = useState('');

  const cartCtx = useContext(CartContext);

  useEffect(() => {
    console.log("Cart context in Button:", cartCtx); 
  }, []);

  function addToCartHandler() {
    if (!props.data || !props.data.id || !props.data.name) {
      console.error('Invalid data provided to addToCartHandler');
      return;
    }

    const updatedItems = [...cartCtx.items];
    const existingItemIndex = updatedItems.findIndex(item => item.id === props.data.id);

    if (existingItemIndex >= 0) {
      updatedItems[existingItemIndex].amount += 1;
    } else {
      updatedItems.push({
        id: props.data.id,
        name: props.data.name,
        amount: 1,
        price: props.data.price || 0
      });
    }

    cartCtx.updateCart(updatedItems);  
    cartCtx.updateCartAmount(cartCtx.totalAmount + 1)
    console.log('Updated Cart:', updatedItems, 'Total Amount:', cartCtx.totalAmount);
  }
  useEffect(() => {if (props.textOnly === true){setIsTextOnly('Cart('+cartCtx.totalAmount+')');
    setStyleClass('text-button');} }, [cartCtx.totalAmount]);
  useEffect(() => {
    if (props.textOnly === false) {
      setIsTextOnly('Add to cart');
      setStyleClass('button');
    } else {
      setIsTextOnly('Cart(0)');
      setStyleClass('text-button');
    }
  }, [props.textOnly]);

  return (
    <button onClick={addToCartHandler} className={StyleClass}>
      {isTextOnly}
    </button>
  );
};

export default Button;
