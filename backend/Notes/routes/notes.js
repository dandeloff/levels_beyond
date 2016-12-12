var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : '',
    password : '',
    database : 'levels_beyond_db'
});

/* POST a new note. */
router.post('/', function(req, res, next) {

    var body = req.body.body;
    var sql = 'INSERT INTO notes (body) values ("'+body+'")';

    connection.query(sql, function(err, result) {
        if (err) next(err);

        connection.query('SELECT * FROM notes WHERE id = '+result.insertId, function(err, rows, fields) {
            if (err) next(err);

            res.send(rows[0]);
        });
    });

});

/* GET all, or query my notes. */
router.get('/', function(req, res, next) {
    var sql = 'SELECT * FROM notes';
    if (req.query.query) {
        sql = sql + ' WHERE body LIKE \'%'+req.query.query+'%\'';
    }
    connection.query(sql, function(err, rows, fields) {
        if (err) next(err);

        res.send(rows);
    });
});

/* GET an existing note. */
router.get('/:id', function(req, res, next) {

    var sql = 'SELECT * FROM notes WHERE id = '+req.params.id;

    connection.query(sql, function(err, rows, fields) {
        if (err) next(err);

        res.send(rows[0]);
    });

});


module.exports = router;
