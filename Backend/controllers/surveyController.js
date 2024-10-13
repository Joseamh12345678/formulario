import { SurveyModel } from '../models/SurveyModel.js';

export const createSurvey = async (req, res) => {
  const { titulo, descripcion, preguntas } = req.body;

  if (!titulo || !preguntas || preguntas.length === 0) {
    return res.status(400).json({
      msg: 'El título y las preguntas son obligatorios.',
    });
  }

  const nuevaEncuesta = new SurveyModel({
    titulo,
    descripcion,
    preguntas,
  });

  try {
    await nuevaEncuesta.save();
    res.status(201).json({
      msg: 'Encuesta creada con éxito.',
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error al crear la encuesta.',
      error: error.message,
    });
  }
};

export const getSurveys = async (req, res) => {
  try {
    const encuestas = await SurveyModel.find();
    res.status(200).json(encuestas);
  } catch (error) {
    res.status(500).json({
      msg: 'Error al obtener las encuestas.',
      error: error.message,
    });
  }
};