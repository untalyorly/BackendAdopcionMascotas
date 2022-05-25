const express = require("express");
const encargado = express.Router();
const modelo = require("../models/ModeloEncargado");

// Recibir datos
encargado.get("/", async (req, res) => {
  try {
    const documentos = await modelo.find();
    //console.log(documentos);
    res.status(200).json({
      status: "ok",
      documentos,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.stack,
    });
  }
});

// Recibir datos por id

encargado.get("/:id", async (req, res) => {
  try {
    const documentos = await modelo.findById(req.params.id);
    //console.log(documentos);
    res.status(200).json({
      status: "ok",
      documentos,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.stack,
    });
  }
});

// Enviar datos
encargado.post("/", async (req, res) => {
  try {
    const { nombre, cedula, telefono } = req.body;
    const documento = new modelo({
      nombre,
      cedula,
      telefono,
    });
    await documento.save();

    res.status(200).json({
      status: "Dato Guardado",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.stack,
    });
  }
});

// Actualizar datos
encargado.put("/:id", async (req, res) => {
  try {
    const { nombre, cedula, telefono } = req.body;
    const newdocumento = {
      nombre,
      cedula,
      telefono,
    };
    await modelo.findByIdAndUpdate(req.params.id, newdocumento);

    res.status(200).json({
      status: "Dato Actualizado",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.stack,
    });
  }
});

// Eliminar datos
encargado.delete("/:id", async (req, res) => {
  try {
    await modelo.findByIdAndRemove(req.params.id);

    res.status(200).json({
      status: "Dato Eliminado",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.stack,
    });
  }
});

module.exports = encargado;
