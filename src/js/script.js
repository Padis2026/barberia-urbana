// Seleccionamos el formulario por su ID
const formulario = document.getElementById("form-contacto");

// Verificamos que el formulario exista
if (formulario) {

```
// Escuchamos el evento submit
formulario.addEventListener("submit", function (event) {

    // Evita el envío por defecto mientras validamos
    event.preventDefault();

    // Obtenemos los valores de cada campo
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Expresión regular para validar correo electrónico
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validación de nombre
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        return;
    }

    // Validación de correo electrónico
    if (!emailValido.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    // Validación de asunto
    if (asunto === "") {
        alert("Por favor, ingresa un asunto.");
        return;
    }

    // Validación de mensaje
    if (mensaje.length < 10) {
        alert("El mensaje debe tener al menos 10 caracteres.");
        return;
    }

    // Mensaje de éxito
    alert("Formulario enviado correctamente. ¡Gracias por contactarnos!");

    // Limpia los campos del formulario
    formulario.reset();

});
```

}
