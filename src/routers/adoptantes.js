const express = require("express");
const adoptantes = express.Router();
const modelo = require("../models/ModeloAdoptantes");

// Recibir datos
adoptantes.get("/", async (req, res) => {
  const documentos = await modelo.find();
  //console.log(documentos);
  res.json(documentos);
});

// Recibir datos por id

adoptantes.get("/:id", async (req, res) => {
  const documentos = await modelo.findById(req.params.id);
  //console.log(documentos);
  res.json(documentos);
});

// Enviar datos
adoptantes.post("/", async (req, res) => {
  const { nombre, cedula, direccion, telefono } = req.body;
  const documento = new modelo({
    nombre,
    cedula,
    direccion,
    telefono,
  });
  await documento.save();

  res.json({ status: "Guardado" });
});

// Actualizar datos
adoptantes.put("/:id", async (req, res) => {
  const { nombre, cedula, direccion, telefono } = req.body;
  const newdocumento = {
    nombre,
    cedula,
    direccion,
    telefono,
  };
  await modelo.findByIdAndUpdate(req.params.id, newdocumento);

  res.json({ status: "Actualizado" });
});

// Eliminar datos
adoptantes.delete("/:id", async (req, res) => {
  await modelo.findByIdAndRemove(req.params.id);

  res.json({ status: "Eliminado" });
});

module.exports = adoptantes;
