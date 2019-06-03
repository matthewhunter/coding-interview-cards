import { Router } from 'express';
import { isAdmin } from '../../utils/security/isAdmin';
import Choices from '../../db/queries/choices';

const router = Router();

router.get('/:id?', async (req, res) => {
    let id = req.params.id;
    if (id) {
        try {
            let [choice] = await Choices.getOne(id);
            res.json(choice);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    } else {
        try {
            let choices = await Choices.getAll();
            res.json(choices);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
});

router.post('/', isAdmin, async (req, res) => {
    try {
        let [resultId] = await Choices.addNew(req.body);
        res.json(resultId);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.put('/:id', isAdmin, async (req, res) => {
    let id = req.params.id;
    try {
        let result = await Choices.editOne(id, req.body);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.delete('/:id', isAdmin, async (req, res) => {
    let id = req.params.id;
    try {
        let result = await Choices.deleteOne(id);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

export default router;