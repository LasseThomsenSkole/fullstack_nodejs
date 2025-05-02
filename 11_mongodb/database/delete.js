import db from './connection.js'

const result = db.disciplines.deleteOne({name: 'Boxing'})
console.log(result)