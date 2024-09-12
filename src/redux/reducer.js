import { ADD_TO_CART, DELETE_FROM_CART } from './actions';

const initialState = {
  products: [
    { id: 1, img: '/img/img1.jpeg', name: 'Iphone', price: 100000 },
    { id: 2,img: '/img/img2.jpeg',  name: 'Oppo', price: 50000 },
    { id: 3,img: '/img/img3.jpeg',  name: 'Nokia', price: 60000 },
    { id: 5,img: '/img/img5.jpeg',  name: 'Samsung', price: 80000 },
    { id: 6,img: '/img/img6.jpeg',  name: 'moto', price: 80000 },
    { id: 7,img: '/img/img7.jpeg',  name: 'vivo', price: 80000 },
  ],
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default rootReducer;
