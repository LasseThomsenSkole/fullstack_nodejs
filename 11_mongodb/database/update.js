import db from './connection.js'

const updatedDiscipline = db.disciplines.updateOne({name: 'Boxing'},{ $set: {price: 200}})
console.log(updatedDiscipline)