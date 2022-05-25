const mongoose = require("mongoose");
const { Schema } = mongoose;

const EncargadoShema = new Schema({
  nombre: { type: String, required: true },
  cedula: { type: Number, required: true },
  telefono: { type: Number, required: true },
});

module.exports = mongoose.model("Encargado", EncargadoShema);
