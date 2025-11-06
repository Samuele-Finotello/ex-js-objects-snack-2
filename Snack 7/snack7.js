const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
  restaurant: {
    name: "Hyur's Burgers",
    welcomeClient: () => {
      console.log("Benvenuto!");
    },
    address: {
      street: 'Main Street',
      number: 123,
      showAddress: () => {
        console.log("Main Street 123");
      }
    },
    isOpen: true,
  }
}

function deepCopy(object) {
  // controllo se la proprietà presa non è un oggetto o è un array
  if (typeof object !== 'object' || Array.isArray(object)) {
    // nel caso che lo siano returno la proprietà così com'è
    return object;
  }
  // creo un oggetto vuoto in cui mettere le proprietà dell'oggetto
  const copy = {};
  // creo un ciclo for dove key prende ogni volta le proprietà presente nell'oggetto
  for (const key in object) {
    // creo la variabile value che assume il valore della proprietà che key ha in quel momento
    const value = object[key];
    // controllo se key non ha come value un oggetto o è un array
    if (typeof value !== 'object' || Array.isArray(value)) {
      // se non è un oggetto o è un array, restituisco il valore e basta
      copy[key] = value;
    }
    else {
      // se è un oggetto, richiamo la funzione deepCopy per rifare il ciclo for e ricreare l'oggetto completo
      copy[key] = deepCopy(value);
    }
  }
  // returno l'oggetto completo con sia i valori primitivi, che le funzioni, che gli array che gli oggetti
  return copy;
}

// faccio il console.log usando la funzione deepCopy sull'oggetto chef
console.log(deepCopy(chef))