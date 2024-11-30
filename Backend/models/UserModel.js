// import mongoose from 'mongoose';

//const UserSchema = new mongoose.Schema({
//  nombre: {
//    type: String,
//    required: true,
//  },
//  correo: {
//    type: String,
//    required: true,
//    unique: true,
//  },
//  contraseña: {
//    type: String,
//    required: true,
// },
//});

//export const UserModel = mongoose.model('users', UserSchema);

import { Schema, model } from "mongoose";

const UserSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

export const UserModel = model("users", UserSchema);



