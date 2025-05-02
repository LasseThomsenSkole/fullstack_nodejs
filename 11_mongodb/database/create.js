import db from './connection.js';

const data = await db.disciplines.insertOne({name: 'Boxing', price: 399.95})
console.log(data)
