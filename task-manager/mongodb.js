// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

const {MongoClient, ObjectId} = require('mongodb');



const connectionURL= 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL,{useNewUrlParser: true },(error, client) => {
    if(error){
        console.log('could not connect to databse');
        return;
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Ryan',
    //     age: 26
    // }, (error, result) => {
    //     if(error){
    //         console.log('there was an error inserting the row');
    //         return;
    //     }

    //     console.log(result.ops);
    // });

    // db.collection('users').insertMany([
    //                                     {name: 'Lee',
    //                                     age: 31},
    //                                     {name: 'katrina',
    //                                     age: 26}
    //                                 ], (error, result) => {
    //                                     if (error){
    //                                         console.log('unable to insert');
    //                                         return
    //                                     }
    //                                     console.log(result.ops);
    //                                 })

    // db.collection('tasks').insertMany([
    //                                         {desciption: 'Clean kitchen',
    //                                         completed: true},
    //                                         {desciption: 'Water flowers',
    //                                         completed: true},
    //                                         {desciption: 'Cook dinner',
    //                                         completed: false},
    //                                     ], (error, result) => {
    //                                         if (error){
    //                                             console.log('unable to insert');
    //                                             return
    //                                         }
    //                                         console.log(result.ops);
    //                                     })
    
    

    db.collection('tasks').findOne({_id: new ObjectId("5d4e2aa5fda48a0478af9c40")},(error, user) => {
        if(error){
            console.log('there was an error finding a user');
            return;
        }

        console.log(user);
    })

    db.collection('tasks').find({completed: false}).toArray((error, users) => {
        if(error){
            console.log('there was an error finding a user');
            return;
        }

        console.log(users);
    })

})
