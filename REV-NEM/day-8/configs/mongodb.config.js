
const mongoose = require('mongoose')

const connectedToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(process.env.MONGO_URI)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("Connection failure",error)
    }
}
module.exports={connectedToDB}