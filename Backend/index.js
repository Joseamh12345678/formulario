import express from 'express';
import mongoose from 'mongoose';
import formRoutes from './routes/formRoutes.js';
import userRoutes from './routes/userRoutes.js';
import surveyRoutes from './routes/surveyRoutes.js';

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
  
  
  app.get('/', (req, res) => {
    res.send('Hola desde mi servidor');
  });

  app.use('/form', formRoutes);
  app.use('/users', userRoutes);
  app.use('/surveys', surveyRoutes);

  app.listen(4000, () => {
    console.log('Servidor en linea en el puerto 4000');
  });