// Lista de personajes disponibles
const characters = [
    { name: "Diluc", img: "assets/genshin/diluc.png" },
    { name: "Jean", img: "assets/genshin/jean.png" },
    { name: "Zhongli", img: "assets/genshin/zhongli.png" },
    // Agrega más personajes aquí...
];

const characterList = document.getElementById("character-list");
const characterModal = document.getElementById("character-modal");
const characterOptions = document.getElementById("character-options");

// Mostrar el modal para seleccionar personajes
document.getElementById("add-character-btn").addEventListener("click", () => {
    characterModal.style.display = "block";
    renderCharacterOptions();
});

// Cerrar el modal
document.getElementById("close-modal").addEventListener("click", () => {
    characterModal.style.display = "none";
});

// Renderizar las opciones de personajes
function renderCharacterOptions() {
    characterOptions.innerHTML = "";
    characters.forEach(character => {
        const charCard = document.createElement("div");
        charCard.classList.add("character-option");
        charCard.innerHTML = `
            <img src="${character.img}" alt="${character.name}">
            <p>${character.name}</p>
        `;
        charCard.addEventListener("click", () => addCharacter(character));
        characterOptions.appendChild(charCard);
    });
}

// Agregar personaje seleccionado a la lista
function addCharacter(character) {
    const charCard = document.createElement("div");
    charCard.classList.add("character-card");

    charCard.innerHTML = `
        <div class="constellation">C0</div>
        <img src="${character.img}" alt="${character.name}">
        <h4>${character.name}</h4>
        <input type="number" class="level-input" value="1" min="1" max="90">
        <div class="talents">
            <input type="number" value="1" min="1" max="15">
            <input type="number" value="1" min="1" max="15">
            <input type="number" value="1" min="1" max="15">
        </div>
        <div class="weapon">
            <img src="assets/genshin/weapon.png" alt="Weapon">
            <div>
                <input type="text" placeholder="Arma" value="Sin arma">
                <input type="number" value="1" min="1" max="90">
                <input type="number" value="1" min="1" max="5">
            </div>
        </div>
    `;

    characterList.appendChild(charCard);
    characterModal.style.display = "none";
}
