function resetData() {
    localStorage.clear();  // Borra todos los datos de LocalStorage
}
// Adjunta el evento al botón 'Borrar Datos'
document.getElementById('reset-data').addEventListener('click', resetData);

