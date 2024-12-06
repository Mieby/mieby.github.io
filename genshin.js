const characters = [
    {
        name: "Diluc",
        level: 90,
        constellation: "C1",
        talents: { talent1: 10, talent2: 10, talent3: 10 },
        weapon: {
            img: "assets/genshin-weapons/wolf-gravestone.png",
            name: "Wolf's Gravestone",
            level: 90,
            refinement: "R5"
        }
    }
    // Agrega más personajes aquí si es necesario
];

function renderCharactersList() {
    const charactersList = document.getElementById("characters-list");
    charactersList.innerHTML = "";

    characters.forEach(character => {
        const characterCard = document.createElement("div");
        characterCard.classList.add("character-card");

        characterCard.innerHTML = `
            <h3>${character.name}</h3>
            <p>Nivel: ${character.level}</p>
            <p>Constelación: ${character.constellation}</p>
            <p>Talentos: 
                <ul>
                    <li>Talento 1: Nivel ${character.talents.talent1}</li>
                    <li>Talento 2: Nivel ${character.talents.talent2}</li>
                    <li>Talento 3: Nivel ${character.talents.talent3}</li>
                </ul>
            </p>
            <h4>Arma</h4>
            <img src="${character.weapon.img}" alt="${character.weapon.name}" class="weapon-img">
            <p>Nombre: ${character.weapon.name}</p>
            <p>Nivel: ${character.weapon.level}</p>
            <p>Rango: ${character.weapon.refinement}</p>
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
