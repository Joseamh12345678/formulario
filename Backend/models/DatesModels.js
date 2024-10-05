import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const DatesSchema = new Schema({
    Estudiante_nombre:{
        type:String,
        required:true
    },
    Estudiante_carrera:{
        type:String,
        required:true
    },
    Respuesta_1:{
        type:String,
        required:true
    },
    Respuesta_2:{
        type:String,
        required:true
    },
    Respuesta_3:{
        type:String,
        required:true
    },
    Respuesta_4:{
        type:String,
        required:true
    }
})

export const DatesModel = model("dates", DatesSchema)