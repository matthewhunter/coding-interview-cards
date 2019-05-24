import { Router } from 'express';
import knex from '../../db';

const router = Router();

router.get('/:id?', async (req, res) => {
    let id = req.params.id;
    if (id) {
        try {
            let question = await knex('questions').select().where('id', id);
            res.json(question);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    } else {
        try {
            let questions = await knex('questions').select();
            res.json(questions);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
});

export default router;