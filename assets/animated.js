const text = "Desenvolvedor Front End";
let index = 0;

function typeWriter() {
    const animatedText = document.getElementById("animated-text"); // Agora usando o ID correto
    if (index < text.length) {
        animatedText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Suaviza o tempo entre os caracteres
    } else {
        setTimeout(() => {
            animatedText.innerHTML = ""; // Limpa o texto
            index = 0;
            typeWriter(); // Recomeça o loop
        }, 1000); // Pausa de 2 segundos antes de recomeçar
    }
}

typeWriter();
