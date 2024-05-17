const iniciar = document.getElementById("iniciar");
const btn = document.getElementById("btn");
const main = document.getElementById("main");
const random = document.getElementById("random");
const userInput = document.getElementById("userInput");
const check = document.getElementById("verifica");
const next = document.getElementById("next");
const message = document.getElementById("message");
const palavras = "carro arvore porta areia praia predio nuvem tornado".split(" ");
let palavraAtual = "";
let palavraEscondida = [];
let letrasUsadas = [];

main.style.display = "none";

function inicia() {
    main.style.display = "flex";
    palavraAtual = palavras[Math.floor(Math.random() * palavras.length)].toLowerCase();
    palavraEscondida = [];
    for (let i = 0; i < palavraAtual.length; i++) {
        palavraEscondida.push("_");
    }
    letrasUsadas = [];
    message.textContent = "";
    random.textContent = palavraEscondida.join(" ");
    next.style.display = "none";
    userInput.style.display = "block";
    check.style.display = "block";
}

btn.addEventListener("click", () => {
    iniciar.style.display = "none";
    inicia();
});

check.addEventListener("click", () => {
    const letra = userInput.value.toLowerCase();
    if (letra && !letrasUsadas.includes(letra)) {
        letrasUsadas.push(letra);
        let letraEncontrada = false;

        for (let i = 0; i < palavraAtual.length; i++) {
            if (palavraAtual[i] === letra) {
                palavraEscondida[i] = letra;
                letraEncontrada = true;
            }
        }

        if (letraEncontrada) {
            random.textContent = palavraEscondida.join(" ");
            message.textContent = "";
        } else {
            message.textContent = "Letra não encontrada :(";
        }

        if (!palavraEscondida.includes("_")) {
            message.textContent = "Parabéns você acertou :)";
            next.style.display = "block";
            userInput.style.display = "none";
            check.style.display = "none";
        }
    } else {
        message.textContent = "Letra já foi usada, revise e tente novamente :(";
    }

    userInput.value = "";
});

next.addEventListener("click", () => {
    inicia();
});