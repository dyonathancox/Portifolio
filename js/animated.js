const text = "Desenvolvedor Front End";
let index = 0;

export function typeWriter() {
    const animatedText = document.getElementById("animated-text");
    if (index < text.length) {
        animatedText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(() => {
            animatedText.innerHTML = "";
            index = 0;
            typeWriter(); // Recomeça o loop
        }, 1000); // Pausando 1 segundo para recomeçar o texto
    }
}

typeWriter();
