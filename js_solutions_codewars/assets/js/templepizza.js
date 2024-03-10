document.addEventListener('DOMContentLoaded', function() {
    fetchPizzas();
});
async function fetchPizzas() {
    const options = {
        method: 'GET',
        url: 'https://pizza-and-desserts.p.rapidapi.com/pizzas',
        headers: {
            'X-RapidAPI-Key': '90f34fb2e0msh7c2a22a967b0d9ep104863jsn9fc163d16fba',
            'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
        }
    };
    try {
        const response = await axios.request(options);
        const pizzas = response.data;
        updateDropdownMenu(pizzas);
    } catch (error) {
        console.error('Error fetching pizzas:', error);
    }
}
function updateDropdownMenu(pizzas) {
    const menuDropdown = document.getElementById('pizzaMenuDropdown');
    menuDropdown.innerHTML = '';
    pizzas.forEach(pizza => {
        const menuItem = document.createElement('a');
        menuItem.className = 'dropdown-item';
        menuItem.href = '#';
        menuItem.textContent = pizza.name;
        menuDropdown.appendChild(menuItem);
    });
}
const pizzaTypes = [
    "Aglio e olio",
    "Ai Broccoli",
    "Al Salmone",
    "Alla Vongole",
    "Alle Verdure Grigliate",
    "Anchovis",
    "Bianca",
    "Bolognese",
    "Calabrese",
    "Calabria",
    "Calzone",
    "Caprese",
    "Capri",
    "Capricciosa",
    "Caprina",
    "Carbonara",
    "Carciofi",
    "Carpaccio",
    "Cipolla",
    "Contadina",
    "Con cozze",
    "Diavola",
    "Etna",
    "Frutti di Mare",
    "Funghi",
    "Gamberetti",
    "Mamma Mia",
    "Margherita",
    "Mari e monte",
    "Marinara",
    "Mazza",
    "Mozzarella",
    "Napoletana",
    "Napoli",
    "O Sole Mio",
    "Parma (Prosciutto di Parma)",
    "Peperoni",
    "Piccantino",
    "Pizza al taglio (al trancio)",
    "Pizza bread",
    "Prosciutto",
    "Prosciutto e funghi",
    "Pugliese",
    "Quattro Formaggi",
    "Quattro Stationi",
    "Regina",
    "Romana",
    "Rusticana",
    "Salame",
    "Salmone",
    "Salsiccia",
    "Sardenaira (Pizza all’Andrea)",
    "Siciliana",
    "Siciliana Bianca",
    "Speziale",
    "Spinaci",
    "Spinaci e Uovo",
    "Spinaci e Gorgonzola",
    "Tartufata",
    "Tirolese",
    "Tonno (al Tonno, tuna)",
    "Tonno e Cipola",
    "Toscana",
    "Vegetariana (Verdure, Ortolana)",
    "Viennese",
    "Vitello Tonnato",
    "New York Style (New York Slice)",
    "All-dressed",
    "Canadian Pizza",
    "Donair",
    "Garlic Fingers",
    "Hawaiian Style",
    "Pictou County",
    "Poutine",
    "Sushi Pizza",
    "Toronto Style"
];

const dropdownMenu = document.getElementById("pizzaMenuDropdown");
pizzaTypes.forEach(pizza => {
    const menuItem = document.createElement("a");
    menuItem.classList.add("dropdown-item");
    menuItem.href = "#";
    menuItem.textContent = pizza;
    dropdownMenu.appendChild(menuItem);
});

