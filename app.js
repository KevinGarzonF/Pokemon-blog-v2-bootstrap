function abrirModal(tipo) {
    const modalElement = document.getElementById('modal-' + tipo);
    if (!modalElement) {
        console.warn(`No existe el modal para el tipo: ${tipo}`);
        return;
    }
    const modal = bootstrap.Modal.getOrCreateInstance(modalElement);
    modal.show();
}

function cerrarModal(tipo) {
    const modalElement = document.getElementById('modal-' + tipo);
    if (!modalElement) return;
    const modal = bootstrap.Modal.getInstance(modalElement);
    if (modal) modal.hide();
}