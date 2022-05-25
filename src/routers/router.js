const express = require("express");
const encargado = require("./encargado");
const adoptantes = require("./adoptantes");
const detalleAdopcion = require("./detalleAdopcion");
const mascota = require("./mascota");
//const cloudinaryRouter = require("./cloudinary");
const router = express.Router();

/*
 * Ruta principal de la api
 */
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Bienvenido a la API.",
  });
});

/*
 * Demás rutas
 */
router.use("/encargado", encargado);
router.use("/adoptantes", adoptantes);
router.use("/detalleAdopcion", detalleAdopcion);
router.use("/mascota", mascota);

module.exports = router;
