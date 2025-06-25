import mongoose, { model, mongo } from "mongoose";


const vehicleSchema = new mongoose.Schema({
    model:{type:String,required:true},
     type:{type:String,required:true,enum:['car','Jeep','Bus','MiniBus']},
     registration_number:{type:String,required:true},
     seat_count:{type:Number,required:true,min:4,max:56},
     ventilation:{type:String,enum:['AC','Non-AC']},
     farePerKm:{type:Number,required:true,min:10},
     isAvailable:{type:Boolean,required:true,default:true}
     
})

export const vehicleModel = mongoose.Model('vehicle',vehicleSchema)