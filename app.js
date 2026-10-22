function abrirModal(tipo) {
  document.getElementById('modal-' + tipo).style.display = 'flex';
}

function cerrarModal(tipo) {
  document.getElementById('modal-' + tipo).style.display = 'none';
}