import knex from '../index';

const addNew = userid => knex('tokens').insert('userid', userid);
const updateToken = (id, token) => knex('tokens').update('token', token).where('id', id);
const findOne = (id, token) => knex('tokens').select().where({ id, token })

export default {
    addNew,
    updateToken,
    findOne
}