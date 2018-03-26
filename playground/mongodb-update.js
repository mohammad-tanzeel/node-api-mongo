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

//    db.collection('Todos').findOneAndUpdate({
//        _id:new ObjectId ('5ab9194080cc010daa90cea5'),
//    }, {
//        $set:{
//            complete:'only yes'
//        }
//    } , {
//            returnOrignl:false
//        }).then((result) => {
//           console.log('db updated'); 
//        });
    
    db.collection('Todos').findOneAndUpdate({
        
            _id:new ObjectId('5ab9294980cc010daa90ceaa'),
         
    }, {
        $set: {
         name:'Zain khan'
     }, 
     $inc: {
         age: 25
     }
    }, {
        returnOriginal: false
    }).then((result) => {
        console .log(result);
    });
    db.close();
});  