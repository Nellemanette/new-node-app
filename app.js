const express = require('express');
const app = express();
var mysql = require('mysql');

const database = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


app.get('/etudiant', (req, res) => {
    const sqlQuery =  'SELECT * FROM Etudiant';

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.json({ 'etudiants': result });
    });
});

app.get('/', function (req, res) {
  res.send('Hello World! NodeJs app');
});

const port = process.env.PORT || 3500;
app.listen(port, function () {
  console.log('myapp listening on port ' + port);
});

