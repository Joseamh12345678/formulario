import express from 'express';
import mongoose from 'mongoose';
import formRoutes from './routes/formRoutes.js';
import userRoutes from './routes/userRoutes.js';
import surveyRoutes from './routes/surveyRoutes.js';
import cors from "cors";
import { AnswersModels } from './models/AnswersModels.js';

mongoose
  .connect('mongodb://localhost:27017/formulario')
  .then(() => {
    console.log('Conexión exitosa a la BD');
  })
  .catch((error) => {
    console.error('Error al conectar a la BD:', error);
  });

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola desde mi servidor');
});

app.post("/create", (req, res) => {
  const { pregunta_1, pregunta_2, pregunta_3, pregunta_4, pregunta_5, pregunta_6 } = req.body;
  if (!pregunta_1 || !pregunta_2 || !pregunta_3 || !pregunta_4 || !pregunta_5 || !pregunta_6) {
    return res.status(400).json({
      msg: "Necesitamos todos los valores para almacenar un documento!"
    });
  }
  // Aquí se puede agregar la lógica para almacenar el documento en la base de datos
  res.status(201).json({ msg: "Documento creado exitosamente!" });
});

app.post("/save-answers", async (req, res) => {
  console.log(req, body)
  const numberOfQuestions = Array.from(Array(15).keys())
  let flag =true
  for(const nQ of numberOfQuestions){
  if(!req.body[`pregunta_${nQ}`]){
    flag = false;
  }
  }
  if(!flag){
    return res.status(400).json({msg:"Datos incompletos"})
  }
  try {
    await AnswersModels.create(req.body);
    return res.status(200).json({msg: "Datos almacenados con exito"})
  } catch (error) {
    return res.status(500).json({msg: "Algo salio mal al guardar las respuestas"})
  }
})

app.get("/get-answers", async (req, res) =>{
  return res.status(200).json(await AnswersModels.find())
})

app.use('/form', formRoutes);
app.use('/users', userRoutes);
app.use('/create', surveyRoutes);
app.use('/surveys', surveyRoutes);

app.listen(4000, () => {
  console.log('Servidor en línea en el puerto 4000');
});
