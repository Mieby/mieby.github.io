const translations = {
    en: {
        addCharacter: "Add Character",
        moveCharacters: "Move Characters",
        byeData: "Reset All Data"
    },
    es: {
        addCharacter: "Agregar Personaje",
        moveCharacters: "Mover Personajes",
        byeData: "Borrar Todos los Datos"
    }
};

let currentLang = 'es'; // Establece el idioma por defecto como español

function setLanguage(lang) {
    currentLang = lang;
    updateUI();
}


function updateUI() {
    const currentLang = 'es'; // Ejemplo de idioma actual

    document.getElementById('add-character-btn').innerText = translations[currentLang].addCharacter;
    document.getElementById('enable-drag-btn').innerText = translations[currentLang].moveCharacters;
    document.getElementById('reset-data').innerText = translations[currentLang].byeData;

    // Traducción dinámica para nombres de armas
//    weaponsList.forEach(weapon => {
//        document.getElementById(weapon.type + '-filter').title = weapon.name[currentLang];
//    });
}

// Inicializa con el idioma por defecto
updateUI();
