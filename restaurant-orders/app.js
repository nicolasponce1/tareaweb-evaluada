// Importa Express para manejar las solicitudes y respuestas HTTP
const express = require('express');
// Importa bodyParser para poder leer y procesar datos JSON en las solicitudes
const bodyParser = require('body-parser');
// Importa el enrutador de pedidos que definimos en './routes/orders'
const ordersRouter = require('./routes/orders');

// Crea una nueva aplicación Express
const app = express();
// Define el puerto en el que el servidor va a escuchar, usa el puerto definido en las variables de entorno (o 3002 si no está definido)
const PORT = process.env.PORT || 3003;

// Middleware: Configura bodyParser para que la aplicación pueda entender solicitudes con datos JSON
app.use(bodyParser.json());
// Middleware: Configura Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Rutas: Define que todas las solicitudes que empiecen con '/orders' serán manejadas por el enrutador de pedidos
app.use('/orders', ordersRouter);

// Servidor: Inicia la aplicación para escuchar en el puerto especificado
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Muestra un mensaje en la consola cuando el servidor se inicia correctamente
});
