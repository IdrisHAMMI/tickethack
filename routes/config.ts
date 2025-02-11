import express from 'express';
import trips from './trips';

import { searchTrips } from '../api/trips.api';

const router = express.Router();

export default(): express.Router => {

    trips(router);

    return router;
}

