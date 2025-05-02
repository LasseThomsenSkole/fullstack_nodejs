import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'martial_arts';
await client.connect();

const db = client.db(dbName);

export default {
    disciplines: db.collection('disciplines'),
    locations: db.collection('locations')
}