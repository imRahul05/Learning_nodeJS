import mongoose from "mongoose"

export const connectedToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("Connection failure", error)
    }
}


