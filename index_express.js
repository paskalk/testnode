var app = require('express')();

const sql = require('mssql');
const express = require('express');

const pool = new sql.ConnectionPool({
    user: 'sa',
    password: 'techagri@2014',
    server: 'localhost',
    database: 'node'
})
    

app.get('/', function(request, response){
    response.sendFile(__dirname +'/index_to_db.html');
});

app.get('/getName', function(request, response){
    sql.connect(config)
    .then((conn) => 
        conn.query("SELECT * FROM measurements")
            .then((v) => console.log(v))
            .then(() => conn.close()))
   


});


app.get('/getMeasurements', function(request, response){
   
    var conn = pool;
    
    conn.connect().then(function () {

        var req = new sql.Request(conn);
        req.query("SELECT * FROM measurements").then(function (recordset) {
            
            conn.close();
            
            response.header("Access-Control-Allow-Origin", "*");
console.log(recordset["recordsets"][0]);
            //return response.json({data: recordset["recordsets"]});
            return response.json(recordset.recordsets[0]);
        })
            .catch(function (err) {
                console.log(err);
                conn.close();
            });
    })
    .catch(function (err) {
        console.log(err);
    });

    

});

app.listen('3000'); 

