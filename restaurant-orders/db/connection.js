const mysql = require('mysql');

// Configura la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',  // Dirección donde está alojada la base de datos
  user: 'root',       // Usuario para acceder a la base de datos
  password: '',       // Contraseña para acceder a la base de datos
  database: 'restaurant'  // Nombre de la base de datos que se va a usar
});

// Intenta conectar con la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);  // Muestra un mensaje de error si la conexión falla
    return;
  }
  console.log('Connected to the MySQL database.');  // Muestra un mensaje de éxito si la conexión es exitosa
});

// Exporta la conexión para poder usarla en otros archivos
module.exports = connection;
