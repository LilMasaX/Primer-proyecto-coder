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


// function addCourse() {
//     const courseName = document.getElementById('course-name').value;
//     const coursePrice = document.getElementById('course-price').value;
//     const examPrice = document.getElementById('exam-price').value;

//     if (courseName && coursePrice && examPrice) {
//         const courseList = document.getElementById('course-list');
//         const courseItem = document.createElement('div');
//         courseItem.className = 'info-card';
//         courseItem.innerHTML = `
//             <h2>${courseName}</h2>
//             <p>Precio del Curso: $${coursePrice}</p>
//             <p>Precio del Examen: $${examPrice}</p>
//         `;
//         courseList.appendChild(courseItem);

//         // Clear the form
//         document.getElementById('course-form').reset();
//     } else {
//         alert('Por favor, completa todos los campos.');
//     }
// }