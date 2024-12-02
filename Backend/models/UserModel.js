import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
    unique: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
});

export const UserModel = mongoose.model('users', UserSchema);



