const mongoose = require("mongoose")
require("dotenv").config()

async function connect(){
  await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mk9jy.mongodb.net/account`, () => {
        console.log("Database is connected")
    })
}

connect()

