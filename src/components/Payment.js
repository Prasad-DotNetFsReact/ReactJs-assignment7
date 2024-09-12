import React from 'react';
import { useSelector } from 'react-redux';

const Payment = () => {
  const cart = useSelector(state => state.cart);
  const totalAmount = cart.reduce((sum, product) => sum + product.price, 0);
  const GST = totalAmount * 0.15;  // Assume GST is 18%
  const finalAmount = totalAmount + GST;
  
  const orderId = Math.floor(Math.random() * 90000) + 10000;  // Random 5-digit order ID
  const orderDate = new Date().toLocaleDateString();
  const address = "123, solapur, India";

  return (
    <div className="payment">
      <h2>Order Summary</h2>
      <p>Order ID: {orderId}</p>
      <p>Order Date: {orderDate}</p>
      <p>Shipping Address: {address}</p>
      <h3>Products:</h3>
      <ul className="list-group">
        {cart.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
      <h3>Total Amount: ₹{totalAmount}</h3>
      <h3>GST (15%): ₹{GST.toFixed(2)}</h3>
      <h3>Final Amount: ₹{finalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default Payment;
