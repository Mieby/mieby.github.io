// Datos iniciales
const people = [
    { 
        name: "Alice", 
        img: "assets/alice.png", 
        account: "alice123", 
        books: ["Libro 1", "Libro 2"] 
    },
    { 
        name: "Bob", 
        img: "assets/bob.png", 
        account: "bob456", 
        books: ["Libro 3", "Libro 2"] 
    },
    { 
        name: "Charlie", 
        img: "assets/charlie.png", 
        account: "charlie789", 
        books: [] 
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
            <p>Cuenta: ${person.account}</p>
            <p>Libros: ${person.books.length > 0 ? person.books.join(", ") : "Ninguno"}</p>
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
