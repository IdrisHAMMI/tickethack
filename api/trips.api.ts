import { Request, Response } from 'express';
import Trip from '../models/trips.model';



export const searchTrips = async (req: Request, res: Response) => {
  const { departure, arrival, date } = req.query;

  try {
    const trips = await Trip.find({
      departure: departure as string,
      arrival: arrival as string,
      date: { $gte: new Date(date as string) },
    });

    res.status(200).json(trips);
  } catch (error) {
    res.status(500).json({ message: 'Error searching trips', error });
  }
};