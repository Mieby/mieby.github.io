// Lista de personajes (nombre e imagen)
const genshinCharacters = [
    { name: "Diluc", element: "Pyro", stars: 5, weaponType: "claymore", img: "https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/diluc/image.png?strip=all&quality=75&w=256"},
    { name: "Lynette", element: "Anemo", stars: 4, weaponType: "sword", img: "https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/lynette/image.png?strip=all&quality=75&w=256"},
    { name: "Faruzán", element: "Anemo", stars: 4, weaponType: "catalyst", img: "https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/faruzan/image.png?strip=all&quality=75&w=256"},
    { name: "Heizou", element: "Anemo", stars: 4, weaponType: "catalyst", img: "https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/shikanoin_heizou/image.png?strip=all&quality=75&w=256" },
    { name: "Sacarosa", element: "Anemo", stars: 4, weaponType: "catalyst", img: "https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/sucrose/image.png?strip=all&quality=75&w=256" }
];

const weaponsList = [
    { name: "Espada de Favonius", weaponType: "sword", stars: 4, img: "assets/weapons/favonius_sword.png"},
    { name: "Espada de Favonius", weaponType: "sword", stars: 4, img: "assets/weapons/favonius_sword.png"},
    { name: "Espada de Favonius", weaponType: "sword", stars: 4, img: "assets/weapons/favonius_sword.png" },
    { name: "Espada de Favonius", weaponType: "sword", stars: 4, img: "assets/weapons/favonius_sword.png" },
    { name: "Espada de Favonius", weaponType: "sword", stars: 4, img: "assets/weapons/favonius_sword.png"}
];

// Elementos del DOM
const characterGrid = document.getElementById("character-grid");
const characterModal = document.getElementById("character-modal");
const characterList = document.getElementById("character-list");
const addCharacterBtn = document.getElementById("add-character-btn");
const closeModalBtn = document.getElementById("close-modal");
const toggleInfoBtn = document.getElementById("toggle-info-btn");

// Elementos del DOM para el modal de armas
const weaponModal = document.getElementById("weapon-modal");
const weaponList = document.getElementById("weapon-list");
const closeWeaponModalBtn = document.getElementById("close-weapon-modal");

