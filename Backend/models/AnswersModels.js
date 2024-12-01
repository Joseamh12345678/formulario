import mongoose from 'mongoose';

const AnswersSchema = new mongoose.Schema({
  Respuesta_1: {
    type: String,
    required: true,
  },
  Respuesta_2: {
    type: String,
    required: true,
  },
  Respuesta_3: {
    type: String,
    required: true,
  },
  Respuesta_4: {
    type: String,
    required: true,
  },
});

export const AnswersModels = mongoose.model('answers', AnswersModelsSchemaSchema);