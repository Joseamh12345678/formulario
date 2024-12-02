import express from 'express';
import { createFormResponse, getFormResponses } from '../controllers/formController.js';

const router = express.Router();

router.post('/create', createFormResponse);

router.get('/', getFormResponses);

export default router;