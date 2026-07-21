export type MenuItem = {
  name: string;
  description?: string;
  price: string;
  tags?: ("VG" | "GF")[];
  orderable?: boolean;
};

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

export const dinnerMenu: MenuCategory[] = [
  {
    id: "antipasti",
    title: "Antipasti",
    items: [
      {
        name: "Focaccia Toscana",
        description: "Tuscan style focaccia, crispy and thin",
        price: "6",
        tags: ["VG"],
        orderable: true,
      },
      {
        name: "Olives",
        description: "Mixed California olives in citrus infused olive oil",
        price: "8",
        tags: ["VG"],
        orderable: true,
      },
      {
        name: "Prosciutto e Burrata",
        description:
          "Prosciutto di Parma aged 18 months, fresh burrata cheese & arugula. Served with warm focaccia",
        price: "20",
        orderable: true,
      },
      {
        name: "Calamari Fritti",
        description:
          "Fresh squid fried and tossed with spices, served with our signature aioli",
        price: "19",
        orderable: true,
      },
      {
        name: "Polpo Olive e Patate",
        description:
          "Seared Spanish octopus, marble potatoes, cherry tomatoes, taggiasca olives, rosemary, garlic",
        price: "24.5",
        orderable: true,
      },
    ],
  },
  {
    id: "insalate-contorni",
    title: "Insalate - Contorni",
    items: [
      {
        name: "Zuppa del Giorno",
        description: "Soup of the day — Piccolo / Grande",
        price: "11 / 15",
        tags: ["VG"],
        orderable: true,
      },
      {
        name: "Insalata Sozzani",
        description:
          "Baby spinach, gorgonzola dolce, dried cranberries, pistachios & pears tossed in a balsamic vinaigrette",
        price: "15",
        orderable: true,
      },
      {
        name: "French Fries",
        description: "Truffle or cacio e pepe",
        price: "11",
        tags: ["VG"],
        orderable: true,
      },
      {
        name: "Veggie of the Day",
        description: "Inquire with your server",
        price: "12",
        tags: ["VG"],
      },
      {
        name: "Salad Special",
        description: "Inquire with your server",
        price: "15",
      },
      {
        name: "Add-ons",
        description: "Burrata $8 · Chicken $7 · Salmon $10 · Prawns $10",
        price: "",
      },
    ],
  },
  {
    id: "pasta",
    title: "Pasta",
    note: "Our dry pasta is house made with organic American grains. Our fresh pasta is house made with non-GMO American grains. Ask your server about our vegan & gluten free pasta options.",
    items: [
      {
        name: "Tagliatelle Ragu Bianco",
        description:
          "Fettuccine-like noodles tossed with a creamy pork and chicken ragu, mushrooms, parmigiano",
        price: "23",
        orderable: true,
      },
      {
        name: "Lasagna",
        description:
          "Beef and pork ragu, layered in a béchamel-tomato-meat sauce, parmigiano",
        price: "24",
        orderable: true,
      },
      {
        name: "Gnocchi Cacio e Pepe",
        description:
          "Soft & fluffy potato gnocchi with a black pepper and pecorino & parmigiano cheese sauce",
        price: "24",
        orderable: true,
      },
      {
        name: "Pappardelle Salmone",
        description:
          "Succulent salmon and wide ribbons of pappardelle pasta in a creamy sauce with a hint of lemon zest",
        price: "26",
        orderable: true,
      },
    ],
  },
  {
    id: "secondi",
    title: "Secondi",
    items: [
      {
        name: "Eggplant Parmigiana",
        description:
          "Thinly sliced pan-fried eggplant, basil, parmigiano, tomato sauce",
        price: "23",
        orderable: true,
      },
      {
        name: "Pesce del Giorno",
        description: "Monterey Fish Market catch of the day. Inquire with your server",
        price: "38",
      },
    ],
  },
  {
    id: "pizze",
    title: 'Pizze (12")',
    note: "Our regular 12\" pizzas are made on organic house made dough. Substitute gluten free or cornmeal crust.",
    items: [
      {
        name: "Cannavaro",
        description: "Tomato sauce, mozzarella, basil",
        price: "19",
        tags: ["VG"],
        orderable: true,
      },
      {
        name: "Margherita Classica",
        description:
          "San Marzano tomato sauce, fresh fior di latte mozzarella, fresh basil",
        price: "23",
        tags: ["VG"],
        orderable: true,
      },
      {
        name: "Giardino",
        description:
          "Tomato sauce, mozzarella, grilled summer squash, sun dried tomatoes, ricotta, arugula",
        price: "23",
        tags: ["VG"],
        orderable: true,
      },
      {
        name: "Basso",
        description:
          "Tomato sauce, mozzarella, artichoke hearts, sun dried tomatoes, castelvetrano olives, basil pesto",
        price: "24",
        tags: ["VG"],
        orderable: true,
      },
      {
        name: "Bellucci",
        description: "Tomato sauce, mozzarella, fennel sausage, fresh ricotta",
        price: "24",
        orderable: true,
      },
      {
        name: "Diavola - Materazzi",
        description: "Tomato sauce, mozzarella, calabrese salami, kalamata olives",
        price: "24",
        orderable: true,
      },
      {
        name: "Fiori",
        description:
          "Tomato sauce, mozzarella, mushrooms, arugula, prosciutto parma, truffle oil",
        price: "25",
        orderable: true,
      },
      {
        name: "Stella",
        description:
          "Mozzarella, crescenza cheese, prosciutto parma, seasonal mushrooms",
        price: "25",
        orderable: true,
      },
      {
        name: "Jovanotti",
        description:
          "Tomato sauce, mozzarella, calabrese salami, prosciutto cotto, smoked mozzarella, mushrooms",
        price: "26",
        orderable: true,
      },
      {
        name: "Magnini",
        description:
          "Mozzarella, mascarpone cheese, smoked salmon, garnished with dill",
        price: "26",
        orderable: true,
      },
      {
        name: "Murino",
        description: "Mozzarella, gorgonzola cheese, pears, drizzled honey",
        price: "24",
        tags: ["VG"],
        orderable: true,
      },
      {
        name: "Gattuso",
        description:
          "Butternut squash puree, fior di latte mozzarella, parsley, sage oil, ricotta salata",
        price: "24",
        tags: ["VG"],
        orderable: true,
      },
      {
        name: "Bortolami",
        description:
          "Tomato sauce, mozzarella, hot Italian sausage, mushrooms, radicchio treviso, smoked mozzarella",
        price: "24",
        orderable: true,
      },
      {
        name: "Citterio",
        description:
          "Mozzarella, baby spinach, prosciutto cotto, fior di latte mozzarella, grana padano",
        price: "24",
        orderable: true,
      },
      {
        name: "Casalengo",
        description:
          "Mozzarella, crescenza cheese, pancetta, yukon gold potatoes, rosemary oil",
        price: "24",
        orderable: true,
      },
    ],
  },
  {
    id: "calzoni",
    title: "Calzoni",
    note: "Vegetarian. Can be made vegan with non-dairy mozzarella/ricotta cheeses & meat substitutes. Pesto contains dairy and will be omitted from vegan options.",
    items: [
      {
        name: "Ricotta & Spinaci",
        description:
          "Mozzarella, fresh ricotta, sautéed spinach, topped with tomato sauce",
        price: "22",
        tags: ["VG"],
        orderable: true,
      },
      {
        name: "Belucci",
        description:
          "Mozzarella, fresh ricotta, fennel sausage, topped with tomato sauce",
        price: "24",
        orderable: true,
      },
    ],
  },
  {
    id: "dolci",
    title: "Dolci",
    items: [
      { name: "Tiramisu", description: "Ladyfingers, espresso, mascarpone", price: "12.5", orderable: true },
      { name: "Crème Brûlée", description: "Traditional crème brûlée", price: "12.5", orderable: true },
      {
        name: "Cannoli Siciliani",
        description: "Ricotta filled cannoli, side of house made gelato",
        price: "12.5",
        orderable: true,
      },
      { name: "Gelato", description: "One, two, or three scoops. Daily selection", price: "5 / 8 / 11", orderable: true },
      { name: "Affogato", description: "Espresso served over choice of gelato", price: "11", orderable: true },
      {
        name: "Zucchero",
        description:
          "Calzone shaped dough with chocolate hazelnut filling, topped with seasonal berries (serves 3-4 people)",
        price: "16",
        orderable: true,
      },
      {
        name: "Ricotta & Pistachio Cake",
        description:
          "Ricotta and pistachio creams separated by sponge cake. Topped with crushed pistachios and dusted with powdered sugar",
        price: "11",
        orderable: true,
      },
      {
        name: "Soufflé al Cioccolato",
        description: "Moist chocolate cake with a heart of creamy rich chocolate",
        price: "12.5",
        orderable: true,
      },
      {
        name: "Chocolate Temptation",
        description:
          "Ecuadorian cocoa infused chocolate cake layered with hazelnut cremes, hazelnut crunch, & finished with a decadent chocolate glaze",
        price: "11",
        orderable: true,
      },
      {
        name: "Dark Chocolate Profiterols",
        description: "Cream puffs filled with Chantilly cream and enrobed in chocolate",
        price: "11",
        orderable: true,
      },
      {
        name: "Torta della Nonna",
        description:
          "Lemon infused pastry cream on a shortcrust pastry, topped with pine nuts, almonds, and dusted with powdered sugar",
        price: "11",
        orderable: true,
      },
      {
        name: "Black Forest Cake (Selva Nera)",
        description: "Chocolate sponge layers, cherry compote, whipped cream, & chocolate shavings",
        price: "12.5",
        orderable: true,
      },
    ],
  },
  {
    id: "bevande",
    title: "Bevande",
    items: [
      { name: "Coke, Diet Coke, Sprite", description: "12 fl oz can", price: "5", orderable: true },
      {
        name: "Italian Soda",
        description: "Blood orange, lemon, orange, grapefruit",
        price: "5.5",
        orderable: true,
      },
      { name: "San Pellegrino Sparkling Water", description: "750ml bottle", price: "7.5", orderable: true },
      { name: "Iced Tea", price: "3", orderable: true },
      { name: "Orange Juice", price: "4", orderable: true },
    ],
  },
  {
    id: "birra",
    title: "Italian Beer Selection",
    items: [
      { name: "Dolomiti Rossa", description: "Double Malt, Veneto", price: "10", orderable: true },
      { name: "Dolomiti Pilsner", description: "Blonde Lager, Veneto", price: "10", orderable: true },
      { name: "Menabrea Blonda", description: "Premium Pale Lager, Lombardia", price: "10", orderable: true },
      {
        name: "Menabrea Ambrata",
        description: "Amber Beer Märzen-Style, Lombardia",
        price: "10",
        orderable: true,
      },
      { name: "Mastri Birrai Blonde Ale", description: "Blonde Ale, Umbria", price: "10", orderable: true },
      { name: "Baladin Nora", description: "Slightly hazy, spiced ale", price: "10", orderable: true },
      { name: "Baladin Isaac", description: "Yellow blanche beer, slightly hazy IPA", price: "10", orderable: true },
      { name: "Baladin Nazionale", description: "Citrus Italian Blonde Ale", price: "10", orderable: true },
      { name: "Baladin L'IPA", description: "Citrus Italian IPA", price: "10", orderable: true },
      { name: "Alternative 0.0", description: "Alcohol free beer, Trentino", price: "10", orderable: true },
    ],
  },
];

export const restaurantInfo = {
  name: "Passione Emporio",
  tagline: "A corner of Italy",
  location: "on 5th",
  address: "2324 Fifth Street Unit A, Berkeley, CA 94710",
  phone: "510-612-8677",
  phoneHref: "tel:+15106128677",
  hours: "Mon, Tues, Thurs, Fri, Sat, Sun · 11:00AM - 9:30PM",
  hoursClosed: "Closed Wednesdays",
  instagram: "https://www.instagram.com/passione_emporioon5th",
  website: "https://www.passionebrands.com",
};
