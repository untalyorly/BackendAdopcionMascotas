const express = require("express");
const detalleAdopcion = express.Router();
const modelo = require("../models/ModeloDetalleAdopcion");

// Recibir datos
detalleAdopcion.get("/", async (req, res) => {
  try {
    const documentos = await modelo
      .find()
      .populate("IdAdoptante")
      .populate("IdEncargado")
      .populate("IdMascota");
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

detalleAdopcion.get("/:id", async (req, res) => {
  try {
    const documentos = await modelo
      .findById(req.params.id)
      .populate("IdAdoptante")
      .populate("IdEncargado")
      .populate("IdMascota");
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
detalleAdopcion.post("/", async (req, res) => {
  try {
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
detalleAdopcion.put("/:id", async (req, res) => {
  try {
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
detalleAdopcion.delete("/:id", async (req, res) => {
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

module.exports = detalleAdopcion;
