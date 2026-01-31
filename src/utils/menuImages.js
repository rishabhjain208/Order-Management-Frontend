const menuImages = [
  {
    key: "pizza",
    image: "/Myints-Margherita-Pizza.jpg",
  },
  {
    key: "pepperoni",
    image: "/Pepperoni Pizza.jpeg",
  },
  {
    key: "burger",
    image: "/burger.jpeg",
  },
  {
    key: "chicken burger",
    image: "/Chicken Burger.webp",
  },
  {
    key: "fries",
    image: "/French Fries.jpg",
  },
  {
    key: "coffee",
    image: "/Cold Coffee.jpg",
  },
  {
    key: "lemon iced tea",
    image: "/Lemon Iced Tea.jpg",
  },
  {
    key: "chocolate milkshake",
    image: "/Chocolate Milkshake.jpeg",
  },
];

export const getMenuImage = (name = "") => {
  const item = menuImages.find((img) =>
    name.toLowerCase().includes(img.key)
  );

  return item ? item.image : "/vite.svg";
};
