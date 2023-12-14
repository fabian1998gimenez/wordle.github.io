let diccionario = [
    "SONAR",
    "BAJAR",
    "ROZAR",
    "LOCOS",
    "TOMAR"
];

let intento = 6;
let palabra = getWord();
const button = document.getElementById("guess-button");
const input = document.getElementById("guess-input");

function getWord() {
    let min = 0;
    let max = diccionario.length;
    let i = Math.floor(Math.random() * (max - min)) + min;
    return diccionario[i];
}

input.addEventListener("keyup", function (e) {
    if (e.code === 'Enter') {
        button.click();
    }
});

button.addEventListener("click", intentar);

function intentar() {
    const INTENTO = leerIntento();
    console.clear();

    const row = document.createElement("div");
    const grid = document.getElementById("grid");

    

    for (let i in palabra) {
        const span = document.createElement("span");
        span.className = "letter";

        if (INTENTO[i] === palabra[i]) {
            console.log(INTENTO[i]);
            span.style.backgroundColor = "green";
            span.innerHTML = INTENTO[i];
        } else if (palabra.includes(INTENTO[i])) {
            console.log(INTENTO[i]);
            span.style.backgroundColor = "yellow";
            span.innerHTML = INTENTO[i];
        } else {
            console.log(INTENTO[i]);
            span.style.backgroundColor = "grey";
            span.innerHTML = INTENTO[i];
        }
        row.appendChild(span);
    }
    grid.appendChild(row);

    if (INTENTO === palabra) {
        terminar("GANASTE!😀");
        return;
    }
    intento--;
    if (intento === 0) {
        terminar("PERDISTE!😖");
    }
    
}

function leerIntento() {
    let intento = document.getElementById("guess-input").value;
    intento = intento.toUpperCase();
    return intento;
}

function terminar(mensaje) {
    const resultado = document.getElementById("guesses");
    resultado.innerHTML = `<h1>${mensaje}</h1>`;
    alert(mensaje);
}
