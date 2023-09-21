import { v4 as uuid } from "uuid";

export let carData = [
  {
    id: uuid(),
    make: "BMW",
    model: "528i Touring",
    year: 1998,
    price: 3000,
    disc: "A lovely BMW 528i Touring which makes would make a great cruiser for travelling",
    img: "../../assets/images/cars/bmw528i.jpg",
  },
  {
    id: uuid(),
    make: "Ford",
    model: "Fiesta ST",
    year: 2017,
    price: 12000,
    disc: "Future classic hot hatch",
    img: "../../assets/images/cars/fiestast.jpg",
  },
  {
    id: uuid(),
    make: "Jaguar",
    model: "XJR",
    year: "1998",
    price: 4500,
    disc: "A lesser known super saloon from the 90s",
    img: "../../assets/images/cars/jaguarxjr.webp",
  },
  {
    id: uuid(),
    make: "Volvo",
    model: "850R",
    year: 1997,
    price: 4250,
    disc: "Homologation for Volvo's entry to the 1994 BTCC",
    img: "../../assets/images/cars/volvo850r.jpg",
  },
];
