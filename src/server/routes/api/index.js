import { Router } from 'express';
import questionsRouter from './questions';
import helloRouter from './hello';

const router = Router();

router.use('/hello', helloRouter);
router.use('/questions', questionsRouter);

export default router;