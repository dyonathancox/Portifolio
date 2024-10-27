
// criando a função do modal de projetos
export function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

export function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.openModal = openModal;
window.closeModal = closeModal;
