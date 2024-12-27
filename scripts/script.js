//toggle sidebar
const toggler = document.querySelector(".toggler-btn");
const sidebar = document.querySelector("#sidebar");

toggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});


// Función para manejar los enlaces activos
function setActiveLink() {
    // Obtener la ruta actual sin parámetros ni hash
    const currentPath = window.location.pathname.replace(/\/$/, ""); // Remover barra final si existe

    // Obtener todos los enlaces del sidebar
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    // Iterar por cada enlace y verificar si coincide con el currentPath
    sidebarLinks.forEach(link => {
        // Obtener el atributo href del enlace y normalizarlo
        const linkPath = new URL(link.getAttribute('href'), window.location.origin).pathname.replace(/\/$/, "");

        // Comparar el currentPath con el linkPath
        if (currentPath === linkPath) {
            link.classList.add('active'); // Agregar clase activa
        } else {
            link.classList.remove('active'); // Asegurarse de que otros enlaces no estén activos
        }
    });
}

// Ejecutar cuando se carga la página
document.addEventListener('DOMContentLoaded', setActiveLink);

// También puedes ejecutar cuando cambia la URL (si usas navegación del lado del cliente)
window.addEventListener('popstate', setActiveLink);
