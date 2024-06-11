// Escucha cuando se envía el formulario
document.getElementById('orderForm').addEventListener('submit', function(event) {
  // Evita que la página se recargue al enviar el formulario
  event.preventDefault();
  
  // Obtiene el número de mesa ingresado por el usuario
  const tableNumber = document.getElementById('tableNumber').value;
  // Obtiene los nombres de los ítems ingresados por el usuario
  const item1 = document.getElementById('item1').value;
  const item2 = document.getElementById('item2').value;
  
  // Prepara la lista de ítems con nombres, precios y cantidades fijas
  const items = [{ name: item1, price: 10, quantity: 1 }, { name: item2, price: 15, quantity: 1 }];
  
  // Prepara los datos a enviar al servidor, incluyendo el número de mesa y la lista de ítems
  const data = {
    tableNumber: tableNumber,
    items: items
  };
  
  // Envía los datos al servidor mediante una solicitud POST usando Fetch API
  fetch('/orders/new', {
    method: 'POST', // Indica que se está enviando información al servidor
    headers: {
      'Content-Type': 'application/json' // Especifica que los datos se están enviando en formato JSON
    },
    body: JSON.stringify(data) // Convierte los datos a formato JSON antes de enviarlos
  })
  .then(response => {
    // Verifica si la respuesta del servidor fue exitosa
    if (!response.ok) {
      throw new Error('Network response was not ok'); // Lanza un error si la respuesta no fue exitosa
    }
    return response.text(); // Convierte la respuesta a texto legible
  })
  .then(data => {
    // Actualiza el mensaje en la página con la respuesta del servidor
    document.getElementById('message').innerHTML = data;
  })
  .catch(error => {
    // Maneja cualquier error que pueda ocurrir durante la comunicación con el servidor
    console.error('There has been a problem with your fetch operation:', error); // Muestra el error en la consola
    document.getElementById('message').innerHTML = 'Error creating order'; // Muestra un mensaje de error en la página
  });
});
