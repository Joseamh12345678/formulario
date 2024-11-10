import { UserModel } from '../models/UserModel.js';

export const registerUser = async (req, res) => {
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
};