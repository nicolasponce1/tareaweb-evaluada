const express = require('express');
const router = express.Router();
const Order = require('../models/order'); // Importa el modelo de pedidos

// Ruta POST '/new' para crear un nuevo pedido
router.post('/new', (req, res) => {
  const { tableNumber, items } = req.body; // Obtiene el número de mesa y los ítems del cuerpo de la solicitud

  // Verifica si los datos recibidos son válidos
  if (!tableNumber || !items || !Array.isArray(items)) {
    return res.status(400).send('Invalid input'); // Envia una respuesta de error si los datos son inválidos
  }

  // Calcula el subtotal sumando el precio total de los ítems del pedido
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Calcula el total sumando una propina del 10% al subtotal
  const total = subtotal * 1.10;

  // Llama a la función createOrder del modelo Order para guardar el pedido en la base de datos
  Order.createOrder(tableNumber, items, subtotal, total, (err, orderId) => {
    if (err) {
      return res.status(500).send('Error al crear la orden'); // Envia una respuesta de error si hay un problema al crear el pedido
    }
    res.status(201).send(`Orden creada con exito ID: ${orderId}`); // Envia una respuesta de éxito con el ID del pedido creado
  });
});

module.exports = router; // Exporta el enrutador para que pueda ser utilizado por la aplicación Express
