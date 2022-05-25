const mongoose = require("mongoose");
const { Schema } = mongoose;

const MascotaShema = new Schema({
  identificacion: { type: String, required: true },
  nombre: { type: String, required: true },
  raza: { type: String, required: true },
  edad: { type: String, required: true },
  condiciones: { type: String, required: true },
  descripcion: { type: String, required: true },
  IdAdoptante: {
    type: mongoose.Types.ObjectId,
    ref: "Adoptantes",
    required: false,
  },
});

module.exports = mongoose.model("Mascota", MascotaShema);
