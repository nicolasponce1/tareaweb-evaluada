const db = require('../db/connection');

// Función para crear un nuevo pedido en la base de datos
const createOrder = (tableNumber, items, subtotal, total, callback) => {
  // Consulta SQL para guardar el pedido en la base de datos
  const sql = 'INSERT INTO orders (table_number, items, subtotal, total) VALUES (?, ?, ?, ?)';
  
  // Ejecuta la consulta SQL con los datos proporcionados
  db.query(sql, [tableNumber, JSON.stringify(items), subtotal, total], (err, result) => {
    if (err) {
      // Si hay un error, llama al callback con el error
      return callback(err);
    }
    // Si todo sale bien, llama al callback con el ID del nuevo pedido
    callback(null, result.insertId);
  });
};

// Exporta la función createOrder para que se pueda usar en otros archivos
module.exports = {
  createOrder
};


