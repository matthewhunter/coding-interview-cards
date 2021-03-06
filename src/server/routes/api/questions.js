import { Router } from 'express';
import { isAdmin } from '../../utils/security/isAdmin';
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

router.post('/', isAdmin, async (req, res) => {
    try {
        // Assumes req.body has the correct properties
        // Can adjust for sanitization later
        let [resultId] = await Questions.addNew(req.body);
        res.json(resultId);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.put('/:id', isAdmin, async (req, res) => {
    let id = req.params.id;
    try {
        // Assumes req.body has the correct properties
        // Can adjust for sanitization later
        let result = await Questions.editOne(id, req.body);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.delete('/:id', isAdmin, async (req, res) => {
    let id = req.params.id;
    try {
        let result = await Questions.deleteOne(id);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

export default router;