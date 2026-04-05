

const boton = document.querySelector("button");

boton.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Mensaje enviado (simulado)");
});

let tiempo = 0;

setInterval(function() {
    tiempo++;
    document.querySelector(".contador").textContent = "Tiempo en la página: " + tiempo + " segundos";
}, 1000);