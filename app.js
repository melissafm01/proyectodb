//Archivo principal para configurar el servidor.//
const express = require('express');
const mongoose = require('mongoose');
const proyectosRoutes = require('./routes/proyectos');
const app = express();
const PORT = 3000;
// Middleware
app.use(express.json());
// Conexión a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/proyectosDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conexión a MongoDB exitosa'))
.catch(err => console.error('Error al conectar a MongoDB:', err));
// Rutas
app.use('/api/proyectos', proyectosRoutes);
// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
