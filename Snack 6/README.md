Snack 6 (BONUS)
===

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

- Qual è il metodo migliore per clonare l’oggetto chef, e perché?

  Il modo migliore per clonare l'oggetto chef è con lo spread, perché con solo la reference non puoi modificare indipendentemente nulla, invece con JSON.parse(JSON.stringify()) e con structuredClone() non si possono copiare le funzioni, quindi il migliore è lo spread con cui almeno il primo livello si può modificare indipendentemente.
  Per rendere indipendente ogni oggetto di chef, bisogna usare lo spread più volte:
  
  const spreadChef = {
    ...chef,
    restaurant: {
        ...chef.restaurant,
        address: {
            ...chef.restaurant.address
        }
    }
  }