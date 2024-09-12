import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart } from '../redux/actions';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(deleteFromCart(id));
    alert("Removed From cart");
  };

  const totalAmount = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item">
                {item.name} - ₹{item.price}
                <button 
                  className="btn btn-danger btn-sm float-end" 
                  onClick={() => handleRemove(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total Amount: ₹{totalAmount}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
