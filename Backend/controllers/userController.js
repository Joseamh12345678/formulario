import { UserModel } from '../models/UserModel.js';
import jwt from "jsonwebtoken";


export default {
  createUser: async (req, res) => {
    try {
      const name = req.body.name;
      const password = req.body.password;
      const email = req.body.email;

      if(!name ||!password ||!email ){
        res.status(400).json({
          "msg": "Parametros invalidos"
        });
        return;
      }

      const user = {
        name,
        password,
        email
      };

      await UserModel.create(user);
      res.status(200).json({
        "msg": "Usuario creado con exito"
      })
      return;

    } catch (error) {
      console.log(error);
      res.status(500).json({
        "msg": "Ocurrio un error al crear el Usuario"
      });
      return;
    }
  },

  deleteUser: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await UserModel.findById(id);

      if(!user){
        res.status(400).json({
          "msg": "No se encontro usuario para eliminar"
        });
        return;
      }

      await UserModel.deleteOne({
        _id:id
      });
      res.status(200).json({
        "msg": "Usuario eliminado con exito"
      })
      return;

    } catch (error) {
      console.log(error);
      res.status(500).json({
        "msg": "Ocurrio un error al eliminar el Usuario"
      });
      return;
    }
  },

  updateUser: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await UserModel.findById(id);

      if(!user){
        res.status(400).json({
          "msg": "No se encontro usuario para actualizar"
        });
        return;
      }

      const name = req.body.name;
      const password = req.body.password;
      const email = req.body.email;

      if(!name ||!password ||!email ){
        res.status(400).json({
          "msg": "Parametros invalidos"
        });
        return;
      }

      await UserModel.findByIdAndUpdate(id, {
        $set:{
          name,
          password,
          email
        }
      });
      res.status(200).json({
        "msg": "Usuario actualizado con exito"
      })

    } catch (error) {
      console.log(error);
      res.status(500).json({
        "msg": "Ocurrio un error al actualizar el Usuario"
      });
      return;
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await UserModel.find();
      res.status(200).json({
        "msg": "Usuarios obtenidos con exito", users
      });
      return;

    } catch (error) {
      console.log(error);
      res.status(500).json({
        "msg": "Ocurrio un error al obtener los usuarios"
      });
      return;
    }
  },

  getUser: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await UserModel.findById(id);

      if(!user){
        res.status(400).json({
          "msg": "No se encontro usuario"
        });
        return;
      }
      res.status(200).json({
        "msg": "Usuario encontrado con exito", user
      })
      return;

    } catch (error) {
      console.log(error);
      res.status(500).json({
        "msg": "Ocurrio un error al obtener el usuario"
      });
      return;
    }
  },

  login: async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const user = await UserModel.findOne({email, password});

      if(!user){
        res.status(401).json({
          "msg": "Credenciales invalidas"
        });
        return;
      }

      const token = jwt.sign(JSON.stringify(user), "shhhh") 

      res.status(200).json({
        "msg": "Logueado con exito", token, user
      })
      return;

    } catch (error) {
      console.log(error);
      res.status(500).json({
        "msg": "Ocurrio un error al logear al usuario"
      });
      return;
    }
  }
};



/* export const registerUser = async (req, res) => {
  const { nombre, correo, contraseña } = req.body;

  if (!nombre || !correo || !contraseña) {
    return res.status(400).json({
      msg: 'Todos los campos son obligatorios.',
    });
  }

  const nuevoUsuario = new UserModel({
    nombre,
    correo,
    contraseña,
  });

  try {
    await nuevoUsuario.save();
    res.status(201).json({
      msg: 'Usuario registrado con éxito.',
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error al registrar el usuario.',
      error: error.message,
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const usuarios = await UserModel.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({
      msg: 'Error al obtener los usuarios.',
      error: error.message,
    });
  }
}; */