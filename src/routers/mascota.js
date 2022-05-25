const express = require("express");
const mascota = express.Router();
const modelo = require("../models/ModeloMascota");

// Recibir datos
mascota.get("/", async (req, res) => {
  const documentos = await modelo.find().populate("IdAdoptante");
  //console.log(documentos);
  res.json(documentos);
});

// Recibir datos por id

mascota.get("/:id", async (req, res) => {
  const documentos = await modelo
    .findById(req.params.id)
    .populate("IdAdoptante");
  //console.log(documentos);
  res.json(documentos);
});

// Enviar datos
mascota.post("/", async (req, res) => {
  const {
    identificacion,
    nombre,
    raza,
    edad,
    condiciones,
    descripcion,
    IdAdoptante,
  } = req.body;

  const documento = new modelo({
    identificacion,
    nombre,
    raza,
    edad,
    condiciones,
    descripcion,
    IdAdoptante,
  });
  await documento.save();

  res.json({ status: "Guardado" });
});

// Actualizar datos
mascota.put("/:id", async (req, res) => {
  const {
    identificacion,
    nombre,
    raza,
    edad,
    condiciones,
    descripcion,
    IdAdoptante,
  } = req.body;
  const newdocumento = {
    identificacion,
    nombre,
    raza,
    edad,
    condiciones,
    descripcion,
    IdAdoptante,
  };
  await modelo.findByIdAndUpdate(req.params.id, newdocumento);

  res.json({ status: "Actualizado" });
});

// Eliminar datos
mascota.delete("/:id", async (req, res) => {
  await modelo.findByIdAndRemove(req.params.id);

  res.json({ status: "Eliminado" });
});

module.exports = mascota;
