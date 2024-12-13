const translations = {
    en: {
        addCharacter: "Add Character",
        moveCharacters: "Move Characters",
        resetData: "Reset All Data",
        reloj: 'Reloj',
        caliz: 'Cáliz',
        corona: 'Corona'
    },
    es: {
        addCharacter: "Agregar Personaje",
        moveCharacters: "Mover Personajes",
        resetData: "Borrar Todos los Datos",
        reloj: 'Hourglass',
        caliz: 'Goblet',
        corona: 'Crown',
    }
};


function updateUI() {
    document.getElementById('add-character-btn').innerText = translations[currentLang].addCharacter;
    document.getElementById('enable-drag-btn').innerText = translations[currentLang].moveCharacters;
    document.getElementById('reset-data').innerText = translations[currentLang].resetData;

    
}
updateUI();
module.exports = translations;


