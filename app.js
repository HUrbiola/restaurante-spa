// Referencias al DOM
const form = document.getElementById("platoForm");
const tbody = document.getElementById("platosBody");

let platos = JSON.parse(localStorage.getItem("platos")) || [];

// Función para renderizar la tabla
function renderTabla() {
  tbody.innerHTML = "";
  platos.forEach((plato, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${plato.nombre}</td>
      <td>${plato.descripcion}</td>
      <td>S/. ${plato.precio}</td>
      <td>${plato.categoria}</td>
      <td>${plato.disponibilidad}</td>
      <td>
        <button class="btn btn-sm btn-danger" onclick="eliminarPlato(${index})">Eliminar</button>
      </td>
    `;
    tbody.appendChild(fila);
  });
}

// Función para agregar un plato
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nuevoPlato = {
    nombre: document.getElementById("nombre").value,
    descripcion: document.getElementById("descripcion").value,
    precio: document.getElementById("precio").value,
    categoria: document.getElementById("categoria").value,
    disponibilidad: document.getElementById("disponibilidad").value,
  };

  platos.push(nuevoPlato);
  localStorage.setItem("platos", JSON.stringify(platos));

  renderTabla();
  form.reset();
});

// Función para eliminar
function eliminarPlato(index) {
  platos.splice(index, 1);
  localStorage.setItem("platos", JSON.stringify(platos));
  renderTabla();
}

// Render inicial al cargar
renderTabla();
