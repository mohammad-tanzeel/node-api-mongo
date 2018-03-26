/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const express = require('express');
const MongoClient =  require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/MyNewDatabase',(err, db) =>{
    if(err){
        return console.log('unable to connect db');
    }
    console.log('Connected to mongo server');
    db.collection('Todos').insertOne({
    text: 'Andrew',
    complete: 'task have done'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }

    console.log(result.ops[0]._id.getTimestamp());
  });

    db.close();
});  