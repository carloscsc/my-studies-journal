const mysql = require('mysql2/promise');
const express = require('express');
const app = express();
const port = 3000;

let db;

// connect to mysql
async function dbConnect() {
  try {
    db = await mysql.createConnection({
      host: 'mysql',
      user: 'root',
      password: 'nodedb',
      database: 'nodedb',
    });

    // if People not exists, create it
    await db.execute(`
      CREATE TABLE IF NOT EXISTS people (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
      )
    `);

    // Insert name into DB
    await insertName('Carlos');
  } catch (error) {
    console.log(`MySql Connect was failed: ${error}`);
  }
}

// Ensure that database as connected
async function ensureDB(req, res, next) {
  if (!db) {
    await dbConnect();
  }
  next();
}

app.use(ensureDB);

/**
 * Insert new name into DB
 * @param {string} name
 */
async function insertName(name) {
  try {
    const sql = 'INSERT INTO people (name) VALUES (?)';
    await db.execute(sql, [name]);
    console.log(`Name: ${name} successful inserted into database`);
  } catch (error) {
    console.log(`Error when insert name: ${name} into Database: ${error}`);
  }
}

app.get('/', async (req, res) => {
  // Get All names from DB
  const [rows] = await db.execute('SELECT * FROM people');

  // Build a name list
  const nameList = rows.map((row) => `<li>${row.name}</li>`).join('');

  res.send(`
    <h1>Full Cycle Rocks!</h1>
    <ul>
      <p>Names:</p> 
      ${nameList}
    </ul>
  `);
});

app.listen(port, () => {
  console.log('Running at port: ' + port);
});

dbConnect();
