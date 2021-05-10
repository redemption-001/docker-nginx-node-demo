const express = require('express');
const mysql = require('mysql');
const app = express();

const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

app.use(express.json());

app.get('/', async function (req, res) {
    var connection = await mysql.createConnection(config);
    await connection.connect();

    connection.query("SELECT * FROM people", async (error, results, fields) => {
        let names = new Array();
        results.map(row => {
            names.push(`<li>${row.name}</li>`)
        })

        let body = '<h1>Full Cycle Rocks!</h1>'
            .concat("<ul>")
            .concat(names.toString().replaceAll(",", ""))
            .concat("</ul>");

        res.send(body);
    });

    connection.end();

});

app.post('/', async function (req, res) {
    var connection = await mysql.createConnection(config);
    await connection.connect();

    const sql = `INSERT INTO people(name) values("${req.body.name}")`

    connection.query(sql, async (error, results, fields) => {
        res.redirect('/');
    });
    connection.end();

});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})