import knex from '../index';

const getAll = () => knex('choices').select();
const getOne = id => knex('choices').select().where('id', id);
const addNew = choice => knex('choices').insert(choice);
const editOne = (id, editContent) => knex('choices').update(editContent).where('id', id);
const deleteOne = id => knex('choices').del().where('id', id);

export default {
    getAll,
    getOne,
    addNew,
    editOne,
    deleteOne
}