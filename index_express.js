var app = require('express')();

const mssql = require('mssql');
const express = require('express');

const db = new mssql.ConnectionPool({
    user: 'sa',
    password: 'techagri@2014',
    server: 'localhost',
    database: 'node'
})

var namesFromDb = "";

    db.connect(error => {
        if (error){
            throw error;
        }
    
        console.log('connection established');
    
        const request = new mssql.Request(db)
        request.query('select names from prelab', (err, result) => {
            
            if (err) console.log(err);
            //sconsole.log(result.recordsets);
            namesFromDb = JSON.stringify(result.recordset);
    
    })
    })

    console.log(namesFromDb);
    


app.get('/', function(request, response){
    response.sendFile(__dirname +'/index_to_db.html');
});

app.get('/getName', function(request, response){
    response.json({ name: namesFromDb });
});


app.listen('3000'); 