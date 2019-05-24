import { Router } from 'express';

const router = Router();

router.post('/', async (req, res) => {
    try {
        res.json('Testing Login Path')
    } catch (error) {
        console.log(error)
    }
});

export default router;