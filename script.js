const gachaItems = [
  { type: "pet", name: "Cute Dog", image: "assets/pet1.png", probability: 0.5 },
  { type: "pet", name: "Adorable Cat", image: "assets/pet2.png", probability: 0.5 },
  { type: "food", name: "Fish Food", image: "assets/food.png", probability: 0.6 },
  { type: "book", name: "Magic Book", image: "assets/book.png", probability: 0.2 },
  { type: "background", name: "Beach Background", image: "assets/background.png", probability: 0.1 }
];

document.getElementById('pull-gacha').addEventListener('click', function() {
    const coinsElement = document.getElementById('coins');
    let coins = parseInt(coinsElement.textContent);

    // Verificar si el jugador tiene suficientes monedas
    if (coins >= 10) {
        coins -= 10; // Reducir monedas
        coinsElement.textContent = coins;

        // Realizar la tirada del gacha
        const result = pullGacha();
        updateGachaResult(result);
    } else {
        alert('¡No tienes suficientes monedas!');
    }
});

function pullGacha() {
    // Calculamos el total de probabilidad
    const totalProbability = gachaItems.reduce((sum, item) => sum + item.probability, 0);
    
    // Generar un número aleatorio para determinar qué item o mascota tocará
    const random = Math.random() * totalProbability;
    let accumulatedProbability = 0;

    // Determinar el item tocado según la probabilidad
    for (let i = 0; i < gachaItems.length; i++) {
        accumulatedProbability += gachaItems[i].probability;
        if (random < accumulatedProbability) {
            return gachaItems[i];
        }
    }
    return null; // Si no se encuentra nada, lo cual no debería pasar
}

function updateGachaResult(item) {
    const gachaImage = document.getElementById('gacha-image');
    const gachaName = document.getElementById('gacha-name');

    // Actualizar la imagen y el nombre según el item tocado
    gachaImage.src = item.image;
    gachaName.textContent = item.name;

    // Si es una mascota, añadirla a la sección "Your Pets"
    if (item.type === "pet") {
        addPetToYourPets(item);
    } else {
        addItemToInventory(item);
    }
}

function addPetToYourPets(pet) {
    const petArea = document.getElementById('your-pets');
    const petElement = document.createElement('div');
    petElement.classList.add('pet');
    
    const petImage = document.createElement('img');
    petImage.src = pet.image;
    petImage.alt = pet.name;
    petImage.width = 100;  // Ajusta el tamaño si es necesario

    const petName = document.createElement('p');
    petName.textContent = pet.name;

    petElement.appendChild(petImage);
    petElement.appendChild(petName);
    petArea.appendChild(petElement);
}

function addItemToInventory(item) {
    const inventoryArea = document.getElementById('inventory');
    const itemElement = document.createElement('div');
    itemElement.classList.add('item');
    
    const itemImage = document.createElement('img');
    itemImage.src = item.image;
    itemImage.alt = item.name;
    itemImage.width = 100;

    const itemName = document.createElement('p');
    itemName.textContent = item.name;

    itemElement.appendChild(itemImage);
    itemElement.appendChild(itemName);
    inventoryArea.appendChild(itemElement);
}
