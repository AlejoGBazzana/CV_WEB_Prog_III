const boton = document.querySelector("button");
const contador = document.querySelector(".contador");

if (boton) {
    boton.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Mensaje enviado (simulado)");
    });
}

let tiempo = 0;

setInterval(function () {
    tiempo++;
    if (contador) {
        contador.textContent = `Tiempo en la página: ${tiempo} segundos`;
    }
}, 1000);