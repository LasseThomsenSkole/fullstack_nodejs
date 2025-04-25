import db from "./connection.js";

// db.all for SELECT statements, we want to get something back
// db.run for INSERT, UPDATE, DELETE, nothing gets return
// db.exec for schematics without parameters, can contain multiple commands

const deleteMode = process.argv.includes("--delete");

if (deleteMode) {
    await db.run("DROP TABLE IF EXISTS games");
    await db.run("DROP TABLE IF EXISTS runtime_environments");
}

await db.exec(`
CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    genre TEXT CHECK(genre in ("MMO", "RPG", "FPS")),
    runtime_environment_id INTEGER NOT NULL,
    FOREIGN KEY (runtime_environment_id) REFERENCES runtime_environments(id)
);
`)

await db.exec(`
CREATE TABLE IF NOT EXISTS runtime_environments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    platform TEXT NOT NULL,
    version TEXT NOT NULL
);
`)
if (deleteMode){
    await db.run(`
        INSERT INTO runtime_environments (platform, version) VALUES ("epicgames", "1.0");
    `)
    await db.run(`
        INSERT INTO runtime_environments (platform, version) VALUES ("steam", "1.0");
    `)
    await db.run(`
        INSERT INTO games (title, genre, runtime_environment_id) values ("Fallout 4", "RPG", 2);
    `)
    await db.run(`
        INSERT INTO games (title, genre, runtime_environment_id)
        values ("Skyrim", "MMO", 1);
    `)
}
