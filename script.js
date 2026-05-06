const button = document.querySelector("button");
const counter = document.querySelector(".contador");

if (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Mensaje enviado (simulado)");
    });
}

let time = 0;

setInterval(function () {
    time++;
    if (counter) {
        counter.textContent = `Tiempo en la página: ${time} segundos`;
    }
}, 1000);