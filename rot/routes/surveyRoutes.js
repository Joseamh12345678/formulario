import express from 'express';
import { createSurvey, getSurveys } from '../controllers/surveyController.js';

const router = express.Router();

router.post('/create', createSurvey);

router.get('/', getSurveys);

export default router;