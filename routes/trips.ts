import express from 'express';
import { searchTrips } from '../api/trips.api';

export default (router: express.Router)=> {
    router.get('/trips', searchTrips);
    router.get('/', (req, res) => {
        res.status(200).json({ message: 'API is working!' });
      });
};