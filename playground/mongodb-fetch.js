/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const express = require('express');
const {MongoClient, ObjectId} =  require('mongodb');
MongoClient.connect('mongodb://localhost:27017/MyNewDatabase',(err, db) =>{
    if(err){
        return console.log('unable to connect db');
    }
    console.log('Connected to mongo server');
//    db.collection('Todos').find({_id: new ObjectId('5ab7f654bc60a815798e1abc')
//    }).toArray().then((docs) => {
//     
//       console.log('Todos');
//       console.log(JSON.stringify(docs, undefined,2));
//    }, err => {
//        console.log('unable to fecth records', err);
//    });

//    db.collection('Todos').find().count().then((count) => {
//     
//       console.log('Todos count:' +count);
////       console.log(JSON.stringify(docs, undefined,2));
//    }, (err) => {
//        console.log('unable to fecth records', err);
//    });
    
    db.collection('Todos').find({text:'Tanzeel'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined,2));
    });
    db.close();
});  