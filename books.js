// Datos iniciales
const people = [
    { 
        name: "Pogoel", 
        img: "assets/petbooks/Pogoel.png", 
        account: "Kougritaa", 
        books: ["Wishing On A Star", "The Great Betrayal", "Tale of Lag", "Inside the Mind of a Lupe", "Tome of Selket", "The Big Blue Blumaroo Book", "The Cowardly Tuskaninny", "Kiko Care", 
               "Brainy Blumaroos", "Korbat Halloween", "Mystery Of Halloween", "Neopian Times Issue 3", "Cybunny Diary", "Classic Moehog Tales", "Kiko Pop-Up Book", "Dress For Success", "Turmac Snacks",
               "Day In The Life Of King Roo", "Babaa Care",  "The Luckiest Babaa", "My First Babaa", "Gruslen Pop-Up Book", "Legends of Maraqua", "Maraquan Bed Time Stories", "Mystery Of The Kougra Paw",
               "Yurble Tales", "Mystery Island Tour Guide", "Quiggle Classics", "A Kau Summer", "Faellie Tales", "Fantastic Faellies", "Faellie Handbook", "Grooming Your Faellie", "Peopatras Petpets",
               "Cartography For Beginners", "Keeping The Peace", "Brightvale Maps", "King Hagan", "Brightvale Castle", "More Than Carrot Cake", "Toast Treats", "Spooky Korbat Stories", "The Life of a Double Crosser",
               "Fishing For Zafaras", "Meepit vs Feepit Game Guide", "Waterlogged Book", "The Secret of Treasure Island", "Geraptiku Recipes", "Spooky Skeith Adventures", "Skeith Inspired Treasure Maps", "Underwater Tour",
               "Scroll of Serpents", "Ogrin Survivor", "Lenny Crosswords", "Haunted Mynci", "Island Cybunny Guide", "Pirate Small Talk", "Brightvale Guide to Stained Glass Windows", "Maraqua Colouring Book",
               "Haunted Woods Reader", "Mystery Island Monthly", "Gallion Care", "Gallion Colouring Book", "Gallant Gallions Comic", "The Gorgeous Gallion", "Nimmo - Now and Zen", "The Plushie Coffee Table Book",
               "Book of Origami Paper", "Counting Babaas", "Bubble Sculptures", "Petpet Park", "Faerie Sticker Book", "A History of the Lost Desert", "Lost Desert Architecture", "Faerie Stencils Collection", 
               "Cooling the Fires", "We Like it Hot", "Faerie Activities Book", "Realm of the Water Faeries", "The Blue Tiki Sands of Time", "Deserted Desert Scroll", "Hurt Orange Kiko Book", "A Guide to Find the Right Cure",
               "Breathe", "Maraquan Faerie Tales", "Birthday Best", "Tree Climbing for Beginners", "Moon Dust Scroll"] 
    },
    { 
        name: "Sthie", 
        img: "assets/petbooks/Sthie.png", 
        account: "Kougritaa", 
        books: ["Light Speed Made Easy", "Speak Tyrannian", "Legends of Maraqua", "Maraquan Faerie Tales", "Waterlogged Book", "Skeith Inspired Treasure Maps",
               "Underwater Tour", "Zombie Handbook", "A History of the Lost Desert", "Slorg Care", "Shenkuu Lunar Festival Commemorative Guide", "Realm of the Water Faeries",
                "Book of Strange and Incurable Diseases", "Maraquan Bed Time Stories", "Nimmo - Now and Zen" ] 
    },
    { 
        name: "spieria", 
        img: "assets/petbooks/Spieria.png", 
        account: "Kougritaa", 
        books: ["My First Babaa", "Speak Tyrannian", "The Littlest Mazzew", "Gruslen Pop-Up Book", "Legends of Maraqua", "Faellie Tales", "Grooming Your Faellie", 
               "Meepit vs Feepit Game Guide", "Skeith Inspired Treasure Maps", "Gallion Care"] 
    },
    { 
        name: "Amantias", 
        img: "assets/petbooks/Amantias.png", 
        account: "Kougritaa", 
        books: ["Legends of Maraqua", "Skeith Inspired Treasure Maps" ] 
    },
    { 
        name: "Pumae", 
        img: "assets/petbooks/Pumae.png", 
        account: "Riyase", 
        books: ["Kreludan Recipes", "My First Babaa", "Tuskaninny Treasure", "Peopatras Petpets", "The Grundo Pirate", "Meepit vs Feepit Game Guide", "Waterlogged Book", "The Secret of Treasure Island",
               "Skeith Inspired Treasure Maps", "Lenny Crosswords", "Pirate Small Talk", "Gallion Colouring Book", "Zombie Handbook", "Soggy Scroll", "Elusive Shenkuu Guide", "A History of the Lost Desert", "Lost Desert Architecture",
               "Ancient Scarab Scroll"] 
    },
    { 
        name: "Bizkuti", 
        img: "assets/petbooks/Bizkuti.png", 
        account: "Riyase", 
        books: ["Tome of Selket", "Adventures In Space", "Gruslen Pop-Up Book", "Maraquan Bed Time Stories", "Maraquan Faerie Tales", "Yurble Tales", "Mystery Island Tour Guide", "Waterlogged Book",
               "The Old Mynci and the Sea", "Halloween Ruki Tales", "Skeith Inspired Treasure Maps", "Ogrin Survivor", "Haunted Mynci", "Island Cybunny Guide", "Tuskaninny Chef Recipes", "A History of the Lost Desert",
               "Lost Desert Architecture", "Guide to Faerie Weapons"] 
    },
    { 
        name: "Shyeth", 
        img: "assets/petbooks/Shyeth.png", 
        account: "Riyase", 
        books: ["Mystery Of The Kougra Paw", "Pirate Small Talk", "A History of the Lost Desert" ] 
    },
    { 
        name: "Wentzylvania", 
        img: "assets/petbooks/Wentzylvania.png", 
        account: "Riyase", 
        books: [] 
    },
    { 
        name: "Twpo", 
        img: "assets/petbooks/Twpo.png", 
        account: "Riyase", 
        books: ["The Secret of Treasure Island", "Pirate Small Talk" ] 
    },
    { 
        name: "Boyale", 
        img: "assets/petbooks/Boyale.png", 
        account: "Codoco", 
        books: ["Tale of Lag", "Speak Tyrannian", "Mystery Of The Kougra Paw", "The Secret of Treasure Island", "Dark Eyes the Aisha", "Plushie Adventures", "The Hidden Temple", "Island Cybunny Guide",
               "Defenders Stand for Justice", "Flight of the Fire Faerie", "Babaas Baba", "Bruce Blues"] 
    },
    { 
        name: "Nivesta", 
        img: "assets/petbooks/Nivesta.png", 
        account: "Codoco", 
        books: ["Speak Tyrannian", "Mynci Horror", "Mazzew Grooming", "Mystery Of The Kougra Paw", "Wings of Steel", "My Life As A Sponge", "The Secret of Treasure Island", "Snot My Fault", "Dark Eyes the Aisha",
               "Plushie Adventures", "Glurp", "The Hidden Temple", "Defenders Stand for Justice", "Webs of Death", "The History of the Origami Warf", "Fun Tree Facts", "Secrets of the Chocofactory",
               "The Month of Eating", "Clash of Moehogs", "Bruce Blues"] 
    },
    { 
        name: "Lojza", 
        img: "assets/petbooks/Lojza.png", 
        account: "Codoco", 
        books: ["Victory Is Ours", "Speak Tyrannian", "Snot My Fault", "The Gorgeous Gallion", "Bruce Blues" ] 
    }
];

