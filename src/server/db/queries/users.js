import knex from '../index';

const addNew = user => knex('users').insert(user); 
const findById = id => knex('users').select().where('id', id);
const findByEmail = email => knex('users').select().where('email', email);

export default {
    addNew,
    findById,
    findByEmail
}