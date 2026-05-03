let ubicacionPrincipal = window.scrollY; 

AOS.init();

window.addEventListener("scroll", function() {
    let desplazamientoActual = window.scrollY;
    let nav = document.querySelector("nav");
    // Selector más robusto para los enlaces
    let enlaces = document.querySelectorAll(".enlaces-header a");

    // --- FUNCIONALIDAD 1: Cambio de Color ---
    if (desplazamientoActual > 100) {
        nav.classList.add("nav2");
        enlaces.forEach(link => link.classList.add("negro"));
    } else {
        nav.classList.remove("nav2");
        enlaces.forEach(link => link.classList.remove("negro"));
    }
});

// --- MENÚ HAMBURGUESA ---
let enlacesHeader = document.querySelector(".enlaces-header");
let btnHamburger = document.querySelectorAll(".hamburger")[0];
let semaforo = true;

function cerrarMenu() {
    enlacesHeader.classList.remove("menudos");
    btnHamburger.style.color = "#000";
    semaforo = true;
}

btnHamburger.addEventListener("click", function(){
    if(semaforo){
        btnHamburger.style.color ="#fff";
        semaforo = false;
    } else {
        btnHamburger.style.color ="#000";
        semaforo = true;
    }
    enlacesHeader.classList.toggle("menudos");
});

// Cerrar al clickear un link
let links = document.querySelectorAll(".enlaces-header a");
links.forEach(link => {
    link.addEventListener("click", function() {
        if (enlacesHeader.classList.contains("menudos")) {
            cerrarMenu();
        }
    });
});