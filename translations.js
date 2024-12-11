const translations = {
    en: {
        addCharacter: "Add Character",
        moveCharacters: "Move Characters",
        resetData: "Reset All Data",
        weapons: {
            "Anemona Gemela": "Twin-Necklace",
            "Espada del peñasco oscuro": "Dark Rock Sword",
            "Espada de Favonius": "Favonius Sword"
            // Agrega más armas según sea necesario
        }
    },
    es: {
        addCharacter: "Agregar Personaje",
        moveCharacters: "Mover Personajes",
        resetData: "Borrar Todos los Datos",
        weapons: {
            "Anemona Gemela": "Anemona Gemela",
            "Espada del peñasco oscuro": "Espada del peñasco oscuro",
            "Espada de Favonius": "Espada de Favonius"
            // Agrega más armas según sea necesario
        }
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
    document.querySelectorAll(".weapon-item p").forEach(item => {
        item.textContent = translations[currentLang].weapons[item.textContent] || item.textContent;
    });
    
}



// Inicializa con el idioma por defecto
updateUI();
