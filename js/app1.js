// Simulación de sesión
const usuarioValido = "Estudiante";
const passwordValido = "5468";

// Datos
let duenos = [];
let mascotas = [];
let agenda = [];
let carrito = [];

// Login
document.getElementById("formLogin").addEventListener("submit", function(e){
    e.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;
    if(usuario === usuarioValido && password === passwordValido){
        alert("Sesión iniciada");
        document.getElementById("login").classList.add("hidden");
        document.getElementById("navbar").classList.remove("hidden");
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});

// Cerrar sesión
function cerrarSesion(){
    document.getElementById("login").classList.remove("hidden");
    document.getElementById("navbar").classList.add("hidden");
    ocultarModulos();
}

// Función para mostrar módulos
function mostrarModulo(id){
    ocultarModulos();
    document.getElementById(id).classList.remove("hidden");
}

function ocultarModulos(){
    const modulos = document.querySelectorAll(".modulo");
    modulos.forEach(m => m.classList.add("hidden"));
}

// Registro de Dueños
document.getElementById("formDueno").addEventListener("submit", function(e){
    e.preventDefault();
    const dueno = {
        nombre: document.getElementById("nombreDueno").value,
        telefono: document.getElementById("telefonoDueno").value,
        correo: document.getElementById("correoDueno").value
    };
    duenos.push(dueno);
    alert("Dueño registrado!");
    this.reset();
});

// Registro de Mascotas
document.getElementById("formMascota").addEventListener("submit", function(e){
    e.preventDefault();
    const mascota = {
        nombre: document.getElementById("nombreMascota").value,
        especie: document.getElementById("especieMascota").value,
        raza: document.getElementById("razaMascota").value
    };
    mascotas.push(mascota);
    alert("Mascota registrada!");
    actualizarSelectMascotas();
    this.reset();
});

// Actualizar select de mascotas en agenda
function actualizarSelectMascotas(){
    const select = document.getElementById("selectMascota");
    select.innerHTML = "<option value=''>Selecciona una mascota</option>";
    mascotas.forEach((m, i) => {
        select.innerHTML += `<option value="${i}">${m.nombre} (${m.especie})</option>`;
    });
}

// Agenda de servicios
document.getElementById("formAgenda").addEventListener("submit", function(e){
    e.preventDefault();
    const mascotaIndex = document.getElementById("selectMascota").value;
    if(mascotaIndex === "") return alert("Selecciona una mascota");
    const servicio = document.getElementById("selectServicio").value;
    const fecha = document.getElementById("fechaServicio").value;
    const hora = document.getElementById("horaServicio").value;
    const agendaItem = {
        mascota: mascotas[mascotaIndex].nombre,
        servicio, fecha, hora
    };
    agenda.push(agendaItem);
    mostrarAgenda();
    this.reset();
});

// Mostrar agenda
function mostrarAgenda(){
    const lista = document.getElementById("listaAgenda");
    lista.innerHTML = "<h3>Servicios agendados:</h3>";
    agenda.forEach(a => {
        lista.innerHTML += `<p>${a.mascota} - ${a.servicio} - ${a.fecha} ${a.hora}</p>`;
    });
}

// Catálogo de carrito
const catalogoItems = [
    {nombre: "Baño", precio: 50},
    {nombre: "Comida", precio: 30},
    {nombre: "Juguete", precio: 20}
];

function mostrarCatalogo(){
    const cont = document.getElementById("catalogo");
    cont.innerHTML = "";
    catalogoItems.forEach((item, i) => {
        cont.innerHTML += `<div>${item.nombre} - Bs ${item.precio} <button onclick="agregarCarrito(${i})">Comprar</button></div>`;
    });
}
mostrarCatalogo();

function agregarCarrito(i){
    carrito.push(catalogoItems[i]);
    mostrarCarrito();
}

function mostrarCarrito(){
    const cont = document.getElementById("carritoItems");
    cont.innerHTML = "";
    let total = 0;
    carrito.forEach(c => {
        cont.innerHTML += `<div>${c.nombre} - Bs ${c.precio}</div>`;
        total += c.precio;
    });
    document.getElementById("totalCarrito").innerText = `Total: Bs ${total}`;
}