// Renderizar la lista de personas
function renderPeopleList() {
    const peopleList = document.getElementById("people-list");
    peopleList.innerHTML = "";

    people.forEach(person => {
        const personItem = document.createElement("div");
        personItem.classList.add("person-item");

        personItem.innerHTML = `
            <img src="${person.img}" alt="${person.name}">
            <h4>${person.name}</h4>
            <p>${person.account}</p>
            <p>Libros: ${person.books.length}</p>
        `;
        peopleList.appendChild(personItem);
    });
}

// Función para ordenar las personas según la opción seleccionada
function sortPeople() {
    const sortOption = document.getElementById("sort-options").value;

    if (sortOption === "books") {
        // Ordenar por libros leídos de mayor a menor
        people.sort((a, b) => b.books.length - a.books.length);
    } else {
        // Restaurar el orden por defecto (por nombre)
        people.sort((a, b) => a.name.localeCompare(b.name));
    }

    renderPeopleList(); // Volver a renderizar la lista con el nuevo orden
}

// Buscar personas que no tienen un libro específico
function searchBook() {
    const searchInput = document.getElementById("book-search").value.trim();
    const resultsList = document.getElementById("results-list");
    resultsList.innerHTML = "";

    if (!searchInput) {
        resultsList.innerHTML = "<li>Por favor, ingresa un nombre de libro.</li>";
        return;
    }

    const results = people.filter(person => !person.books.includes(searchInput));

    if (results.length === 0) {
        resultsList.innerHTML = "<li>Todas las personas tienen este libro.</li>";
    } else {
        results.forEach(person => {
            const resultItem = document.createElement("li");
            resultItem.textContent = `${person.name} no tiene el libro "${searchInput}"`;
            resultsList.appendChild(resultItem);
        });
    }
}

// Inicializar la pestaña al cargar
document.addEventListener("DOMContentLoaded", function () {
    renderPeopleList();
});
