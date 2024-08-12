const products = [
  {
    id: 1,
    name: "Cannabis Indica",
    description:
      "1 dub  of our cannabis indicia, grow in the mountains of Peru",
    price: 23.99,
    image:
      "https://media.post.rvohealth.io/wp-content/uploads/2021/01/Indica_Plant_732x549-thumbnail-732x549.jpg",
  },
  {
    id: 2,
    name: "Sour diesel",
    description: "A dub of our premium sour diesel, grown in the USA",
    price: 36.45,
    image:
      "https://rythm.com/wp-content/uploads/RYTHM-Smokescape-SourDiesel-2.png",
  },
  {
    id: 3,
    name: "Kush",
    description: "1lb pack of our premium kush, grown in the USA",
    price: 1000.0,
    image:
      "https://hashonlinecanada.com/wp-content/uploads/2024/01/AAA-Lithium-OG-Kush.webp",
  },
  {
    id: 4,
    name: "Acapluco Gold",
    description: "1lb pack of our premium Acapulco Gold, grown in Mexico",
    price: 1999.0,
    image: "https://www.cannaconnection.com/7536/acapulco-gold.jpg",
  },
  {
    id: 5,
    name: "Blue Dream",
    description: "1lb pack of our premium Blue Dream, grown in the USA",
    price: 12999.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdutVCqxG0YyAdbv8Hgls3pRCXin5369it6w&s",
  },
  {
    id: 6,
    name: "cannabis ruderalis",
    description: "1lb package of pills",
    price: 12999.0,
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Hanf05-w.jpg",
  },
  {
    id: 7,
    name: "Jack Herer",
    description: "1lb pack of our premium Jack Herer, grown in the USA",
    price: 14000.0,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Jackherer.jpg",
  },
  {
    id: 8,
    name: "Purple Kush",
    description: "1lb pack of our premium Purple Kush, grown in the USA",
    price: 15000.0,
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Kush_close.jpg",
  },
  {
    id: 9,
    name: "Super Lemon Haze",
    description: "1lb pack of our premium Super Lemon Haze, grown in the USA",
    price: 15500.0,
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Kush_close.jpg",
  },
  {
    id: 10,
    name: "Northern Lights",
    description: "1lb pack of our premium Northern Lights, grown in the USA",
    price: 16000.0,
    image:
      "https://i.natgeofe.com/n/63527567-9a8b-4b08-819d-a6142fb2b350/aurora-kirkjufell-iceland_4x3.jpg",
  },
  {
    id: 11,
    name: "Hybrid",
    description: "1lb pack of our premium Hybrid, grown in the USA",
    price: 14000.0,
    image:
      "https://www.coloradoan.com/gcdn/presto/2019/03/11/PFTC/db3543f4-62b7-480b-94ab-5228c9b23b1b-GettyImages-886010078.jpg",
  },
  {
    id: 12,
    name: "Granddaddy Purple",
    description: "1lb pack of our premium Granddaddy Purple, grown in the USA",
    price: 12000.0,
    image:
      "https://circa1818.ca/wp-content/uploads/2023/02/grandaddy-purple-1024x819.jpg",
  },
  {
    id: 13,
    name: "Wedding Cake",
    description: "1lb pack of our premium Wedding Cake, grown in the USA",
    price: 14000.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOk385Qb6xKB8F-8nhJWDgI_Ql12Ofy9b4WA&s",
  },
  {
    id: 14,
    name: "Pineapple express",
    description: "1 lb pack of our premium Pineapple Express, grown in the USA",
    price: 13000.0,
    image:
      "https://images.leafly.com/flower-images/defaults/generic/strain-23.png?auto=compress%2Cformat&w=295&dpr=2",
  },
  {
    id: 15,
    name: "White Widow",
    description: "1 lb pack of our premium White Widow, grown in the USA",
    price: 15000.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLZ6hi26Xiw1pCbuq6pa8wx9XI3VhexiYHXQ&s",
  },
  {
    id: 16,
    name: "0G Kush",
    description: "1 lb pack of our premium 0G Kush, grown in the USA",
    price: 20000.0,
    image: "https://images.leafly.com/flower-images/og-kush.png",
  },
  {
    id: 17,
    name: "Apple Fritter",
    description: "1 lb pack of our premium Apple Fritter, grown in the USA",
    price: 17000.0,
    image:
      "https://leafly-public.imgix.net/strains/photos/ziw0L3SZSIyM6uiLup73_AppleFritter%20(1).jpg",
  },
  {
    id: 14,
    name: "Pineapple express",
    description: "1 lb pack of our premium Pineapple Express, grown in the USA",
    price: 13000.0,
    image:
      "https://images.leafly.com/flower-images/defaults/generic/strain-23.png?auto=compress%2Cformat&w=295&dpr=2",
  },
  {
    id: 15,
    name: "White Widow",
    description: "1 lb pack of our premium White Widow, grown in the USA",
    price: 15000.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLZ6hi26Xiw1pCbuq6pa8wx9XI3VhexiYHXQ&s",
  },
];
const equipment = [
  {
    id: 1,
    name: "Bong",
    description: "A must have with our premium Marijuana",
    price: 49.99,
    image: "https://i.ebayimg.com/images/g/huoAAOSwQH1kdZWv/s-l1600.jpg",
  },
  {
    id: 2,
    name: "Grinder",
    description: "Need this to grind down all our valuable products",
    price: 39.99,
    image:
      "https://www.vesselbrand.com/cdn/shop/products/MILL_GUNMETALWALNUT_EXPLODED_FRONTSHADOW_800_2048x.jpg?v=1661447792",
  },
  {
    id: 3,
    name: "Weed backpack",
    description: " A must have to carry all your favorite products",
    price: 29.99,
    image:
      "https://i.etsystatic.com/24391578/r/il/50822e/3281130247/il_fullxfull.3281130247_shoc.jpg",
  },
  {
    id: 4,
    name: "Lighters",
    description: "6 pack of our premium lighters for every time to smoke up",
    price: 14.99,
    image: "https://i.ebayimg.com/images/g/nQcAAOSwVAtlJzeg/s-l400.jpg",
  },
  {
    id: 5,
    name: "Electric Pipe",
    description:
      "The all new electric smoking pipe to easily use any of our products",
    price: 69.99,
    image: "https://www.weedgets.com/cdn/shop/files/BLUE.jpg?v=1696352887",
  },
  {
    id: 6,
    name: "Travel Case",
    description: "To bring all your favorite products on the go",
    price: 12.99,
    image: "https://m.media-amazon.com/images/I/71vXgoBwNFL._AC_SL1500_.jpg",
  },
  {
    id: 7,
    name: "Rolling Papers",
    description: "Comes in a pack of 10",
    price: 9.99,
    image:
      "https://theounce.ca/wp-content/uploads/2023/02/RAW-rolling-paper-tips.jpeg",
  },
  {
    id: 8,
    name: "Weed Socks",
    description: "A must have to show off your love for our products",
    price: 9.99,
    image: "https://m.media-amazon.com/images/I/61xAOJyCvvL._AC_UY1000_.jpg",
  },
  {
    id: 9,
    name: "Weed Hat",
    description: "A must have to show off your love for our products",
    price: 9.99,
    image: "https://m.media-amazon.com/images/I/612OUIAojCL._AC_UY1000_.jpg",
  },
  {
    id: 10,
    name: "Weed T-shirt",
    description: "A must have to show off your love for our products",
    price: 9.99,
    image:
      "https://i.etsystatic.com/6572991/r/il/6bf019/3711096734/il_1080xN.3711096734_hw2p.jpg",
  },
];

export const getProducts = () => products;
export const getEquipment = () => equipment;

export const getProductById = (productId) =>
  products.find((product) => product.id === productId);
export const getEquipmentById = (equipmentId) =>
  equipment.find((item) => item.id === equipmentId);
