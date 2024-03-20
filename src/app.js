const mongodb = require("mongodb")

const mongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbname = "proj-1"

mongoClient.connect(connectionUrl , (error,result)=>{

    if(error){
       return console.log("error")
    }
    console.log("successful connection")

    const db = result.db(dbname)

    db.collection('users').insertOne({
        name : "ahmed",
        age : 22
    } , (error,data)=>{
        if(error){
            console.log("Unable to insert data")
        }
        console.log(data.insertedId)
    })

    db.collection('users').insertMany(
        [
            {
                name : "islam",
                age : 30
            },
            {
                name : "ali",
                age : 25
            },
            {
                name : "mohamed",
                age : 24
            },
            {
                name : "hassan",
                age : 24
            },
            {
                name : "eyad",
                age : 35
            },
        ] , (error,data)=>{
            if(error){
                console.log("Unable to insert data")
            }
            console.log(data.insertedCount)
        }
    )

    db.collection('users').findOne({_id:mongodb.ObjectId("65fa36bb7b4415b23205f09e")}
        , (error,user)=>{
            if(error){
                console.log("Unable to find data")
            }
            console.log(user)
        }
    )

    db.collection('users').find({age:24}).toArray((error,users)=>{
        if(error){
            console.log("error")
        }
        console.log(users)
    })

    db.collection('users').find({age:24}).count((error,counter)=>{
        if(error){
            console.log("error")
        }
        console.log(counter)
    })

})