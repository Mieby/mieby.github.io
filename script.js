function resetData() {
    localStorage.clear();  // Borra todos los datos de LocalStorage
}
// Adjunta el evento al botón 'Borrar Datos'
document.getElementById('reset-data').addEventListener('click', resetData);

import translations from './translations.js';

// Cargar traducciones desde genshinCharacters.js
function getTranslatedCharacters(lang) {
    return genshinCharacters.map(character => ({
        ...character,
        reloj: translations[lang]?.characters?.[character.name]?.reloj || character.reloj,
        caliz: translations[lang]?.characters?.[character.name]?.caliz || character.caliz,
        corona: translations[lang]?.characters?.[character.name]?.corona || character.corona,
        subs: translations[lang]?.characters?.[character.name]?.subs || character.subs,
        items: character.items.map(item => ({
            name: translations[lang]?.characters?.[character.name]?.items?.find(i => i.name === item.name)?.name || item.name,
            img: item.img
        })),
        weapons: character.weapons.map(weapon => ({
            name: translations[lang]?.characters?.[character.name]?.weapons?.find(w => w.name === weapon.name)?.name || weapon.name,
            img: weapon.img
        })),
        artifacts: character.artifacts.map(artifact => ({
            name: translations[lang]?.characters?.[character.name]?.artifacts?.find(a => a.name === artifact.name)?.name || artifact.name,
            img: artifact.img
        })),
    }));
}

// Función para manejar el cambio de idioma
function changeLanguage(lang) {
    localStorage.setItem("preferredLanguage", lang);
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[lang][key];
    });

    genshinCharacters = getTranslatedCharacters(lang);
    renderCharacters();
}

// Inicializar idioma desde localStorage o por defecto
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("preferredLanguage") || (navigator.language.startsWith("es") ? "es" : "en");
    changeLanguage(savedLang);

    // Cambiar el idioma al seleccionar una opción en el <select>
    document.getElementById("language-select").addEventListener("change", (e) => {
        changeLanguage(e.target.value);
    });
});
