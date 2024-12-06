// Lista de personajes (nombre e imagen)
const genshinCharacters = [
    { name: "Diluc", img: "assets/genshin/Diluc.png" },
    { name: "Keqing", img: "assets/genshin/Keqing.png" },
    { name: "Bennett", img: "assets/genshin/Bennett.png" },
    { name: "Xiangling", img: "assets/genshin/Xiangling.png" },
    { name: "Zhongli", img: "assets/genshin/Zhongli.png" }
];

// Elementos del DOM
const characterGrid = document.getElementById("character-grid");
const characterModal = document.getElementById("character-modal");
const characterList = document.getElementById("character-list");
const addCharacterBtn = document.getElementById("add-character-btn");
const closeModalBtn = document.getElementById("close-modal");

// Mostrar lista de personajes en el modal
function openCharacterModal() {
    characterList.innerHTML = ""; // Limpia la lista de personajes
    genshinCharacters.forEach(character => {
        const charItem = document.createElement("div");
        charItem.classList.add("character-item");
        charItem.innerHTML = `
            <img src="${character.img}" alt="${character.name}" width="100">
            <p>${character.name}</p>
        `;
        charItem.addEventListener("click", () => addCharacterCard(character));
        characterList.appendChild(charItem);
    });
    characterModal.classList.remove("hidden");
}

// Cerrar el modal
function closeCharacterModal() {
    characterModal.classList.add("hidden");
}

// Agregar tarjeta de personaje
function addCharacterCard(character) {
    const charCard = document.createElement("div");
    charCard.classList.add("character-card");
    charCard.innerHTML = `
        <div class="constellation editable" contenteditable="true">C0</div>
        <img src="${character.img}" alt="${character.name}">
        <h4>${character.name}</h4>
        <div class="level editable" contenteditable="true">Nivel: 0</div>
        <div class="talents editable" contenteditable="true">Talentos: 0, 0, 0</div>
        <div class="weapon-info">
            <img src="assets/placeholder.png" alt="Weapon">
            <div>
                <div class="weapon-name editable" contenteditable="true">Arma: Ninguna</div>
                <div class="weapon-level editable" contenteditable="true">Nivel: 0</div>
                <div class="weapon-rank editable" contenteditable="true">Rango: 0</div>
            </div>
        </div>
    `;
    characterGrid.appendChild(charCard);
    closeCharacterModal();
}

// Listeners para botones
addCharacterBtn.addEventListener("click", openCharacterModal);
closeModalBtn.addEventListener("click", closeCharacterModal);
