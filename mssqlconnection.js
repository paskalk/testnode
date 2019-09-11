const mssql = require('mssql');
const express = require('express');

const db = new mssql.ConnectionPool({
    user: 'sa',
    password: 'techagri@2014',
    server: 'localhost',
    database: 'node'
})

db.connect(error => {
    if (error){
        throw error;
    }

    console.log('connection established');

    const request = new mssql.Request(db)
    request.query('select id from prelab', (err, result) => {
        // ... error checks
        if (err) console.log(err);

    console.log(result) // return 1

    // ...
})
})

