const express = require('express');

const productCtrl = express.Router();

const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'jewelry_store'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("SQL Connected!");
});

productCtrl.get('/', function (req, res) {
    const sql = `SELECT * FROM products`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    })
});

productCtrl.get('/:makat', function (req, res) {
    const sql = `SELECT makat FROM products WHERE makat=${req.params.makat}`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result.length > 0 && result[0] || null);
    })
});

productCtrl.post('/', function (req, res) {
    const sql = `INSERT INTO products (makat, category, price, color, description, pic_url) VALUES (?,?,?,?,?,?)`;
    con.query(sql, [req.body.makat, req.body.category, req.body.price, req.body.color, req.body.description, req.body.pic_url], function (err, result) {
        if (err) throw err;
        res.send(result);
    })
});

productCtrl.put('/:makat', function (req, res) {
    const body = { ...req.body };
    const sql = `UPDATE products SET makat = COALESCE(NULLIF(?,''),makat), category = COALESCE(NULLIF(?,''),category),price = COALESCE(NULLIF(?,''),price), color = COALESCE(NULLIF(?,''),color), description = COALESCE(NULLIF(?,''),description),pic_url = COALESCE(NULLIF(?,''),pic_url) WHERE makat = ?`;
    console.log(sql);
    con.query(sql, [(body.makat), (body.category), (body.price), (body.color), (body.description), (body.pic_url), (req.params.makat)], function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

productCtrl.delete('/:makat', function (req, res) {
    const sql = `DELETE FROM products WHERE makat= ?`;
    con.query(sql,[req.params.makat],function (err, result) {
        if (err) throw err;
        res.send(result);
    })
});


module.exports = productCtrl;