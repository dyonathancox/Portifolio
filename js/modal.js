// Criando a função do modal de projetos
export function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";

    // evento para fechar o modal com o ESC
    document.addEventListener("keydown", handleEscKey);
}

export function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";

    document.removeEventListener("keydown", handleEscKey);
}

//verificação se ESC foi pressionada
function handleEscKey(event) {
    if (event.key === "Escape") {
        const modal = document.querySelector(".modal[style*='display: block']");
        if (modal) {
            closeModal(modal.id);
        }
    }
}

window.openModal = openModal;
window.closeModal = closeModal;
