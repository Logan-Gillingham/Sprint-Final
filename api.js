const products = [
  {
    id: 1,
    name: "Cocaine",
    description: "1 pound of our finest angels dust",
    price: 15999.99,
    image: 'https://cdn.adf.org.au/media/images/cocaine-social.2e16d0ba.fill-1200x1200.jpg',
  },
  {
    id: 2,
    name: "Heroin",
    description: "A full pound of Heroin(*Needles not included)",
    price: 29999.99,
    image: 'https://www.usatoday.com/gcdn/authoring/authoring-images/2024/02/05/USAT/72487012007-getty-images-468584086.jpg?crop=3876,2180,x0,y121&width=3200&height=1800&format=pjpg&auto=webp',
  },
  {
    id: 3,
    name: "Marijuana",
    description: "A Premium pound of our special glazed kush",
    price: 999.99,
    image: 'https://www.verywellmind.com/thmb/m2VVBXgqiFcrWXrqwdvBmpRXDZ4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/marijuana-454601963-resized-569fd2345f9b58eba4ad583d.jpg',
  },
  {
    id: 4,
    name: "Mushrooms",
    description: "Solid 1lb Pack of our dried magic mushrooms",
    price: 1999.99,
    image: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2023/10/Psilocybin-mushrooms-growing-1296x728-header-1024x575.jpg',
  },
  {
    id: 5,
    name: "Crystal Meth",
    description: "The clearest glass on the market comes in 1lb packages",
    price: 12999.99,
    image: 'https://cdn-01.drugfree.org/web/prod/wp-content/uploads/2019/10/19203018/pile-of-meth-crystals-10-31-19-e1686688226942.jpg',
  },
  {
    id: 6,
    name: "Fentanyl",
    description: "1lb package of pills",
    price: 12999.99,
    image: 'https://www.dea.gov/sites/default/files/styles/large/public/2022-12/Fentanyl_oxy_30mg_bulk%20pill%20spill_2.jpg?h=9f1e7607&itok=67q1H_pI',
  },
];
const equipment = [
  { id: 1,
    name: 'Bong', 
    description: 'A must have with our premium Marijuana', 
    price: 49.99, 
    image: 'https://i.ebayimg.com/images/g/huoAAOSwQH1kdZWv/s-l1600.jpg' 
  },
  { id: 2,
    name: 'Grinder', 
    description: 'Need this to grind down all our valuable products', 
    price: 39.99, 
    image: 'https://www.vesselbrand.com/cdn/shop/products/MILL_GUNMETALWALNUT_EXPLODED_FRONTSHADOW_800_2048x.jpg?v=1661447792' 
  },
  { id: 3,
    name: 'Needles', 
    description: 'Comes in a pack of 20 (Biohazardous materials)', 
    price: 29.99, 
    image: 'https://pim-resources.coleparmer.com/item/l/cadence-4186-needles-with-deflected-tips-20-gauge-length-6-2570111.jpg' 
  },
  { id: 4,
    name: 'Lighters', 
    description: '6 pack of our premium lighters for every time to smoke up', 
    price: 14.99, 
    image: 'https://i.ebayimg.com/images/g/nQcAAOSwVAtlJzeg/s-l400.jpg' 
  },
  { id: 5,
    name: 'Electric Pipe', 
    description: 'The all new electric smoking pipe to easily use any of our products', 
    price: 69.99, 
    image: 'https://www.weedgets.com/cdn/shop/files/BLUE.jpg?v=1696352887' 
  },
  { id: 6,
    name: 'Travel Case', 
    description: 'To bring all your favorite products on the go', 
    price: 12.99, 
    image: 'https://m.media-amazon.com/images/I/71vXgoBwNFL._AC_SL1500_.jpg' 
  },
];

export const getProducts = () => products;
export const getEquipment = () => equipment;

export const getProductById = (productId) =>
  products.find((product) => product.id === productId);
export const getEquipmentById = (equipmentId) =>
  equipment.find((item) => item.id === equipmentId);