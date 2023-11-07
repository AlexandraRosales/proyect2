// Definir una lista de elementos
let elementos = [];

// Función para agregar un elemento
function agregarElemento(nombre) {
    elementos.push({ nombre });
    actualizarLista();
}

// Función para eliminar un elemento
function eliminarElemento(index) {
    elementos.splice(index, 1);
    actualizarLista();
}

// Función para actualizar la lista de elementos en la interfaz
function actualizarLista() {
    const appDiv = document.getElementById("app");
    appDiv.innerHTML = ""; // Limpiar el contenido

    elementos.forEach((elemento, index) => {
        const elementoDiv = document.createElement("div");
        elementoDiv.innerHTML = `
            ${elemento.nombre}
            <button onclick="eliminarElemento(${index})">Eliminar</button>
        `;
        appDiv.appendChild(elementoDiv);
    });
}

// Inicializar la lista de elementos
actualizarLista();

