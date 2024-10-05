import express from "express"
import mongoose from "mongoose";
import { DatesModel } from "./models/DatesModels.js";

mongoose.connect("mongodb://localhost:27017/formulario").then
(()=>{
    console.log("conexion exitosa a la BD")
})
const app = express();

app.use(express.json())

//post->crear put->actualizar}body/objeto/{claves,valores} {get->obtener delete->eliminar}sin body quere
app.get("/",(req,res)=>{
    res.send("Hola desde mi servidor")
})

app.post("/create",(req,res)=>{
    const Estudiante_nombre = req.body.Estudiante_nombre;
    const Estudiante_carrera = req.body.Estudiante_carrera;
    const Respuesta_1 = req.body.Respuesta_1;
    const Respuesta_2 = req.body.Respuesta_2;
    const Respuesta_3 = req.body.Respuesta_3;
    const Respuesta_4 = req.body.Respuesta_4;
    if(!Estudiante_nombre || !Estudiante_carrera || !Respuesta_1 || !Respuesta_2 || !Respuesta_3 || !Respuesta_4){
        return res.status(4000).json({
            msg:"Necesitamos todos los valores para almacenar un documento!"
        })
    }
    const obj = {
    Estudiante_nombre: Estudiante_nombre,
    Estudiante_carrera: Estudiante_carrera,
    Respuesta_1: Respuesta_1,
    Respuesta_2: Respuesta_2,
    Respuesta_3: Respuesta_3,
    Respuesta_4: Respuesta_4
    }
    DatesModel.create(obj)
    return res.status(200).json({
        msg:"cita almacenada con exito"
    })
})

app.listen(4000,()=>{
    console.log("servidor en linea")
})