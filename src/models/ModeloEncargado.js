const mongoose = require("mongoose");
const { Schema } = mongoose;

const EncargadoShema = new Schema({
  nombre: { type: String, required: true },
  cedula: { type: String, required: true },
  telefono: { type: String, required: true },
});

module.exports = mongoose.model("Encargado", EncargadoShema);
