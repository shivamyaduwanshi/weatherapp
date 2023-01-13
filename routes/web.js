import express from 'express';
import HomeController from '../controllers/web/HomeController.js';

const router = express.Router();

//Web Route's
router.get('/', HomeController.home);

export default router;
