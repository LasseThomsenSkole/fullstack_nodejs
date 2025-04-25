import db from "./connection.js";

const deleteMode = process.argv.includes("--delete");

if (deleteMode) {
    db.run("DROP TABLE IF EXISTS games");
    db.run("DROP TABLE IF EXISTS runtime_environments");
}

db.exec(`
CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    genre TEXT CHECK(genre in ("MMO", "RPG", "FPS")),
    runtime_environment_id INTEGER NOT NULL,
    FOREIGN KEY (runtime_environment_id) REFERENCES runtime_environments(id)
);
`)

db.exec(`
CREATE TABLE IF NOT EXISTS runtime_environments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    platform TEXT NOT NULL,
    version TEXT NOT NULL
);
`)