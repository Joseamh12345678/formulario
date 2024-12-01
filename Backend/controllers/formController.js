import { DatesModel } from '../models/AnswersModels.js';

export const createFormResponse = async (req, res) => {
  const {
    Estudiante_nombre,
    Estudiante_carrera,
    Respuesta_1,
    Respuesta_2,
    Respuesta_3,
    Respuesta_4,
  } = req.body;

  if (
    !Estudiante_nombre ||
    !Estudiante_carrera ||
    !Respuesta_1 ||
    !Respuesta_2 ||
    !Respuesta_3 ||
    !Respuesta_4
  ) {
    return res.status(400).json({
      msg: 'Todos los campos son obligatorios.',
    });
  }

  const nuevaRespuesta = new DatesModel({
    Estudiante_nombre,
    Estudiante_carrera,
    Respuesta_1,
    Respuesta_2,
    Respuesta_3,
    Respuesta_4,
  });

  try {
    await nuevaRespuesta.save();
    res.status(201).json({
      msg: 'Respuesta guardada con éxito.',
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error al guardar la respuesta.',
      error: error.message,
    });
  }
};

export const getFormResponses = async (req, res) => {
  try {
    const respuestas = await DatesModel.find();
    res.status(200).json(respuestas);
  } catch (error) {
    res.status(500).json({
      msg: 'Error al obtener las respuestas.',
      error: error.message,
    });
  }
};