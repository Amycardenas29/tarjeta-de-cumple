document.addEventListener("DOMContentLoaded", () => {
    const parrafos = document.querySelectorAll('.carta p');
    let index = 0;

    function mostrarParrafo() {
        if (index < parrafos.length) {
            parrafos[index].style.opacity = 1; // Mostrar el párrafo con animación
            index++;
        } else {
            clearInterval(intervalo);
        }
    }

    const intervalo = setInterval(mostrarParrafo, 1000); // Muestra un párrafo cada segundo
});

// Crear corazones flotantes
setInterval(() => {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerText = "❤️";

    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = 2 + Math.random() * 3 + "s";

    document.querySelector(".corazones").appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 5000);
}, 500);
