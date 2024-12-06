const characters = [
    {
        name: "Diluc",
        level: 90,
        constellation: "C1",
        talents: { talent1: 10, talent2: 10, talent3: 10 },
        weapon: {
            img: "assets/genshin-weapons/wolf-gravestone.png", // Imagen del arma
            name: "Wolf's Gravestone",
            level: 90,
            refinement: "R5"
        },
        img: "assets/genshin-characters/diluc.png" // Imagen del personaje
    },
    {
        name: "Kaeya",
        level: 80,
        constellation: "C2",
        talents: { talent1: 8, talent2: 8, talent3: 8 },
        weapon: {
            img: "assets/genshin-weapons/skyward-blade.png", // Imagen del arma
            name: "Skyward Blade",
            level: 80,
            refinement: "R4"
        },
        img: "assets/genshin-characters/kaeya.png" // Imagen del personaje
    }
];

function renderCharactersList() {
    const charactersList = document.getElementById("characters-list");
    charactersList.innerHTML = "";

    characters.forEach(character => {
        const characterCard = document.createElement("div");
        characterCard.classList.add("character-card");

        characterCard.innerHTML = `
            <div class="constellation">C${character.constellation.substring(1)}</div>
            <img src="${character.weapon.img}" alt="${character.name}">
            <h3>${character.name}</h3>
            <div class="details">
                <p><strong>Nivel:</strong> ${character.level}</p>
                <p><strong>Talentos:</strong> ${character.talents.talent1}, ${character.talents.talent2}, ${character.talents.talent3}</p>
                <h4>Arma</h4>
                <img src="${character.weapon.img}" alt="${character.weapon.name}" class="weapon-img">
                <p><strong>Nombre:</strong> ${character.weapon.name}</p>
                <p><strong>Nivel:</strong> ${character.weapon.level}</p>
                <p><strong>Rango:</strong> ${character.weapon.refinement}</p>
            </div>
        `;
        charactersList.appendChild(characterCard);
    });
}

function addNewCharacter() {
    characters.push({
        name: "Nuevo Personaje",
        level: 1,
        constellation: "C0",
        talents: { talent1: 1, talent2: 1, talent3: 1 },
        weapon: {
            img: "assets/genshin-weapons/default.png",
            name: "Espada Básica",
            level: 1,
            refinement: "R1"
        }
    });
    renderCharactersList();
}

// Renderizar personajes al cargar
document.addEventListener("DOMContentLoaded", function () {
    renderCharactersList();
});
