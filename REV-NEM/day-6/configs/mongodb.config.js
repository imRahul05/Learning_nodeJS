
const mongoose = require('mongoose')

const connectedToDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/DAY6')
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("Connection failure",error)
    }
}
module.exports={connectedToDB}