const express = require("express");
const detalleAdopcion = express.Router();
const modelo = require("../models/ModeloDetalleAdopcion");

// Recibir datos
detalleAdopcion.get("/", async (req, res) => {
  const documentos = await modelo
    .find()
    .populate("IdAdoptante")
    .populate("IdEncargado")
    .populate("IdMascota");
  //console.log(documentos);
  res.json(documentos);
});

// Recibir datos por id

detalleAdopcion.get("/:id", async (req, res) => {
  const documentos = await modelo
    .findById(req.params.id)
    .populate("IdAdoptante")
    .populate("IdEncargado")
    .populate("IdMascota");
  //console.log(documentos);
  res.json(documentos);
});

// Enviar datos
detalleAdopcion.post("/", async (req, res) => {
  const {
    fecha,
    cedulaAdoptante,
    cedulaEncargado,
    codigoMascota,
    IdAdoptante,
    IdEncargado,
    IdMascota,
  } = req.body;
  const documento = new modelo({
    fecha,
    cedulaAdoptante,
    cedulaEncargado,
    codigoMascota,
    IdAdoptante,
    IdEncargado,
    IdMascota,
  });
  await documento.save();

  res.json({ status: "Guardado" });
});

// Actualizar datos
detalleAdopcion.put("/:id", async (req, res) => {
  const {
    fecha,
    cedulaAdoptante,
    cedulaEncargado,
    codigoMascota,
    IdAdoptante,
    IdEncargado,
    IdMascota,
  } = req.body;
  const newdocumento = {
    fecha,
    cedulaAdoptante,
    cedulaEncargado,
    codigoMascota,
    IdAdoptante,
    IdEncargado,
    IdMascota,
  };
  await modelo.findByIdAndUpdate(req.params.id, newdocumento);

  res.json({ status: "Actualizado" });
});

// Eliminar datos
detalleAdopcion.delete("/:id", async (req, res) => {
  await modelo.findByIdAndRemove(req.params.id);

  res.json({ status: "Eliminado" });
});

module.exports = detalleAdopcion;
