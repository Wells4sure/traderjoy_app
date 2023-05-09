import { CategoryI, ProductI } from "../types/index";

const randomColor: () => string = () => {
  const colors: string[] = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "tertiary",
    "dark",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const categories: CategoryI[] = [
  { id: 1, name: "Fruits", color: randomColor() },
  { id: 2, name: "Vegetables", color: randomColor() },
  { id: 3, name: "Meat", color: randomColor() },
  { id: 4, name: "Dairy", color: randomColor() },
  { id: 5, name: "Bakery", color: randomColor() },
  { id: 6, name: "Beverages", color: randomColor() },
  { id: 7, name: "Snacks", color: randomColor() },
  { id: 8, name: "Beer", color: randomColor() },
  { id: 9, name: "Wine", color: randomColor() },
  { id: 10, name: "Whiskey", color: randomColor() },
  { id: 11, name: "Coffee", color: randomColor() },
  { id: 12, name: "Tea", color: randomColor() },
  { id: 13, name: "Cake", color: randomColor() },
  { id: 14, name: "Candy", color: randomColor() },
  { id: 15, name: "Chocolate", color: randomColor() },
];

export const products: ProductI[] = [
  {
    id: 1,
    name: "Fanta",
    price: 11.95,
    description: "500ml",
    imageUrl: "https://loremflickr.com/320/240",
    category: categories[1],
  },
  {
    id: 2,
    name: "Coca-Cola",
    price: 11.95,
    description: "500ml",
    imageUrl: "https://via.placeholder.com/200x200",
    category: categories[2],
  },
  {
    id: 3,
    name: "Pepsi",
    price: 1195,
    description: "500ml",
    imageUrl: "https://via.placeholder.com/200x200",
    category: categories[3],
  },
  {
    id: 4,
    name: "Sprite",
    price: 135,
    description: "500ml",
    imageUrl: "",
    category: categories[4],
  },
  {
    id: 5,
    name: "Long name something very long",
    price: 3500,
    description: "500ml",
    imageUrl: "https://via.placeholder.com/200x200",
    category: categories[5],
  },
  {
    id: 6,
    name: "Whiskey",
    price: 295,
    description: "500ml",
    imageUrl: "https://via.placeholder.com/200x200",
    category: categories[6],
  },
  {
    id: 7,
    name: "Wine",
    price: 195,
    description: "500ml",
    imageUrl: "https://via.placeholder.com/200x200",
    category: categories[7],
  },
  {
    id: 8,
    name: "Beer",
    price: 15,
    description: "500ml",
    imageUrl: "https://via.placeholder.com/200x200",
    category: categories[8],
  },
  {
    id: 9,
    name: "Coffee",
    price: 35,
    description: "500ml",
    imageUrl: "https://via.placeholder.com/200x200",
    category: categories[9],
  },
];