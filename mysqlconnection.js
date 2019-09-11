const mysql = require('mysql');
const express = require('express');

const db =  mysql.createConnection({
    user: 'root',
    password: '',
    host: 'localhost',
    database: 'node'
})

db.connect(error => {
    if (error){
        throw error;
    }

    console.log('connection established');
})

db.query('SELECT * from prelab', function(err, rows, fields) {
    if (!err)
      console.log('The solution is: ', rows);
    else
      console.log('Error while performing Query.');
  });
  
  db.end();