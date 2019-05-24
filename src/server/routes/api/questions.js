import { Router } from 'express';
import Questions from '../../db/queries/questions';

const router = Router();

router.get('/:id?', async (req, res) => {
    let id = req.params.id;
    if (id) {
        try {
            let [question] = await Questions.getOne(id);
            res.json(question);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    } else {
        try {
            let questions = await Questions.getAll();
            res.json(questions);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
});

export default router;