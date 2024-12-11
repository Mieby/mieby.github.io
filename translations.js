const translations = {
    en: {
        addCharacter: "Add Character",
        moveCharacters: "Move Characters",
        resetData: "Reset All Data"
    },
    es: {
        addCharacter: "Agregar Personaje",
        moveCharacters: "Mover Personajes",
        resetData: "Borrar Todos los Datos"
    }
};

let currentLang = 'es'; // Establece el idioma por defecto como español

function setLanguage(lang) {
    currentLang = lang;
    updateUI();
}


function updateUI() {
    document.getElementById('add-character-btn').innerText = translations[currentLang].addCharacter;
    document.getElementById('enable-drag-btn').innerText = translations[currentLang].moveCharacters;
    document.getElementById('reset-data').innerText = translations[currentLang].resetData;
    // Agrega más elementos según sea necesario
}

// Inicializa con el idioma por defecto
updateUI();
