import { Schema, model } from "mongoose";

const EventSchema = new Schema({
    name: String,
    date: Date,
    place: String,
    description: String,
    people: Array<String>
})

export default model('event', EventSchema)