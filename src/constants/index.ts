import { IProduct } from "../interfaces/constants";

export const navLinks: string[] = [
  "Shop",
  "AI",
  "Mobile",
  "TV & Audio",
  "Appliances",
  "Computing",
  "Displays",
  "Accessories",
  "SmartThings",
];

export const products: IProduct[] = [
  {
    id: 1,
    title: "Galaxy Z Fold6, 512GB (Unlocked)",
    img: "/products/01.png",
    price: "$1899.99",
    newest: true,
    desc: `From $1899.99`,
  },
  {
    id: 2,
    title: "Galaxy Buds3 Pro",
    img: "/products/02.png",
    price: "$249.99",
    newest: true,
    desc: `From $249.99`,
  },
  {
    id: 3,
    title:
      "Bespoke 5.3 cu. ft. All-in-One AI Laundry Combo Ultra Capacity Washer and Ventless Heat Pump Dryer",
    img: "/products/03.png",
    price: "$1999",
    newest: false,
    desc: `From $1999`,
  },
  {
    id: 4,
    title: "Galaxy Z Flip6, 512GB (Unlocked)",
    img: "/products/04.png",
    price: "$1219.99",
    newest: true,
    desc: `From $1219.99`,
  },
  {
    id: 5,
    title: "Jet 60 Pet Cordless Stick Vacuum",
    img: "/products/05.png",
    price: "$329.99",
    newest: false,
    desc: `From $329.99`,
  },
  {
    id: 6,
    title: '65"The Frame QLED 4K',
    img: "/products/06.png",
    price: "$1999.99",
    newest: false,
    desc: `From $1999.99`,
  },
];
