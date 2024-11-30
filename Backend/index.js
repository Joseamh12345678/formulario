import express from 'express';
import mongoose from 'mongoose';
/* import formRoutes from './routes/formRoutes.js';
import userRoutes from './routes/userRoutes.js';
import surveyRoutes from './routes/surveyRoutes.js'; */

import userController from './controllers/userController.js';

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

/*  app.use('/form', formRoutes);
  app.use('/users', userRoutes);
  app.use('/surveys', surveyRoutes); */ 

app.post("/user/create", userController.createUser);
app.delete("/user/delete/:id", userController.deleteUser);
app.put("/user/update/:id", userController.updateUser);
app.get("/users", userController.getAllUsers);
app.get("/user/:id", userController.getUser);
app.post("/login", userController.login);


  app.listen(4000, () => {
    console.log('Servidor en linea en el puerto 4000');
  });

