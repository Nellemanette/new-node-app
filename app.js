const express = require('express');
var mysql = require('mysql');

const app = express();

const database = mysql.createConnection({
    user: 'root',//process.env.DB_USER,
    password: 'brunelle', //process.env.DB_PASSWORD,
    database: 'node_db',//process.env.DB_NAME,
    host: 'mysql',//process.env.DB_HOST
});

const createQuery = 'CREATE TABLE Etudiant (Nom CHAR(20), Prenom CHAR(20))';

app.get('/etudiant', (req, res) => {
    const sqlQuery =  'SELECT * FROM Etudiant';

    database.query(createQuery, (err, result) => {
        if (err) {
            console.log(err);
        }
        else
            res.send('Table créée');

    });


    //res.json({ 'etudiants': result });

});

app.get('/', function (req, res) {
  res.send('Hello World! NodeJs app');
});


const port = 3500;
app.listen(port, "0.0.0.0", function () {
  console.log('myapp listening on port ' + port);
});

