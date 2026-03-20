const receipts = [
  {
    id: "RCP-20260319-00421",
    store: {
      name: "SaveMore Supermarket",
      address: "123 Maharlika St, Calamba, Laguna",
      phone: "+63 49 123 4567",
    },
    date: "2026-03-19T10:34:00",
    cashier: "Maria Santos",
    items: [
      {
        id: 1,
        name: "Jasmine Rice 5kg",
        category: "Dry Goods & Pantry",
        subcategory: "Rice & Grains",
        qty: 1,
        price: 285.0,
      },
      {
        id: 2,
        name: "San Miguel Beer (6-pack)",
        category: "Beverages",
        subcategory: "Beer & Alcoholic Drinks",
        qty: 2,
        price: 189.0,
      },
      {
        id: 3,
        name: "Tide Powder Detergent 1kg",
        category: "Household & Cleaning",
        subcategory: "Laundry",
        qty: 1,
        price: 98.5,
      },
      {
        id: 4,
        name: "Lucky Me Pancit Canton",
        category: "Dry Goods & Pantry",
        subcategory: "Pasta & Noodles",
        qty: 5,
        price: 15.0,
      },
      {
        id: 5,
        name: "Nestle Fresh Milk 1L",
        category: "Dairy & Eggs",
        subcategory: "Milk",
        qty: 2,
        price: 89.0,
      },
      {
        id: 6,
        name: "Eggs (1 dozen)",
        category: "Dairy & Eggs",
        subcategory: "Eggs",
        qty: 1,
        price: 95.0,
      },
    ],
    subtotal: 1059.5,
    discount: 50.0,
    total: 1009.5,
    tendered: 1100.0,
    change: 90.5,
    payment: "Cash",
  },
  {
    id: "RCP-20260318-00398",
    store: {
      name: "Puregold Supermarket",
      address: "Brgy. Parian, Calamba, Laguna",
      phone: "+63 49 987 6543",
    },
    date: "2026-03-18T15:12:00",
    cashier: "Jose Reyes",
    items: [
      {
        id: 1,
        name: "Chicken Breast 1kg",
        category: "Meat & Seafood",
        subcategory: "Chicken & Poultry",
        qty: 2,
        price: 210.0,
      },
      {
        id: 2,
        name: "Del Monte Tomato Sauce 250g",
        category: "Dry Goods & Pantry",
        subcategory: "Condiments & Sauces",
        qty: 3,
        price: 28.0,
      },
      {
        id: 3,
        name: "Century Tuna (3-pack)",
        category: "Dry Goods & Pantry",
        subcategory: "Canned Goods",
        qty: 2,
        price: 95.0,
      },
      {
        id: 4,
        name: "Sunflower Cooking Oil 1L",
        category: "Dry Goods & Pantry",
        subcategory: "Cooking Oil",
        qty: 1,
        price: 115.0,
      },
      {
        id: 5,
        name: "Knorr Sinigang Mix",
        category: "Dry Goods & Pantry",
        subcategory: "Condiments & Sauces",
        qty: 4,
        price: 18.0,
      },
      {
        id: 6,
        name: "Gardenia Loaf Bread",
        category: "Bakery",
        subcategory: "Bread & Loaf",
        qty: 1,
        price: 75.0,
      },
    ],
    subtotal: 991.0,
    discount: 0.0,
    total: 991.0,
    tendered: 1000.0,
    change: 9.0,
    payment: "Cash",
  },
  {
    id: "RCP-20260317-00355",
    store: {
      name: "Robinsons Supermarket",
      address: "Robinsons Place Calamba, National Hwy",
      phone: "+63 49 555 7890",
    },
    date: "2026-03-17T18:45:00",
    cashier: "Ana Villanueva",
    items: [
      {
        id: 1,
        name: "Nescafe 3-in-1 (10 sachets)",
        category: "Beverages",
        subcategory: "Coffee & Tea",
        qty: 2,
        price: 89.0,
      },
      {
        id: 2,
        name: "Bear Brand Milk Powder 300g",
        category: "Dairy & Eggs",
        subcategory: "Milk",
        qty: 1,
        price: 175.0,
      },
      {
        id: 3,
        name: "Colgate Toothpaste 150ml",
        category: "Personal Care",
        subcategory: "Toothpaste & Oral Care",
        qty: 2,
        price: 75.0,
      },
      {
        id: 4,
        name: "Joy Dishwashing Liquid 500ml",
        category: "Household & Cleaning",
        subcategory: "Dishwashing",
        qty: 1,
        price: 89.0,
      },
      {
        id: 5,
        name: "Ariel Liquid Detergent 1.4L",
        category: "Household & Cleaning",
        subcategory: "Laundry",
        qty: 1,
        price: 299.0,
      },
      {
        id: 6,
        name: "Monde Crackers 400g",
        category: "Snacks & Confectionery",
        subcategory: "Chips & Crackers",
        qty: 2,
        price: 65.0,
      },
    ],
    subtotal: 921.0,
    discount: 20.0,
    total: 901.0,
    tendered: 1000.0,
    change: 99.0,
    payment: "GCash",
  },
  {
    id: "RCP-20260316-00310",
    store: {
      name: "SM Supermarket",
      address: "SM City Calamba, Brgy. Real",
      phone: "+63 49 222 3344",
    },
    date: "2026-03-16T11:20:00",
    cashier: "Carlos Mendoza",
    items: [
      {
        id: 1,
        name: "Pork Liempo 1kg",
        category: "Meat & Seafood",
        subcategory: "Pork",
        qty: 1,
        price: 320.0,
      },
      {
        id: 2,
        name: "Ampalaya (Bitter Gourd) 500g",
        category: "Fresh Produce",
        subcategory: "Vegetables",
        qty: 1,
        price: 45.0,
      },
      {
        id: 3,
        name: "Onion Red 1kg",
        category: "Fresh Produce",
        subcategory: "Vegetables",
        qty: 1,
        price: 80.0,
      },
      {
        id: 4,
        name: "Garlic 250g",
        category: "Fresh Produce",
        subcategory: "Herbs & Spices",
        qty: 2,
        price: 35.0,
      },
      {
        id: 5,
        name: "Datu Puti Vinegar 1L",
        category: "Dry Goods & Pantry",
        subcategory: "Condiments & Sauces",
        qty: 1,
        price: 55.0,
      },
      {
        id: 6,
        name: "Sprite 1.5L",
        category: "Beverages",
        subcategory: "Softdrinks & Soda",
        qty: 3,
        price: 65.0,
      },
    ],
    subtotal: 730.0,
    discount: 0.0,
    total: 730.0,
    tendered: 800.0,
    change: 70.0,
    payment: "Cash",
  },
  {
    id: "RCP-20260315-00278",
    store: {
      name: "Waltermart Supermarket",
      address: "JP Rizal Ave, Calamba, Laguna",
      phone: "+63 49 333 8899",
    },
    date: "2026-03-15T09:05:00",
    cashier: "Liza Buenaventura",
    items: [
      {
        id: 1,
        name: "Pampers Diaper Medium (32s)",
        category: "Baby & Kids",
        subcategory: "Diapers & Wipes",
        qty: 1,
        price: 489.0,
      },
      {
        id: 2,
        name: "Johnson's Baby Shampoo 200ml",
        category: "Baby & Kids",
        subcategory: "Baby Care",
        qty: 1,
        price: 99.0,
      },
      {
        id: 3,
        name: "Milo 300g",
        category: "Beverages",
        subcategory: "Milk-based Drinks",
        qty: 2,
        price: 145.0,
      },
      {
        id: 4,
        name: "Butter Fingers Biscuit",
        category: "Snacks & Confectionery",
        subcategory: "Biscuits & Crackers",
        qty: 3,
        price: 25.0,
      },
      {
        id: 5,
        name: "Sky Flakes Crackers 10-pack",
        category: "Snacks & Confectionery",
        subcategory: "Chips & Crackers",
        qty: 2,
        price: 55.0,
      },
      {
        id: 6,
        name: "C2 Apple Green Tea 500ml",
        category: "Beverages",
        subcategory: "Juices & Juice Drinks",
        qty: 4,
        price: 28.0,
      },
    ],
    subtotal: 1160.0,
    discount: 100.0,
    total: 1060.0,
    tendered: 1100.0,
    change: 40.0,
    payment: "Maya",
  },
];

