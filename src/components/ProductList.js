import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';
 // Import the CSS file

const ProductList = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  
  // State for the search query
  const [searchTerm, setSearchTerm] = useState('');

  // Filter the products based on the search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert("added to cart");
  };

  return (
    <div className="product-list">
      <h2>Products</h2>

      {/* Search Input */}
      <input 
        type="search" 
        className="form-control mb-4" 
        placeholder="Search for products..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="card mb-4">
                <img 
                  src={product.img} 
                  className="card-img-top" 
                  alt={product.name} 
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Price: ₹{product.price}</p>
                  <button 
                    className="btn btn-primary" 
                    onClick={() => handleAddToCart(product)} >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
