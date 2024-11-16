import { items } from './Items.js';

let coins = 100;

// Inventario para items y lista de mascotas obtenidas
let inventory = [];
let ownedPets = [];

// Actualizar la cantidad de monedas
function updateCoinsDisplay() {
    document.getElementById('coins').textContent = coins;
    localStorage.setItem('coins', coins); //guarda monedas
}

// Función para determinar el tipo de item en función de las probabilidades
function pullGacha() {

    console.log('Tirando en el gacha...')
    
    if (coins < 10) {
        alert('No tienes suficientes monedas');
        return;
    }

    coins -= 10;
    updateCoinsDisplay();

    const randomNum = Math.random() * 100;  // Genera un número entre 0 y 100
    let prize;

    if (randomNum < 20.5) {  // 0.5% de probabilidad de obtener un pet
        prize = items.pets[Math.floor(Math.random() * items.pets.length)];
        document.getElementById('current-pet').src = prize.img;
        document.getElementById('current-pet-name').textContent = prize.name;

     // Si la mascota es nueva, añadirla a la lista de mascotas obtenidas
        if (!ownedPets.some(pet => pet.name === prize.name)) {
            ownedPets.push({
                ...prize,  // Incluye todas las propiedades del objeto pet
                nickname: '',  // El apodo es vacío inicialmente
                level: 1,
                booksRead: 0    
            });
            updateOwnedPets();
        }
    } else {
    prize = items.comida.concat(items.libros, items.fondos)[Math.floor(Math.random() * 
    items.comida.concat(items.libros, items.fondos).length)];
    document.getElementById('current-pet').src = prize.img; // Mostrar temporalmente el premio
    document.getElementById('current-pet-name').textContent = prize.name;    
    }


    // Almacenar items obtenidos en el inventario
    if (prize.type !== 'Pet') {
        inventory.push(prize);
        updateInventory();
    }
}
 
// Actualizar el inventario visualmente
function updateInventory() {
    const inventoryList = document.getElementById('inventory-list');
    inventoryList.innerHTML = '';

    inventory.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}" width="50">
            <p>${item.name}</p>
        `;
        inventoryList.appendChild(listItem);
    });
    
    localStorage.setItem('inventory', JSON.stringify(inventory)); // Guardar inventario
}

// UPDATE_OWNED_PET Actualizar la lista de mascotas obtenidas visualmente
function updateOwnedPets() {
    const petsList = document.getElementById('pets-list');
    petsList.innerHTML = '';

    ownedPets.forEach(pet => {
        const petDiv = document.createElement('div');
        petDiv.classList.add('pet-item');
       
        petDiv.innerHTML = `
            <img src="${pet.img}" alt="${pet.name}" width="100">
            <p>${pet.name}</p>
            <p><strong>Nivel:</strong> ${pet.level}</p>
            <p><strong>Libros Leídos:</strong> ${pet.booksRead}</p>
            <p><strong>Apodo:</strong> ${pet.nickname || 'Sin Apodo'}</p>
            <button onclick="giveNickname(${ownedPets.indexOf(pet)})">Asignar Apodo</button>
        `;
        petsList.appendChild(petDiv);
    });
    
    localStorage.setItem('ownedPets', JSON.stringify(ownedPets)); // Guardar mascotas obtenidas
}

function giveNickname(petIndex) {
    const nickname = prompt("Ingresa un apodo para tu mascota:");
    if (nickname) {
        ownedPets[petIndex].nickname = nickname;
        updateOwnedPets();
    }
}

// Generar palabra aleatoria (Pet o Item)
document.getElementById('generate-word').addEventListener('click', function() {
    // Generar número aleatorio (0 o 1)
    const randomNum = Math.random();
    const word = randomNum < 0.5 ? 'Pet' : 'Item';  // 50% de probabilidad para cada palabra

    // Mostrar la palabra generada en el elemento <span> correspondiente
    const wordElement = document.getElementById('random-word');
    wordElement.textContent = word;

    // Añadir la clase para la animación
    wordElement.classList.add('flash');

    // Eliminar la clase después de que termine la animación (1 segundo)
    setTimeout(() => {
        wordElement.classList.remove('flash');
    }, 1000);
});

// Generar número entre 1 y 67235
document.getElementById('generate-number-67235').addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 67235) + 1;
    document.getElementById('random-number-67235').textContent = randomNumber;
});

// Generar número entre 1 y 78
document.getElementById('generate-number-78').addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 78) + 1;
    document.getElementById('random-number-78').textContent = randomNumber;
});


function resetData() {
    localStorage.clear();  // Borra todos los datos de LocalStorage
    coins = 100;  // Restablecer valores iniciales
    inventory = [];
    ownedPets = [];
    updateCoinsDisplay();
    updateInventory();
    updateOwnedPets();
}


// Adjunta el evento al botón 'Borrar Datos'
document.getElementById('reset-data').addEventListener('click', resetData);

// Asegúrate de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    coins = localStorage.getItem('coins') ? parseInt(localStorage.getItem('coins')) : 100;
    inventory = localStorage.getItem('inventory') ? JSON.parse(localStorage.getItem('inventory')) : [];
    ownedPets = localStorage.getItem('ownedPets') ? JSON.parse(localStorage.getItem('ownedPets')) : [];
    
        // Actualiza la visualización de las monedas, inventario y mascotas
        updateCoinsDisplay();
        updateInventory();
        updateOwnedPets();

        // Adjunta el evento al botón 'Tirar en el Gacha'
        const gachaButton = document.getElementById('pull-gacha');
        
        // Verifica si el botón existe antes de agregar el evento
        if (gachaButton) {
            gachaButton.addEventListener('click', pullGacha);
        } else {
            console.log('El botón "pull-gacha" no se encuentra.');
        }
    });
