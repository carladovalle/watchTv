import express from "express";
import * as seriesControllers from '../Controllers/series.controller.js';

const router = express.Router();

router.post('/insert', seriesControllers.insertSeries);
router.get('/view', seriesControllers.viewSeries);
router.put('/update/:id', seriesControllers.updateSerie);
router.delete('/delete/:id', seriesControllers.deleteSerie);
router.get('/quantityPerPlatform', seriesControllers.quantityPerPlatform);

export default router;