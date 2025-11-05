Snack 1
===

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;
​
console.log(hamburger.name); // ?
console.log(secondBurger.name); // ?

- Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?

  console.log(hamburger.name); // Double Cheese Burger
  console.log(secondBurger.name); // Double Cheese Burger

- Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

  Esiste un solo oggetto ed entrambe le variabili sono solo un riferimento a quell'oggetto