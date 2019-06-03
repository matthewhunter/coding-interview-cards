import { Router } from 'express';
import { isAdmin } from '../../utils/security/isAdmin';
import Categories from '../../db/queries/categories';

const router = Router();

router.get('/:id?', async (req, res) => {
    let id = req.params.id;
    if (id) {
        try {
            let [category] = await Categories.getOne(id);
            res.json(category);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    } else {
        try {
            let categories = await Categories.getAll();
            res.json(categories);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
});

router.post('/', isAdmin, async (req, res) => {
    try {
        let [resultId] = await Categories.addNew(req.body);
        res.json(resultId);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.put('/:id', isAdmin, async (req, res) => {
    let id = req.params.id;
    try {
        let result = await Categories.editOne(id, req.body);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.delete('/:id', isAdmin, async (req, res) => {
    let id = req.params.id;
    try {
        let result = await Categories.deleteOne(id);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

export default router;