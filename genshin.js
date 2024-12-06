// Lista de personajes (nombre e imagen)
const genshinCharacters = [
    { name: "Diluc", img: "assets/genshin/Diluc.png" },
    { name: "Keqing", img: "assets/genshin/Keqing.png" },
    { name: "Bennett", img: "assets/genshin/Bennett.png" },
    { name: "Xiangling", img: "assets/genshin/Xiangling.png" },
    { name: "Zhongli", img: "assets/genshin/Zhongli.png" }
];

const weaponsList = [
    { name: "Espada de Favonius", img: "assets/weapons/favonius_sword.png" },
    { name: "Claymore de Serpiente", img: "assets/weapons/serpent_claymore.png" },
    { name: "Arco de Sacrificio", img: "assets/weapons/sacrificial_bow.png" },
    { name: "Lanza de Dragonspine", img: "assets/weapons/dragonspine_lance.png" },
    { name: "Espada del Lobo", img: "assets/weapons/wolf_sword.png" }
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

    // HTML para la tarjeta de personaje
    charCard.innerHTML = `
        <div class="constellation editable" contenteditable="true">C0</div>
        <img src="${character.img}" alt="${character.name}">
        <h4>${character.name}</h4>
        <div class="level editable" contenteditable="true">Nivel: 0</div>
        <div class="talents">
            <div class="talent editable" contenteditable="true">0</div>
            <div class="talent editable" contenteditable="true">0</div>
            <div class="talent editable" contenteditable="true">0</div>
        </div>
        <div class="weapon-info">
            <img src="assets/Baby kougra.png" alt="Weapon" class="weapon-img" />
            <div>
                <div class="weapon-name editable" contenteditable="true">Arma: Ninguna</div>
                <div class="weapon-level editable" contenteditable="true">Nivel: 0</div>
                <div class="weapon-rank editable" contenteditable="true">Rango: 0</div>
            </div>
        </div>
    `;

    // Agregar la tarjeta al contenedor de personajes
    characterGrid.appendChild(charCard);
    closeCharacterModal();

    // Agregar el evento para abrir el modal de armas
    const weaponElement = charCard.querySelector(".weapon-info");  // Obtener el contenedor del arma completo
    const weaponImg = weaponElement.querySelector(".weapon-img");  // Obtener la imagen del arma
    weaponImg.addEventListener("click", () => openWeaponModal(weaponElement));  // Pasa el contenedor completo
}

// Elementos del DOM para el modal de armas
const weaponModal = document.getElementById("weapon-modal");
const weaponList = document.getElementById("weapon-list");
const closeWeaponModalBtn = document.getElementById("close-weapon-modal");

// Mostrar el modal de armas
function openWeaponModal(weaponElement) {
    weaponList.innerHTML = "";  // Limpiar la lista de armas
    weaponsList.forEach(weapon => {
        const weaponItem = document.createElement("div");
        weaponItem.classList.add("weapon-item");
        weaponItem.innerHTML = `
            <img src="${weapon.img}" alt="${weapon.name}" width="50">
            <p>${weapon.name}</p>
        `;
        weaponItem.addEventListener("click", () => selectWeapon(weapon, weaponElement));  // Pasar el contenedor completo
        weaponList.appendChild(weaponItem);
    });
    weaponModal.classList.remove("hidden");
}

// Cerrar el modal de armas
function closeWeaponModal() {
    weaponModal.classList.add("hidden");
}

// Actualizar la imagen y el nombre del arma en la tarjeta
function selectWeapon(weapon, weaponElement) {
    const weaponImg = weaponElement.querySelector(".weapon-img");
    const weaponName = weaponElement.querySelector(".weapon-name");

    // Actualizar la imagen y el nombre del arma
    weaponImg.src = weapon.img;
    weaponName.textContent = `Arma: ${weapon.name}`;
    closeWeaponModal();  // Cerrar el modal
}

// Listeners para botones
addCharacterBtn.addEventListener("click", openCharacterModal);
closeModalBtn.addEventListener("click", closeCharacterModal);
closeWeaponModalBtn.addEventListener("click", closeWeaponModal);
