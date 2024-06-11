# Sistema de Pedidos para Restaurante

Este proyecto implementa un sistema de pedidos para un restaurante utilizando Node.js, Express y MySQL.

## Características

- Permite a los clientes realizar pedidos mediante un formulario web.
- Calcula automáticamente el subtotal y total del pedido, incluyendo una propina del 10%.
- Almacena los pedidos en una base de datos MySQL.

## Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución para JavaScript.
- **Express** - Framework web para Node.js.
- **MySQL** - Sistema de gestión de base de datos relacional.
- **HTML/CSS** - Frontend básico para el formulario de pedidos.

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git
   cd tu_repositorio

2. **instala las dependencias**
   ```bash
   npm install express mysql body-parser

3. Estructura
   ```bash
   /restaurant-order
   |-- /db
   |   |-- connection.js
   |-- /models
   |   |-- order.js
   |-- /public
   |   |-- styles.css
   |   |-- scripts.js
   |   |-- index.html
   |-- /routes
   |   |-- orders.js
   |-- app.js
   |-- package.json
   |-- README.md

4. Configuración de la Base de Datos con XAMPP:

   ```bash
   CREATE DATABASE restaurant;
   USE restaurant;
   CREATE TABLE orders (
       id INT AUTO_INCREMENT PRIMARY KEY,
       table_number INT NOT NULL,
       items TEXT NOT NULL,
       subtotal DECIMAL(10, 2) NOT NULL,
       total DECIMAL(10, 2) NOT NULL
   ); 

Asegúrate de tener XAMPP instalado y en ejecución.

Abre el panel de control de XAMPP y enciende Apache y MySQL.

Abre phpMyAdmin desde el panel de control de XAMPP.

Crea una nueva base de datos llamada restaurant.

5.Inicia la web:

      node app.js


6. Abre tu navegador y navega a http://localhost:3003 para ver el formulario de pedidos.

USO

Completa el formulario de pedidos en la página principal.
Haz clic en "Enviar Pedido" para enviar el pedido al servidor.
El servidor calculará el total del pedido y lo almacenará en la base de datos.
Recibirás un mensaje de confirmación con el ID del pedido creado.

7. Capturas de La interfaz del Usuario

   1. Crear pedido

     ![image](https://github.com/nicolasponce1/TareaEvaluada/assets/171303513/7621ea13-1c03-4db0-a98e-4ee6e71007e9)

   2. Pedido ingresado

      ![image](https://github.com/nicolasponce1/TareaEvaluada/assets/171303513/cd9bb03b-8d71-46f2-8e6e-8e13211c1cc9)

   3. Mensaje de exito y nos otorga la ID del pedido
      ![image](https://github.com/nicolasponce1/TareaEvaluada/assets/171303513/53f1fc5b-cbd4-4b21-a187-9511a280aa65)

8. Corroboracion de registro en Base de Datos

   ![image](https://github.com/nicolasponce1/TareaEvaluada/assets/171303513/1fa6a524-b15f-4e23-aa81-55d736e2732c)
