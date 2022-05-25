const mongoose = require("mongoose");
const { Schema } = mongoose;

const AdoptantesShema = new Schema({
  nombre: { type: String, required: true },
  cedula: { type: Number, required: true },
  direccion: { type: String, required: true },
  telefono: { type: Number, required: true },
});

module.exports = mongoose.model("Adoptantes", AdoptantesShema);
