document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    // Mostrar/Ocultar el menú al hacer clic en el botón
    menuToggle.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que el clic en el botón cierre el menú
        menu.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target)) { // Verifica si el clic fue fuera del menú
            menu.classList.remove('active');
        }
    });
});