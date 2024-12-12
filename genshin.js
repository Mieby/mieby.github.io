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

// Elementos del DOM para el modal de click
const clickCharacterModal = document.getElementById("click-character-modal");
const deleteCharacterBtn = document.getElementById("delete-character-btn");
const closeCharacterModalBtn = document.getElementById("close-character-modal");

let currentLanguage = 'es'; // Variable para almacenar el idioma actual

function setLanguage(lang) {
    currentLanguage = lang;
    renderWeaponList();
    updateWeaponNames();
    updateWeaponCardNames()// Llama a la función de actualización
}

function updateWeaponNames() {
    const weaponNameElements = document.querySelectorAll('.weapon-item p'); // Selecciona todos los <p> dentro de .weapon-item
    weaponNameElements.forEach((element, index) => {
        // Verifica que el índice exista dentro de weaponsList
        if(weaponsList[index] && weaponsList[index].name[currentLanguage]){
           element.textContent = weaponsList[index].name[currentLanguage]; 
        }

    });

     //Actualizar el nombre en las tarjetas ya creadas:
     const weaponCardNames = document.querySelectorAll('.weapon-name');

     weaponCardNames.forEach(element => {
          const weaponEnglishName = element.textContent;
          const weaponData = weaponsList.find(weapon => weapon.name.en === weaponEnglishName);
         if(weaponData){
             element.textContent = weaponData.name[currentLanguage];
         }
     });
}

function updateWeaponCardNames(){
    const characterCards = document.querySelectorAll('.character-card');
    characterCards.forEach(card => {
        const weaponNameElement = card.querySelector('.weapon-name');
        const weaponEnglishName = weaponNameElement.textContent;

        const weaponData = weaponsList.find(weapon => weapon.name.es === weaponEnglishName);

        if(weaponData){
            weaponNameElement.textContent = weaponData.name[currentLanguage];
        }
    });

}


// Función para obtener los objetos predeterminados por personaje
function getDefaultItemsForCharacter(characterName) {
    const character = genshinCharacters.find(char => char.name === characterName);
    return character ? character.items : [];
}

