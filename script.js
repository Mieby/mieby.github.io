import { items } from './items.js';

let coins = 100;

// Inventario para items y lista de mascotas obtenidas
let inventory = [];
let ownedPets = [];

// Actualizar la cantidad de monedas
function updateCoinsDisplay() {
    document.getElementById('coins').textContent = coins;
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
}

// Actualizar la lista de mascotas obtenidas visualmente
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
}

function giveNickname(petIndex) {
    const nickname = prompt("Ingresa un apodo para tu mascota:");
    if (nickname) {
        ownedPets[petIndex].nickname = nickname;
        updateOwnedPets();
    }
}

// Asegúrate de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    console.log('Test de log');
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

