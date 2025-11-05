Snack 2
===

const hamburger = { 
    name: "Cheese Burger", 
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};
​
const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";
​
console.log(hamburger.ingredients[0]); // ?
console.log(secondBurger.ingredients[0]); // ?

P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!

- Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
  
  console.log(hamburger.ingredients[0]); // Salad
  console.log(secondBurger.ingredients[0]); // Salad

- Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

  Sono stati creati 2 oggetti, però l'operatore spread non crea una copia indipendente anche delle proprietà annidate, quindi le proprietà annidate sono solo riferimenti