document.addEventListener("DOMContentLoaded", () => {
    const savedCharacters = JSON.parse(localStorage.getItem("genshinCharacters")) || [];
    savedCharacters.forEach(character => {
        // Verificar si el personaje tiene objetos, si no asignarlos por defecto
        const characterWithDefaultItems = {
            ...character,
            items: character.items && character.items.length > 0 ? character.items : getDefaultItemsForCharacter(character.name),
            weapons: character.weapons && character.weapons.length > 0 ? character.weapons : getDefaultWeaponsForCharacter(character.name),
            artifacts: character.artifacts && character.artifacts.length > 0 ? character.artifacts : getDefaultArtifactsForCharacter(character.name),
            reloj: character.reloj || 'undefined', 
            caliz: character.caliz || 'undefined',  
            corona: character.corona || 'undefined',
            subs: character.subs || 'undefined',
        };
        addCharacterCard(characterWithDefaultItems, true);

        // Rellenar el cuadro de texto adicional si existe
        const card = Array.from(document.querySelectorAll(".character-card")).find(card => {
            const nameElement = card.querySelector("h4");
            return nameElement && nameElement.textContent === character.name;
        });

        if (card) {
            const characterBox = card.querySelector(".character-box .editable-text");
            if (characterBox) {
                characterBox.value = character.additionalInfo || ""; // Establecer el contenido del textare
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


                                                                                                                                                        //ARRASTRE

// Variable para controlar el estado de arrastre
let dragEnabled = false;

// Obtener el botón para habilitar el arrastre
const enableDragBtn = document.getElementById("enable-drag-btn");

// Función para habilitar o deshabilitar el arrastre
enableDragBtn.addEventListener("click", () => {
    dragEnabled = !dragEnabled; // Cambiar el estado
    enableDragBtn.textContent = dragEnabled ? "Deshabilitar Mover Personajes" : "Habilitar Mover Personajes";
    const characterCards = document.querySelectorAll(".character-card");
    characterCards.forEach(card => {
        if (dragEnabled) {
            enableDrag(card);
        } else {
            disableDrag(card);
        }
    });
});

// Habilitar el arrastre en una tarjeta de personaje
function enableDrag(card) {
    card.setAttribute("draggable", "true");

    card.addEventListener("dragstart", dragStart);
    card.addEventListener("dragover", dragOver);
    card.addEventListener("drop", drop);
    card.addEventListener("dragend", dragEnd); // Limpia el estado de arrastre cuando termina
}

// Deshabilitar el arrastre en una tarjeta de personaje
function disableDrag(card) {
    card.setAttribute("draggable", "false");
    card.removeEventListener("dragstart", dragStart);
    card.removeEventListener("dragover", dragOver);
    card.removeEventListener("drop", drop);
    card.removeEventListener("dragend", dragEnd);
}

// Función que se llama cuando se inicia el arrastre
function dragStart(event) {
    // Utilizamos event.target.closest() para asegurarnos de que arrastremos toda la tarjeta
    const card = event.target.closest(".character-card");
    event.dataTransfer.setData('text', card.id); // Identifica el elemento que se está arrastrando
    card.classList.add("dragging"); // Agrega la clase de arrastre
}


// Función para permitir que se pueda soltar el elemento
function dragOver(event) {
    event.preventDefault(); // Impide el comportamiento por defecto, necesario para permitir el drop
    const targetElement = event.target.closest('.character-card');
    if (targetElement && !targetElement.classList.contains("dragging")) {
        targetElement.classList.add("drag-over"); // Agrega la clase de hover cuando el cursor está sobre una tarjeta
    }
}

// Función para soltar el elemento y cambiar su posición
function drop(event) {
    event.preventDefault();
    
    const draggedElement = document.querySelector(".dragging"); // Elemento que se está arrastrando
    const targetElement = event.target.closest('.character-card'); // Tarjeta sobre la que estamos soltando

    if (draggedElement && targetElement && draggedElement !== targetElement) {
        const parent = targetElement.parentElement; // Contenedor de las tarjetas
        const targetIndex = Array.from(parent.children).indexOf(targetElement); // Índice de la tarjeta objetivo

        // Obtener las coordenadas de la tarjeta objetivo
        const targetRect = targetElement.getBoundingClientRect();

        // Cálculo de la distancia en X e Y entre el ratón y la tarjeta objetivo
        const horizontalDistance = event.clientX - targetRect.left; // Distancia horizontal
        const verticalDistance = event.clientY - targetRect.top;   // Distancia vertical

        // Determinar si el movimiento es más cercano a la mitad (en X) de la tarjeta objetivo
        const insertAtEnd = horizontalDistance > targetRect.width / 2;

        // Si el movimiento es horizontal, asegurarse de que se inserte correctamente entre las tarjetas
        if (insertAtEnd) {
            parent.insertBefore(draggedElement, parent.children[targetIndex + 1]); // Insertar después de la tarjeta objetivo
        } else {
            parent.insertBefore(draggedElement, targetElement); // Insertar antes de la tarjeta objetivo
        }
    
    // Limpia las clases de arrastre
    clearDragClasses();
        saveCharacterState();
    }
}

// Función para limpiar las clases de arrastre
function clearDragClasses() {
    const allCards = document.querySelectorAll('.character-card');
    allCards.forEach(card => {
        card.classList.remove("dragging", "drag-over");
    });
}

// Función que se llama cuando termina el arrastre
function dragEnd(event) {
    clearDragClasses(); // Limpia las clases de arrastre cuando termina
}
                                                                                                                                                    //Add character
// Agregar tarjeta de personaje
function addCharacterCard(character, isLoading = false) {
    // Si isLoading es false, se realiza la verificación de duplicados
    if (!isLoading) {
        const existingCards = document.querySelectorAll(".character-card h4");
        const isDuplicate = Array.from(existingCards).some(card => card.textContent === character.name);

        if (isDuplicate) {
            alert(`${character.name} ya ha sido agregado!`);
            return;  // Si el personaje ya está, no lo agregues.
        }
    }

    // Crear la tarjeta de personaje
    const charCard = document.createElement("div");
    charCard.classList.add("character-card");
    charCard.setAttribute('id', `card-${character.name}`);

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
<!-- Sección de Items -->
        <div class="character-items">
        ${Array.isArray(character.items) && character.items.length > 0 ? 
        character.items.map(item => `
            <div class="item">
                <img src="${item.img}" alt="${item.name}" class="item-img">
                <p>${item.name}</p>
            </div>
        `).join('') : '<p>No hay objetos disponibles</p>'}
        </div>
        
<!-- Sección de Weapons -->
        <div class="character-weapons">
        ${Array.isArray(character.weapons) && character.weapons.length > 0 ? 
        character.weapons.map(weapon => `
            <div class="item">
                <img src="${weapon.img}" alt="${weapon.name}" class="item-img">
                <p>${weapon.name}</p>
            </div>
        `).join('') : '<p>No hay armas disponibles</p>'}
        </div>

<!-- Sección de Artifacts -->
        <div class="character-artifacts">
        ${Array.isArray(character.artifacts) && character.artifacts.length > 0 ? 
        character.artifacts.map(artifact => `
            <div class="item">
                <img src="${artifact.img}" alt="${artifact.name}" class="item-img">
                <p>${artifact.name}</p>
            </div>
        `).join('') : '<p>No hay artefactos disponibles</p>'}
        </div>

        <div class="character-objects">
    <div class="reloj"><strong>Reloj:</strong> ${character.reloj}</div>
    <div class="caliz"><strong>Caliz:</strong> ${character.caliz}</div>
    <div class="corona"><strong>Corona:</strong> ${character.corona}</div>
    <div class="subs"><strong>Subs:</strong> ${character.subs}</div>
        </div>
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

    // Habilitar o deshabilitar el arrastre según el estado
    if (dragEnabled) {
        enableDrag(charCard);
    } else {
        disableDrag(charCard);
    }
}


                                                                                                                                             //open Weapon Modal    
// Mostrar el modal de armas
function openWeaponModal(weaponElement) {
    currentWeaponElement = weaponElement;
    weaponList.innerHTML = "";  // Limpiar la lista de armas
    weaponsList.forEach(weapon => {
        const weaponItem = document.createElement("div");
        weaponItem.classList.add("weapon-item");
        weaponItem.innerHTML = `
             <img src="${weapon.img}" alt="${weapon.name.es}" width="50"> <p>${weapon.name.es}</p>
        `;
        weaponItem.addEventListener("click", () => selectWeapon(weapon, weaponElement));  // Pasar el contenedor completo
        weaponList.appendChild(weaponItem);
    });
    weaponModal.classList.remove("hidden");
    updateWeaponNames();
}

// Cerrar el modal de armas
function closeWeaponModal() {
    weaponModal.classList.add("hidden");
}

// Actualizar la imagen y el nombre del arma en la tarjeta
function selectWeapon(weapon) {
    if (!currentWeaponElement) {
        console.error("No se encontró el elemento actual de arma.");
        return;
    }

    const weaponImg = currentWeaponElement.querySelector(".weapon-img");
    const weaponName = currentWeaponElement.querySelector(".weapon-name");

    // Actualizar la imagen y el nombre del arma
    weaponImg.src = weapon.img;
    weaponName.textContent = weapon.name[currentLanguage];

    closeWeaponModal(); // Cerrar el modal
    saveCharacterState(); // Guardar el estado del personaje
}
                                                                                                                                            //Filtrado de armas
let activeFilters = {
    type: null, // Tipo de arma seleccionado (Espada, Mandoble, etc.)
    stars: null // Cantidad de estrellas seleccionada (4, 5, etc.)
};

document.getElementById("sword-filter").addEventListener("click", () => applyFilter("type", "sword"));
document.getElementById("claymore-filter").addEventListener("click", () => applyFilter("type", "claymore"));
document.getElementById("catalist-filter").addEventListener("click", () => applyFilter("type", "catalist"));
document.getElementById("lance-filter").addEventListener("click", () => applyFilter("type", "lance"));
document.getElementById("bow-filter").addEventListener("click", () => applyFilter("type", "bow"));
document.getElementById("stars-filter-4").addEventListener("click", () => applyFilter("stars", 4));
document.getElementById("stars-filter-5").addEventListener("click", () => applyFilter("stars", 5));

// Aplicar filtros
function applyFilter(filterType, value) {
    // Desactivar otros filtros del mismo tipo
    if (filterType === "type") {
        // Desactivar todos los filtros de tipo
        const typeButtons = document.querySelectorAll('.weapon-filters button');
        typeButtons.forEach(button => {
            button.classList.remove('active');
        });
    } else if (filterType === "stars") {
        // Desactivar todos los filtros de estrellas
        const starsButtons = document.querySelectorAll('.weapon-filters button[id^="stars-filter"]');
        starsButtons.forEach(button => {
            button.classList.remove('active');
        });
    }

    // Activar o desactivar el filtro seleccionado
    const isActive = activeFilters[filterType] === value;
    toggleFilterButton(`${filterType}-filter-${value}`, !isActive);
    activeFilters[filterType] = isActive ? null : value;

    renderWeaponList(); // Actualizar la lista de armas
}

// Mostrar armas filtradas
function renderWeaponList() {
    weaponList.innerHTML = ""; // Limpiar la lista

    const filteredWeapons = weaponsList.filter(weapon => {
        const matchesType = activeFilters.type ? weapon.type === activeFilters.type : true;
        const matchesStars = activeFilters.stars ? weapon.stars === activeFilters.stars : true;
        return matchesType && matchesStars;
    });

    filteredWeapons.forEach(weapon => {
        const weaponItem = document.createElement("div");
        weaponItem.classList.add("weapon-item");
        weaponItem.innerHTML = `
            <img src="${weapon.img}" alt="${weapon.name.es}" width="50">
            <p>${weapon.name.es}</p>
        `;
        weaponItem.addEventListener("click", () => selectWeapon(weapon));
        weaponList.appendChild(weaponItem);
    });
    updateWeaponNames();
}

// Alternar clases de botón activo
function toggleFilterButton(buttonId, isActive) {
    const button = document.getElementById(buttonId);
    if (!button) {
        console.error(`Botón con id '${buttonId}' no encontrado.`);
        return;
    }
    if (isActive) {
        button.classList.add("active");
    } else {
        button.classList.remove("active");
    }
}


                                                                                                                                    // Guardado en Localstorage
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
        reloj: card.querySelector(".reloj").textContent.replace("Reloj: ", "").trim(),
        caliz: card.querySelector(".caliz").textContent.replace("Caliz: ", "").trim(),
        corona: card.querySelector(".corona").textContent.replace("Corona: ", "").trim(),
        subs: card.querySelector(".subs").textContent.replace("Subs: ", "").trim(),
        additionalInfo: card.querySelector(".character-box .editable-text") ? card.querySelector(".character-box .editable-text").value : "", // Guardar el contenido del textarea
        items: card.querySelector(".character-items") ? Array.from(card.querySelectorAll(".character-items .item")).map(item => ({
            name: item.querySelector("p").textContent,
            img: item.querySelector("img").src
        })) : [], // Guardar los objetos del personaje
        weapons: card.querySelector(".character-weapons") ? Array.from(card.querySelectorAll(".character-weapons .item")).map(weapon => ({
            name: weapon.querySelector("p").textContent,
            img: weapon.querySelector("img").src
        })) : [], // Guardar las armas del personaje
        artifacts: card.querySelector(".character-artifacts") ? Array.from(card.querySelectorAll(".character-artifacts .item")).map(artifact => ({
            name: artifact.querySelector("p").textContent,
            img: artifact.querySelector("img").src
        })) : [] // Guardar los artefactos del personaje
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

            // Crear la lista de objetos del personaje
            const characterItems = card.querySelector(".character-items"); // Asumiendo que los objetos ya están en el card
            const itemsHTML = characterItems ? `
                <div class="character-items">
                    ${Array.from(characterItems.children).map(item => `
                        <div class="item">
                            <img src="${item.querySelector("img").src}" alt="${item.querySelector("p").textContent}" class="item-img">
                            <p>${item.querySelector("p").textContent}</p>
                        </div>
                    `).join('')}
                </div>
            ` : '';

            // Crear la lista de armas del personaje
        const characterWeapons = card.querySelector(".character-weapons");
        const weaponsHTML = characterWeapons ? `
            <div class="character-weapons">
                ${Array.from(characterWeapons.children).map(weapon => `
                    <div class="item">
                      <img src="${weapon.querySelector("img").src}" alt="${weapon.querySelector("p").textContent}" class="item-img">
                        <p>${weapon.querySelector("p").textContent}</p>
                    </div>
                `).join('')}
            </div>
        ` : '';

        // Crear la lista de artefactos del personaje
        const characterArtifacts = card.querySelector(".character-artifacts");
        const artifactsHTML = characterArtifacts ? `
            <div class="character-artifacts">
                ${Array.from(characterArtifacts.children).map(artifact => `
                    <div class="item">
                        <img src="${artifact.querySelector("img").src}" alt="${artifact.querySelector("p").textContent}" class="item-img">
                        <p>${artifact.querySelector("p").textContent}</p>
                    </div>
                `).join('')}
            </div>
        ` : '';
            
            // textarea
            characterBox.innerHTML = `
                <h5>${card.querySelector("h4").textContent}</h5>
                <div class="character-objects">
        <div class="reloj"><strong>Reloj:</strong> ${character.reloj}</div>
        <div class="caliz"><strong>Caliz:</strong> ${character.caliz}</div>
        <div class="corona"><strong>Corona:</strong> ${character.corona}</div>
    </div>
                <textarea class="editable-text">${card.querySelector("h4").textContent || ''}</textarea>
            `;

            card.appendChild(characterBox);
        }
    });
    saveCharacterState();
}

// Character-Modal 
// Abrir el modal del personaje al hacer clic en su imagen
function openCharacterModalForEdit(characterElement) {
    const characterModal = document.getElementById("click-character-modal");
    const deleteButton = characterModal.querySelector("#delete-character-btn");

    // Guardar el personaje actual en una variable
    const characterCard = characterElement.closest(".character-card");

    // Configurar el evento del botón de eliminar
    deleteButton.onclick = () => deleteCharacter(characterCard);

    // Mostrar el modal
    characterModal.classList.remove("hidden");
}

// Función para eliminar un personaje
function deleteCharacter(characterCard) {
    if (confirm("¿Estás seguro de que deseas borrar este personaje?")) {
        const parent = characterCard.parentElement;

        // Eliminar la tarjeta del personaje
        parent.removeChild(characterCard);

        // Actualizar la base de datos (simulación)
        saveCharacterState(); // Reemplaza esta función con tu lógica de actualización real
        closeClickCharacterModal();
    }
}

// Cerrar el modal
function closeClickCharacterModal() {
    const characterModal = document.getElementById("click-character-modal");
    characterModal.classList.add("hidden");
}

// Asignar evento a las imágenes de personajes
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".character-img").forEach(img => {
        img.addEventListener("click", () => openCharacterModalForEdit(img));
        updateWeaponNames();
        renderWeaponList();
        updateWeaponCardNames();
    });

    // Configurar el botón de cerrar modal
    const closeModalButton = document.getElementById("close-character-modal");
    closeModalButton.addEventListener("click", closeClickCharacterModal);
});

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
