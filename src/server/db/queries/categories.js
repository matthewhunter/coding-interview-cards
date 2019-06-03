import knex from '../index';

const getAll = () => knex('categories').select();
const getOne = id => knex('categories').select().where('id', id);
const addNew = category => knex('categories').insert(category);
const editOne = (id, editContent) => knex('categories').update('title', editContent).where('id', id);
const deleteOne = id => knex('categories').delete().where('id', id);

export default {
    getAll,
    getOne,
    addNew,
    editOne,
    deleteOne
}