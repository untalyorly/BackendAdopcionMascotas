const express = require("express");
const mascota = express.Router();
const modelo = require("../models/ModeloMascota");

// Recibir datos
mascota.get("/", async (req, res) => {
  try {
    const documentos = await modelo.find().populate("IdAdoptante");
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

mascota.get("/:id", async (req, res) => {
  try {
    const documentos = await modelo
      .findById(req.params.id)
      .populate("IdAdoptante");
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
mascota.post("/", async (req, res) => {
  try {
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
mascota.put("/:id", async (req, res) => {
  try {
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
mascota.delete("/:id", async (req, res) => {
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

module.exports = mascota;
