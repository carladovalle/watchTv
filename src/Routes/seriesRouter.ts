import express from "express";
import * as seriesControllers from '../Controllers/series.controller.js';

const router = express.Router();

router.post('/insert', seriesControllers.insertSeries);
router.get('/view', seriesControllers.viewSeries);

export default router;