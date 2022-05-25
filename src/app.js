const express = require("express");
const body_parser = require("body-parser");
const dotenv = require("dotenv").config();
const router = require("../src/routers/router");
const { getmongoose } = require("../src/config/database");

// Si se encuentra en producción, no utiliza el paquete dotenv
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();
const port = process.env.PORT || 5000;

// Inicializar rutas de la API

app.use(express.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use("/api", router);

// Guardar base de datos
app.locals.db = getmongoose();

app.listen(port, () => {
  console.log(`Iniciado correctamente el servidor en el puerto: ${port}`);
});
