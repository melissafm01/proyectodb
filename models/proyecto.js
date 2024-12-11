//Define el esquema de la colección proyectos.//
const mongoose = require('mongoose');
const ProyectoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  fechaInicio: { type: Date, required: true },
  fechaFin: { type: Date, required: true },
  artistas: {  type: [String],  default: [] },
  genero: {  type: String, enum: ['rock', 'pop', 'jazz', 'clásica', 'electrónica', 'otros'], default: 'otros' },
  estado: { type: String, enum: ['en progreso', 'finalizado'], default: 'finalizado' }
});
module.exports = mongoose.model('Proyecto', ProyectoSchema);
