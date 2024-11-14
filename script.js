let coins = 100;
const pets = [
    { name: 'Gato', img: 'assets/cat.png', rarity: 'común' },
    { name: 'Perro', img: 'assets/dog.png', rarity: 'raro' },
    { name: 'Dragón', img: 'assets/dragon.png', rarity: 'legendario' },
];

const items = [
    { name: 'Comida', type: 'item' },
    { name: 'Juguete', type: 'item' },
];

let inventory = [];
let ownedPets = [];

function updateCoinsDisplay() {
    document.getElementById('coins').textContent = coins;
}

function pullGacha() {
    if (coins < 10) {
        alert('No tienes suficientes monedas');
        return;
    }

    coins -= 10;
    updateCoinsDisplay();

    const isPet = Math.random() < 0.5;
    let prize;

    if (isPet) {
        prize = pets[Math.floor(Math.random() * pets.length)];
        document.getElementById('current-pet').src = prize.img;

    // Si es una mascota nueva, la añadimos al listado de mascotas obtenidas
        if (!ownedPets.some(pet => pet.name === prize.name)) {
            ownedPets.push(prize);
            updateOwnedPets();
        }
        
    } else {
        prize = items[Math.floor(Math.random() * items.length)];
    }

    inventory.push(prize);
    updateInventory();
}

function updateInventory() {
    const inventoryList = document.getElementById('inventory-list');
    inventoryList.innerHTML = '';

    inventory.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name + (item.rarity ? ` (${item.rarity})` : '');
        inventoryList.appendChild(listItem);
    });
}


function updateOwnedPets() {
    const petsList = document.getElementById('pets-list');
    petsList.innerHTML = '';

    ownedPets.forEach(pet => {
        const petDiv = document.createElement('div');
        petDiv.classList.add('pet-item');
        petDiv.innerHTML = `
            <img src="${pet.img}" alt="${pet.name}" width="100">
            <p>${pet.name} (${pet.rarity})</p>
        `;
        petsList.appendChild(petDiv);
    });
}

document.getElementById('pull-gacha').addEventListener('click', pullGacha);

updateCoinsDisplay();
updateInventory();
updateOwnedPets();
