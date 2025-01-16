//toggle sidebar
const toggler = document.querySelector(".toggler-btn");
const sidebar = document.querySelector("#sidebar");

toggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});


function setActiveLink() {
    // Tomamos la última parte del path (el archivo).
    // window.location.pathname = "/carpeta/dashboard.html" => currentPage = "dashboard.html"
    const currentPage = window.location.pathname.split('/').pop();

    // Seleccionamos todos los enlaces
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    // Limpiamos la clase 'active' en todos los enlaces
    sidebarLinks.forEach(link => link.classList.remove('active'));

    // Recorremos cada enlace y comparamos
    sidebarLinks.forEach(link => {
        // Obtenemos el 'href' y extraemos su último segmento
        const linkPage = link.getAttribute('href').split('/').pop();

        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', setActiveLink);
window.addEventListener('popstate', setActiveLink);