const hardwareReceipts = [
  {
    id: "RCP-20260319-00501",
    store: {
      name: "Handyman Hardware",
      address: "National Hwy, Calamba, Laguna",
      phone: "+63 49 123 9876",
    },
    date: "2026-03-19T09:15:00",
    cashier: "Ramon Cruz",
    items: [
      {
        id: 1,
        name: "Flat Wall Paint 4L (White)",
        category: "Paint & Supplies",
        subcategory: "Wall Paint",
        qty: 2,
        price: 485.0,
      },
      {
        id: 2,
        name: "Paint Roller Set",
        category: "Paint & Supplies",
        subcategory: "Painting Tools",
        qty: 1,
        price: 135.0,
      },
      {
        id: 3,
        name: "Paint Brush 2in",
        category: "Paint & Supplies",
        subcategory: "Painting Tools",
        qty: 3,
        price: 45.0,
      },
      {
        id: 4,
        name: "Masking Tape 1in",
        category: "Adhesives & Tapes",
        subcategory: "Masking Tape",
        qty: 4,
        price: 35.0,
      },
      {
        id: 5,
        name: "Sandpaper 220 Grit (10pcs)",
        category: "Abrasives",
        subcategory: "Sandpaper",
        qty: 2,
        price: 75.0,
      },
      {
        id: 6,
        name: "Putty Knife 3in",
        category: "Hand Tools",
        subcategory: "Scraping Tools",
        qty: 1,
        price: 89.0,
      },
    ],
    subtotal: 1594.0,
    discount: 0.0,
    total: 1594.0,
    tendered: 1600.0,
    change: 6.0,
    payment: "Cash",
  },
  {
    id: "RCP-20260318-00487",
    store: {
      name: "True Value Hardware",
      address: "Brgy. Parian, Calamba, Laguna",
      phone: "+63 49 456 7890",
    },
    date: "2026-03-18T14:30:00",
    cashier: "Noel Bautista",
    items: [
      {
        id: 1,
        name: "PVC Pipe 1/2in x 6ft",
        category: "Plumbing",
        subcategory: "Pipes & Fittings",
        qty: 6,
        price: 65.0,
      },
      {
        id: 2,
        name: "PVC Elbow 1/2in",
        category: "Plumbing",
        subcategory: "Pipes & Fittings",
        qty: 8,
        price: 12.0,
      },
      {
        id: 3,
        name: "PVC Solvent Cement 200ml",
        category: "Plumbing",
        subcategory: "Sealants & Cement",
        qty: 1,
        price: 85.0,
      },
      {
        id: 4,
        name: "Teflon Tape",
        category: "Plumbing",
        subcategory: "Sealants & Cement",
        qty: 3,
        price: 18.0,
      },
      {
        id: 5,
        name: "Ball Valve 1/2in",
        category: "Plumbing",
        subcategory: "Valves & Controls",
        qty: 2,
        price: 145.0,
      },
      {
        id: 6,
        name: "Pipe Wrench 10in",
        category: "Hand Tools",
        subcategory: "Wrenches",
        qty: 1,
        price: 320.0,
      },
    ],
    subtotal: 1100.0,
    discount: 50.0,
    total: 1050.0,
    tendered: 1100.0,
    change: 50.0,
    payment: "Cash",
  },
  {
    id: "RCP-20260317-00462",
    store: {
      name: "Wilcon Depot",
      address: "Diversion Rd, Calamba, Laguna",
      phone: "+63 49 789 0123",
    },
    date: "2026-03-17T11:00:00",
    cashier: "Sheila Ramos",
    items: [
      {
        id: 1,
        name: "Circuit Breaker 20A",
        category: "Electrical",
        subcategory: "Circuit Breakers",
        qty: 2,
        price: 350.0,
      },
      {
        id: 2,
        name: "Electrical Wire 12AWG (10m)",
        category: "Electrical",
        subcategory: "Wires & Cables",
        qty: 3,
        price: 220.0,
      },
      {
        id: 3,
        name: "Outlet w/ Ground 3-gang",
        category: "Electrical",
        subcategory: "Outlets & Switches",
        qty: 4,
        price: 95.0,
      },
      {
        id: 4,
        name: "Junction Box 4x4",
        category: "Electrical",
        subcategory: "Boxes & Conduits",
        qty: 5,
        price: 45.0,
      },
      {
        id: 5,
        name: "Electrical Tape (3-pack)",
        category: "Electrical",
        subcategory: "Tapes & Accessories",
        qty: 2,
        price: 55.0,
      },
      {
        id: 6,
        name: "Voltage Tester Pen",
        category: "Electrical",
        subcategory: "Testing Tools",
        qty: 1,
        price: 189.0,
      },
    ],
    subtotal: 2404.0,
    discount: 100.0,
    total: 2304.0,
    tendered: 2400.0,
    change: 96.0,
    payment: "GCash",
  },
  {
    id: "RCP-20260316-00441",
    store: {
      name: "Ace Hardware",
      address: "SM City Calamba, Brgy. Real",
      phone: "+63 49 321 6547",
    },
    date: "2026-03-16T16:45:00",
    cashier: "Danilo Flores",
    items: [
      {
        id: 1,
        name: "Concrete Hollow Blocks (10pcs)",
        category: "Construction Materials",
        subcategory: "Blocks & Bricks",
        qty: 1,
        price: 450.0,
      },
      {
        id: 2,
        name: "Portland Cement 40kg",
        category: "Construction Materials",
        subcategory: "Cement & Mortar",
        qty: 3,
        price: 285.0,
      },
      {
        id: 3,
        name: "Steel Rebar 10mm x 6m",
        category: "Construction Materials",
        subcategory: "Steel & Metal",
        qty: 5,
        price: 320.0,
      },
      {
        id: 4,
        name: "Gravel 1/2cu (per bag)",
        category: "Construction Materials",
        subcategory: "Aggregates",
        qty: 4,
        price: 95.0,
      },
      {
        id: 5,
        name: "Mason's Trowel 10in",
        category: "Hand Tools",
        subcategory: "Masonry Tools",
        qty: 2,
        price: 115.0,
      },
      {
        id: 6,
        name: "Safety Helmet",
        category: "Safety Equipment",
        subcategory: "Head Protection",
        qty: 2,
        price: 250.0,
      },
    ],
    subtotal: 3990.0,
    discount: 200.0,
    total: 3790.0,
    tendered: 4000.0,
    change: 210.0,
    payment: "Cash",
  },
  {
    id: "RCP-20260315-00418",
    store: {
      name: "Pacific Paint & Hardware",
      address: "JP Rizal Ave, Calamba, Laguna",
      phone: "+63 49 654 3210",
    },
    date: "2026-03-15T10:20:00",
    cashier: "Gloria Tan",
    items: [
      {
        id: 1,
        name: "Hammer Claw 16oz",
        category: "Hand Tools",
        subcategory: "Hammers",
        qty: 1,
        price: 245.0,
      },
      {
        id: 2,
        name: "Screwdriver Set (6pcs)",
        category: "Hand Tools",
        subcategory: "Screwdrivers",
        qty: 1,
        price: 320.0,
      },
      {
        id: 3,
        name: "Measuring Tape 5m",
        category: "Measuring Tools",
        subcategory: "Tape Measures",
        qty: 2,
        price: 155.0,
      },
      {
        id: 4,
        name: "Wood Screw Assorted (100pcs)",
        category: "Fasteners",
        subcategory: "Screws",
        qty: 2,
        price: 85.0,
      },
      {
        id: 5,
        name: "Angle Grinder Disc (5pcs)",
        category: "Power Tool Accessories",
        subcategory: "Grinding Discs",
        qty: 2,
        price: 175.0,
      },
      {
        id: 6,
        name: "Work Gloves (pair)",
        category: "Safety Equipment",
        subcategory: "Hand Protection",
        qty: 3,
        price: 75.0,
      },
    ],
    subtotal: 1545.0,
    discount: 0.0,
    total: 1545.0,
    tendered: 1600.0,
    change: 55.0,
    payment: "Maya",
  },
];

export interface SampleData {
  category: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
  data: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
}

export const sampleData = () => {
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")}`;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const compileReceipts = (sampleReceipts: any[], label: string) => {
    const categoryMap = new Map<string, number>();

    sampleReceipts.forEach((receipt) => {
      receipt.items.forEach(
        (item: { qty: number; price: number; category: string }) => {
          const total = item.qty * item.price;
          const existing = categoryMap.get(item.category) ?? 0;
          categoryMap.set(item.category, existing + total);
        },
      );
    });

    const data = Array.from(categoryMap.entries()).map(([category, total]) => ({
      label: category,
      data: [total],
      backgroundColor: getRandomColor(),
    }));

    const output = {
      category: [
        {
          label: label,
          data: [data.reduce((acc, value) => acc + value.data[0], 0)],
          backgroundColor: getRandomColor(),
        },
      ],
      data: data,
    } as SampleData;

    return output;
  };

  const getData = () => {
    const data = [
      compileReceipts(receipts, "Grocery"),
      compileReceipts(hardwareReceipts, "Hardware"),
    ];

    return data;
  };

  const data = getData();
  return {
    data,
  };
};
