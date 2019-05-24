import knex from '../index';

const getAll = () => knex('questions').select();
const getOne = id => knex('questions').select().where('id', id);
const addNew = question => knex('questions').insert(question);
const editOne = (id, editContent) => knex('questions').update('text', editContent).where('id', id);
const deleteOne = id => knex('questions').del().where('id', id);

export default {
    getAll,
    getOne,
    addNew,
    editOne,
    deleteOne
}