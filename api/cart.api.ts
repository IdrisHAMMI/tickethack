import { Request, Response } from 'express';
import Cart from '../models/cart.model';

export const addToCart = async (req: Request, res: Response) => {
    const { departure, arrival, date, price } = req.body;
  try{
    const addToCart = new Cart({
        departure,
        arrival,
        date,
        price,
      });

    const savedCart = await addToCart.save();

    res.status(201).json(savedCart);
    }   catch (error) {
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