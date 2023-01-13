import express from 'express';
import weatherController from '../controllers/api/weatherController.js';
import weatherRequest from '../request/weatherRequest.js'; // Validate Inputs comming form the client side

const router = express.Router();

//Weather Route's
router.get('/weather/current', weatherRequest, weatherController.current);
router.get('/weather/forecast', weatherRequest, weatherController.forecast);

export default router;
