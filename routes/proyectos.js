//Define las rutas para el CRUD de proyectos.//
const express = require('express');
const router = express.Router();
const Proyecto = require('../models/proyecto');
// Crear un proyecto
router.post('/', async (req, res) => {
  try {
    const nuevoProyecto = new Proyecto(req.body);
    const proyectoGuardado = await nuevoProyecto.save();
    res.status(201).json(proyectoGuardado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// Obtener todos los proyectos
router.get('/', async (req, res) => {
  try {
    const proyectos = await Proyecto.find();
    res.status(200).json(proyectos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Obtener un proyecto por ID
router.get('/:id', async (req, res) => {
  try {
    const proyecto = await Proyecto.findById(req.params.id);
    if (!proyecto) return res.status(404).json({ error: 'Proyecto no encontrado' });
    res.status(200).json(proyecto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Actualizar un proyecto
router.put('/:id', async (req, res) => {
  try {
    const proyectoActualizado = await Proyecto.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!proyectoActualizado) return res.status(404).json({ error: 'Proyecto no encontrado' });
    res.status(200).json(proyectoActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// Eliminar un proyecto
router.delete('/:id', async (req, res) => {
  try {
    const proyectoEliminado = await Proyecto.findByIdAndDelete(req.params.id);
    if (!proyectoEliminado) return res.status(404).json({ error: 'Proyecto no encontrado' });
    res.status(200).json({ message: 'Proyecto eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
