Snack 4
===

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}
​
const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};

- Qual è il metodo migliore per clonare l’oggetto chef, e perché?

  Per clonare l'oggetto chef si può usare l'operatore spread, però la funzione makeBurger la copia solo per riferimento

- Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?

  Per clonare l'oggetto restaurant si può usare l'operatore structuredClone, usato per oggetti complessi