document.addEventListener("DOMContentLoaded", () => {
    const savedCharacters = JSON.parse(localStorage.getItem("genshinCharacters")) || [];
    savedCharacters.forEach(character => {
        addCharacterCard(character, true);

        // Verificar si hay un cuadro de texto adicional que se debe rellenar
        const card = Array.from(document.querySelectorAll(".character-card")).find(card => {
            const nameElement = card.querySelector("h4");
            return nameElement && nameElement.textContent === character.name;
        });

        if (card) {
            const characterBox = card.querySelector(".character-box .editable-text");
            if (characterBox) {
                characterBox.value = character.additionalInfo || ""; // Establecer el contenido del textarea
            }
        }
    });
});

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
function addCharacterCard(character, isLoading = false) {
    // Si isLoading es false, se realiza la verificación de duplicados
    if (!isLoading) {
        const existingCards = document.querySelectorAll(".character-card h4");
        const isDuplicate = Array.from(existingCards).some(card => card.textContent === character.name);

        if (isDuplicate) {
            alert(`${character.name} ya ha sido agregado.`);
            return;  // Si el personaje ya está, no lo agregues.
        }
    }

    // Asignar fondo dinámico según las estrellas
    if (character.stars === 5) {
        imageContainer.style.backgroundImage = "url('assets/Baby kougra.png')"; // Fondo para 5 estrellas
    } else if (character.stars === 4) {
        imageContainer.style.backgroundImage = "url('assets/Baby kougra.png')"; // Fondo para 4 estrellas
    }

    // Crear la tarjeta de personaje
    const charCard = document.createElement("div");
    charCard.classList.add("character-card");

    // HTML para la tarjeta de personaje
    charCard.innerHTML = `
        <div class="constellation editable" contenteditable="true">${character.constellation || 'C0'}</div>
        <img src="${character.img}" alt="${character.name}" class="character-img">
        <h4>${character.name}</h4>
        <div class="level editable" contenteditable="true">${character.level || '20/40'}</div>
        <div class="talents">
            <div class="talent editable" contenteditable="true">${character.talent1 || '0'}</div>
            <div class="talent editable" contenteditable="true">${character.talent2 || '0'}</div>
            <div class="talent editable" contenteditable="true">${character.talent3 || '0'}</div>
        </div>
        <div class="weapon-info">
            <img src="${character.weaponImg || 'assets/Baby kougra.png'}" alt="Weapon" class="weapon-img" />
            <div>
                <div class="weapon-name editable" contenteditable="true">${character.weaponName || 'Ninguna'}</div>
                <div class="weapon-level editable" contenteditable="true">${character.weaponLevel || '20/40'}</div>
                <div class="weapon-rank editable" contenteditable="true">${character.weaponRank || 'R1'}</div>
           </div>
        </div>
        <div class="character-box hidden">
            <h5>${character.name}</h5>
            <textarea class="editable-text">${character.additionalInfo || ''}</textarea>
        </div>
    `;

    // Agregar la tarjeta al contenedor de personajes
    characterGrid.appendChild(charCard);

    // Agregar el evento para abrir el modal de armas
    const weaponElement = charCard.querySelector(".weapon-info");
    const weaponImg = weaponElement.querySelector(".weapon-img");
    weaponImg.addEventListener("click", () => openWeaponModal(weaponElement));


    // Si no estamos cargando, cierra el modal y guarda el estado
    if (!isLoading) {
        closeCharacterModal();
        saveCharacterState();
    }
}
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
    weaponName.textContent = `${weapon.name}`;
    closeWeaponModal();  // Cerrar el modal
    saveCharacterState();
}
// Guardar el estado de los personajes en localStorage
function saveCharacterState() {
    const characters = Array.from(document.querySelectorAll(".character-card")).map(card => ({
        name: card.querySelector("h4").textContent,
        img: card.querySelector("img").src,
        constellation: card.querySelector(".constellation").textContent,
        level: card.querySelector(".level").textContent,
        talent1: card.querySelector(".talents .talent:nth-child(1)").textContent,
        talent2: card.querySelector(".talents .talent:nth-child(2)").textContent,
        talent3: card.querySelector(".talents .talent:nth-child(3)").textContent,
        weaponImg: card.querySelector(".weapon-img").src,
        weaponName: card.querySelector(".weapon-name").textContent,
        weaponLevel: card.querySelector(".weapon-level").textContent,
        weaponRank: card.querySelector(".weapon-rank").textContent,
        additionalInfo: card.querySelector(".character-box .editable-text") ? card.querySelector(".character-box .editable-text").value : "" // Guardar el contenido del textarea
    }));
    console.log("Saving to localStorage:", characters); // Debug
    localStorage.setItem("genshinCharacters", JSON.stringify(characters));
}

// Info +
function toggleCharacterInfo() {
    const characterCards = document.querySelectorAll(".character-card");
    characterCards.forEach(card => {
        let existingBox = card.querySelector(".character-box");
        if (existingBox) {
            // Alternar la visibilidad del cuadro de información
            existingBox.classList.toggle("hidden");  // Alternar la clase "hidden"
        } else {
            // Si no existe el cuadro de información, lo creamos
            const characterBox = document.createElement("div");
            characterBox.classList.add("character-box", "hidden");  // Inicialmente oculto

            characterBox.innerHTML = `
                <h5>${card.querySelector("h4").textContent}</h5>
                <textarea class="editable-text">${card.querySelector("h4").textContent || ''}</textarea>
            `;

            card.appendChild(characterBox);
        }
    });
    saveCharacterState();
}

// Listeners para botones
addCharacterBtn.addEventListener("click", openCharacterModal);
closeModalBtn.addEventListener("click", closeCharacterModal);
closeWeaponModalBtn.addEventListener("click", closeWeaponModal);
toggleInfoBtn.addEventListener("click", toggleCharacterInfo);

document.addEventListener("input", event => {
    const editableElement = event.target.closest(".editable");
    const textareaElement = event.target.closest("textarea");

    if (editableElement || textareaElement) {
        console.log("Content changed:", event.target.value || event.target.textContent); // Debug
        saveCharacterState();
    }
});
