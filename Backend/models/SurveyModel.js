import mongoose from 'mongoose';

const SurveySchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descripcion: String,
  preguntas: [
    {
      textoPregunta: {
        type: String,
        required: true,
      },
      opciones: [String], // Opciones en caso de preguntas de opción múltiple
    },
  ],
});

export const SurveyModel = mongoose.model('surveys', SurveySchema);