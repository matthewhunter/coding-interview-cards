import knex from '../index';

const getAll = () => knex('questions').select();
const getOne = (id) => knex('questions').select().where('id', id);

export default {
    getAll,
    getOne
}