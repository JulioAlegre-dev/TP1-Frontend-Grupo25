// bitacora.js
AOS.init();

window.addEventListener("scroll", function() {
    const items = document.querySelectorAll('.timeline-item');
    const triggerTop = 120; // Se desvanecen al estar cerca del borde superior

    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerTop) {
            item.style.opacity = "0";
            item.style.transform = "translateX(-20px)"; // Se desplazan levemente
            item.style.filter = "blur(5px)"; // Efecto extra de desenfoque
        } else {
            item.style.opacity = "1";
            item.style.transform = "translateX(0)";
            item.style.filter = "blur(0)";
        }
    });
});