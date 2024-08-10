const products = [
  {
    id: 1,
    name: "Cocaine",
    description: "1 pound of our finest angels dust",
    price: 15999.99,
  },
  {
    id: 2,
    name: "Heroin",
    description: "A full pound of Heroin(*Needles not included)",
    price: 29999.99,
  },
  {
    id: 3,
    name: "Marijuana",
    description: "A Premium pound of our special glazed kush",
    price: 999.99,
  },
  {
    id: 4,
    name: "Mushrooms",
    description: "Solid 1lb Pack of our dried magic mushrooms",
    price: 1999.99,
  },
  {
    id: 5,
    name: "Crystal Meth",
    description: "The clearest glass on the market comes in 1lb packages",
    price: 12999.99,
  },
];

export const getProducts = () => products;

export const getProductById = (productId) =>
  products.find((product) => product.id === productId);
