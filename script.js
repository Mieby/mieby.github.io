let coins = 100;

// Listado de posibles premios en el gacha
const items = {
    pets: [
        { name: 'Biscuit kougra', img: 'assets/Biscuit Kougra.png', type: 'Pet', rarity: 'común' },
        { name: 'Blue kougra', img: 'assets/Blue Kougra.png', type: 'Pet', rarity: 'raro' },
        { name: 'Baby Kougra', img: 'assets/Baby kougra.png', type: 'Pet', rarity: 'legendario' },
    ],
    comida: [
        { name: 'Jugo de Pera', img: 'assets/Jugo de pera.gif', type: 'comida'  },
        { name: 'Comida para Gato', img: 'assets/Biscuit Kougra.png', type: 'comida' },
        { name: 'Comida para Gato', img: 'assets/Biscuit Kougra.png', type: 'comida' }
    ],
    libros: [
        { name: 'Libro de Entrenamiento' , img: 'assets/Jugo de pera.gif', type: 'libro' },
        { name: 'Guía de Mascotas', img: 'assets/Jugo de pera.gif', type: 'libro' }
    ],
    fondos: [
        { name: 'Fondo de Bosque',  img: 'assets/Jugo de pera.gif', type: 'fondo' },
        { name: 'Fondo de Ciudad', img: 'assets/Jugo de pera.gif', type: 'fondo' }
    ]
};

// Inventario para items y lista de mascotas obtenidas
let inventory = [];
let ownedPets = [];

// Actualizar la cantidad de monedas
function updateCoinsDisplay() {
    document.getElementById('coins').textContent = coins;
}

// Función para determinar el tipo de item en función de las probabilidades
function pullGacha() {
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

     // Si la mascota es nueva, añadirla a la lista de mascotas obtenidas
        if (!ownedPets.some(pet => pet.name === prize.name)) {
            ownedPets.push(prize);
            updateOwnedPets();
        }
    }else {  // Para comida, libros y fondos
        const allItems = items.comida.concat(items.libros, items.fondos);
        prize = allItems[Math.floor(Math.random() * allItems.length)];

    // Almacenar items obtenidos en el inventario
    if (prize.type !== 'Pet') {
        inventory.push(prize);
        updateInventory();
    } else {
        document.getElementById('current-pet').src = prize.img;  // Mostrar solo imágenes de mascotas
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
            <p>${item.name} (${item.type})</p>
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
            <p>${pet.name} (${pet.rarity})</p>
        `;
        petsList.appendChild(petDiv);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Tu código JavaScript aquí
    updateCoinsDisplay();
    updateInventory();
    updateOwnedPets();

    document.getElementById('pull-gacha').addEventListener('click', pullGacha);
});;
