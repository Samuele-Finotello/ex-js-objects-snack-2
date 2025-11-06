Snack 5 (BONUS)
===

const hamburger = { 
    name: "Cheese Burger", 
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};
​
const newRestaurant = {...hamburger.maker.restaurant};
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = {...hamburger};
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";
​
console.log(hamburger.maker.name); // ?
console.log(secondBurger.maker.name); // ?
console.log(hamburger.maker.restaurant.name); // ?
console.log(secondBurger.maker.restaurant.name); // ?

- Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?

  console.log(hamburger.maker.name); // Chef Hyur
  console.log(secondBurger.maker.name); // Chef Hyur
  console.log(hamburger.maker.restaurant.name); // Hyur's II
  console.log(secondBurger.maker.restaurant.name); // Hyur's II

- Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

  Sono stati creati in memoria 3 oggetti, il primo è hamburger, il secondo è newRestaurant che prende solo l'oggetto restaurant dentro hamburger e il terzo è secondBurger che copia come indipendente solo il primo livello di hamburger perché è stato fatto con lo spread