//toggle sidebar
const toggler = document.querySelector(".toggler-btn");
const sidebar = document.querySelector("#sidebar");

toggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});


// Función para manejar los enlaces activos
function setActiveLink() {
    // Obtener la ruta actual
    const currentPath = window.location.pathname;
    
    // Obtener todos los enlaces del sidebar
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    
    // Remover la clase active de todos los enlaces
    sidebarLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Si estamos en la página principal o en /dashboard
    if (currentPath === '/' || currentPath.includes('dashboard')) {
        // Encontrar y activar el enlace de Dashboard
        const dashboardLink = document.querySelector('.sidebar-link i.lni-dashboard-square-1').parentElement;
        dashboardLink.classList.add('active');
    } else {
        // Para otras páginas, buscar el enlace correspondiente
        sidebarLinks.forEach(link => {
            if (currentPath.includes(link.getAttribute('href'))) {
                link.classList.add('active');
            }
        });
    }3
}

// Ejecutar cuando se carga la página
document.addEventListener('DOMContentLoaded', setActiveLink);

// También puedes ejecutar cuando cambia la URL (si usas navegación del lado del cliente)
window.addEventListener('popstate', setActiveLink);