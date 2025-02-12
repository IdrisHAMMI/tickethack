import express from 'express';
import { addToCart, getCart, deleteFromCart } from '../api/cart.api';

export default (router: express.Router)=> {

  router.post('/api/cart/post/:id', addToCart);
  router.get('/api/cart/get', getCart);
  router.delete('/cart/:id', deleteFromCart);

};