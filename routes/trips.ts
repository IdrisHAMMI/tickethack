import express from 'express';
import { searchTrips } from '../api/trips.api';

export default (router: express.Router)=> {

  router.get('/api/trips/search', searchTrips);

};