import cart from './cart.js'

import book from '../helpers/book.js'
import util from '../helpers/util.js'

const bookInfo = book.getBook();

const addCartEvent = (event) => {
  event.preventDefault();
  cart.setCart(bookInfo);
  cart.cartToDom();
};

const makeStore = () => {
  let domString = '';
  domString += `<h3>Our Only Book:<h3>`;
  domString += `<h3>${bookInfo.price}</h3>`
  domString += `<img src=${bookInfo.image} alt=book cover>`
  domString += `<button id="cart-button" class="btn btn-danger">Add to Cart</button>`
  util.printToDom('store-container', domString);
  document.getElementById('cart-button').addEventListener('click', addCartEvent);
};

export default {makeStore};