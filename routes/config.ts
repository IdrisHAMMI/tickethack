import express from 'express';
import trips from './trips';
import cart from './cart';

const router = express.Router();

export default(): express.Router => {

    trips(router);
    cart(router);

    return router;
}

