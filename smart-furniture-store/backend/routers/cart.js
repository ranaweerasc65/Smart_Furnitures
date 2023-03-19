// const Cart = require('./models/Cart.js');

import Cart from '../models/Cart.js'
import  express  from 'express';


const router=express.Router()

const app= express()


// get all carts
export const getAllCart = app.get('/carts', (req, res) => {
  Cart.find({}, (err, carts) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(carts);
    }
  });
});


// create a new cart
export const createCart = app.post('/carts', (req, res) => {
  const cart = new Cart(req.body);
  cart.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send('Cart created successfully');
    }
  });
});



// get a cart by ID
export const getCart =app.get('/carts/:id', (req, res) => {
  Cart.findById(req.params.id, (err, cart) => {
    if (err) {
      res.status(500).send(err);
    } else if (!cart) {
      res.status(404).send('Cart not found');
    } else {
      res.json(cart);
    }
  });
});



// update a cart by ID
export const updateCart =app.put('/carts/:id', (req, res) => {
  Cart.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, cart) => {
      if (err) {
        res.status(500).send(err);
      } else if (!cart) {
        res.status(404).send('Cart not found');
      } else {
        res.json(cart);
      }
    }
  );
});

// delete a cart by ID
export const deleteCart = app.delete('/carts/:id', (req, res) => {
  Cart.findByIdAndDelete(req.params.id, (err, cart) => {
    if (err) {
      res.status(500).send(err);
    } else if (!cart) {
      res.status(404).send('Cart not found');
    } else {
      res.send('Cart deleted successfully');
    }
  });
});
export default router;