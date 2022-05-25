const mongoose = require("mongoose");
const { Schema } = mongoose;

const DetalleAdopcionShema = new Schema({
  fecha: { type: Date, required: true },
  cedulaAdoptante: { type: String, required: true },
  cedulaEncargado: { type: String, required: true },
  codigoMascota: { type: String, required: true },
  IdAdoptante: {
    type: mongoose.Types.ObjectId,
    ref: "Adoptantes",
    required: false,
  },
  IdEncargado: {
    type: mongoose.Types.ObjectId,
    ref: "Encargado",
    required: false,
  },
  IdMascota: {
    type: mongoose.Types.ObjectId,
    ref: "Mascota",
    required: false,
  },
});

module.exports = mongoose.model("DetalleAdopcion", DetalleAdopcionShema);
