import { Request, Response } from 'express';
import Cart from '../models/cart.model';
import Trips from '../models/trips.model';

export const addToCart = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    // FETCH THE TRIP DETAILS FROM THE TRIPS COLLECTION
    const trip = await Trips.findById(id);

    if (!trip) {
      res.status(404).json({ message: 'Trip not found' });
      return;
    }

    // CREATE A NEW CART ITEM FROM BODY PARAMS
    const addToCart = new Cart({
      departure: trip.departure,
      arrival: trip.arrival,
      date: trip.date,
      price: trip.price,
    });

    // SAVE THE CART ITEM TO THE CART COLLECTION
    const savedCart = await addToCart.save();

    res.status(201).json(savedCart);
  } catch (error) {
    console.error('Error adding to cart', error);
    res.status(500).json({ message: 'Error adding to cart', error });
  }
};

export const getCart = async (req: Request, res: Response) => {
    try {
        const cart = await Cart.find();
        res.status(200).json(cart);
    } catch (error) {
        console.error('Error getting cart', error);
        res.status(500).json({ message: 'Error getting cart', error });
    }
};

export const deleteFromCart = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deleted = await Cart.findByIdAndDelete(id);
        res.status(200).json(deleted);
    } catch (error) {
        console.error('Error deleting from cart', error);
        res.status(500).json({ message: 'Error deleting from cart', error });
    }
};