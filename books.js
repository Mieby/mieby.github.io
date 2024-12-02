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
               "Breathe"] 
    },
    { 
        name: "Sthie", 
        img: "assets/petbooks/Sthie.png", 
        account: "Kougritaa", 
        books: ["Light Speed Made Easy", "Speak Tyrannian", "Legends of Maraqua", "Maraquan Faerie Tales", "Waterlogged Book", "Skeith Inspired Treasure Maps",
               "Underwater Tour", "Zombie Handbook", "A History of the Lost Desert", "Slorg Care", "Shenkuu Lunar Festival Commemorative Guide", "Realm of the Water Faeries",
                "Book of Strange and Incurable Diseases", ] 
    },
    { 
        name: "Spieria", 
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
