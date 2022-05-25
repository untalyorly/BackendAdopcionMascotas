const express = require("express");
const encargado = express.Router();
const modelo = require("../models/ModeloEncargado");

// Recibir datos
encargado.get("/", async (req, res) => {
  const documentos = await modelo.find();
  //console.log(documentos);
  res.json(documentos);
});

// Recibir datos por id

encargado.get("/:id", async (req, res) => {
  const documentos = await modelo.findById(req.params.id);
  //console.log(documentos);
  res.json(documentos);
});

// Enviar datos
encargado.post("/", async (req, res) => {
  const { nombre, cedula, telefono } = req.body;
  console.log(req.body.nombre);
  const documento = new modelo({
    nombre,
    cedula,
    telefono,
  });
  await documento.save();

  res.json({ status: "Guardado" });
});

// Actualizar datos
encargado.put("/:id", async (req, res) => {
  const { nombre, cedula, telefono } = req.body;
  const newdocumento = {
    nombre,
    cedula,
    telefono,
  };
  await modelo.findByIdAndUpdate(req.params.id, newdocumento);

  res.json({ status: "Actualizado" });
});

// Eliminar datos
encargado.delete("/:id", async (req, res) => {
  await modelo.findByIdAndRemove(req.params.id);

  res.json({ status: "Eliminado" });
});

module.exports = encargado;
