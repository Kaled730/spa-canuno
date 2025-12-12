const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e) {
    e.preventDefault(); // Evita que se recargue la página

    // Validar campos
    const departamento = document.getElementById("departamento").value;
    const servicio = document.getElementById("servicio").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const info = document.getElementById("info").value;

    if(!departamento || !servicio || !fecha || !hora || !info) {
        alert("Por favor, completa todos los campos requeridos.");
        return;
    }

    // Si todo está bien
    alert("Enviado exitosamente!");
    formulario.reset(); // Limpiar formulario
});

