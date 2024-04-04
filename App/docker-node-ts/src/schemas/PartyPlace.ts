import { Schema, model } from "mongoose";


const partyPlaceSchema = new Schema({
    name: String,
    maxPeople: Number,
    
})


export default model('partyPlace', partyPlaceSchema)