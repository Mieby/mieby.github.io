// Datos iniciales
const people = [
    { 
        name: "Pogoel", 
        img: "assets/petbooks/Pogoel.png", 
        account: "Kougritaa", 
        books: ["Libro 1", "Libro 2"] 
    },
    { 
        name: "Sthie", 
        img: "assets/petbooks/Sthie.png", 
        account: "Kougritaa", 
        books: ["Light Speed Made Easy", "Speak Tyrannian", "Legends of Maraqua", "Maraquan Faerie Tales", "Waterlogged Book", "Skeith Inspired Treasure Maps",
               "Underwater Tour", "Zombie Handbook", "A History of the Lost Desert", "Slorg Care", "Shenkuu Lunar Festival Commemorative Guide", "Realm of the Water Faeries",
                "Book of Strange and Incurable Diseases" ] 
    },
    { 
        name: "Spieria", 
        img: "assets/petbooks/Spieria.png", 
        account: "Kougritaa", 
        books: [] 
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
