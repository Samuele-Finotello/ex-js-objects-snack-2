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

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);