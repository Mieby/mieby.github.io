let coins = 100;

// Listado de posibles premios en el gacha
const items = {
    pets: [
        { name: 'Biscuit kougra', img: 'assets/Baby Kougra.png', rarity: 'común' },
        { name: 'Blue kougra', img: 'assets/Blue Kougra.png', rarity: 'raro' },
        { name: 'Baby Kougra', img: 'assets/Biscuit Kougra.png', rarity: 'legendario' },
    ],
    ccomida: [
        { name: 'Comida para Gato', img: 'assets/cat_food.png', type: 'comida' },
        { name: 'Comida para Perro', img: 'assets/dog_food.png', type: 'comida' },
        { name: 'Comida para Dragón', img: 'assets/dragon_food.png', type: 'comida' }
    ],
    libros: [
        { name: 'Libro de Entrenamiento', img: 'assets/book_training.png', type: 'libro' },
        { name: 'Guía de Mascotas', img: 'assets/book_guide.png', type: 'libro' }
    ],
    fondos: [
        { name: 'Fondo de Bosque', img: 'assets/forest_background.png', type: 'fondo' },
        { name: 'Fondo de Ciudad', img: 'assets/city_background.png', type: 'fondo' }
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

    if (randomNum < 60.5) {  // 0.5% de probabilidad de obtener un pet
        prize = items.pets[Math.floor(Math.random() * items.pets.length)];
        document.getElementById('current-pet').src = prize.img;

        // Si la mascota es nueva, añadirla a la lista de mascotas obtenidas
        if (!ownedPets.some(pet => pet.name === prize.name)) {
            ownedPets.push(prize);
            updateOwnedPets();
        }
    } else if (randomNum < 60.5) {  // 60% de probabilidad de obtener comida
        prize = items.comida[Math.floor(Math.random() * items.comida.length)];
    } else if (randomNum < 80.5) {  // 20% de probabilidad de obtener un libro
        prize = items.libros[Math.floor(Math.random() * items.libros.length)];
    } else {  // 10% de probabilidad de obtener un fondo
        prize = items.fondos[Math.floor(Math.random() * items.fondos.length)];
    }

    // Mostrar el resultado del gacha con imagen y nombre del objeto
    document.getElementById('gacha-result').innerHTML = `
        <h3>¡Has obtenido un item!</h3>
        <img src="${prize.img}" alt="${prize.name}" width="100">
        <p>${prize.name}</p>
    `;

    // Almacenar items obtenidos en el inventario
    if (prize.type !== 'pet') {
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
            ${item.name} (${item.type})
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

// Evento para tirar en el gacha
document.getElementById('pull-gacha').addEventListener('click', pullGacha);

updateCoinsDisplay();
updateInventory();
updateOwnedPets();
