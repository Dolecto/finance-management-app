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

const maxValue = 10000;

export const sampleData = () => {
  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")}`;
  };
  const getDetailedData = () => {
    const categoryMap = new Map<string, number>();

    receipts.forEach((receipt) => {
      receipt.items.forEach((item) => {
        const total = item.qty * item.price;
        const existing = categoryMap.get(item.category) ?? 0;
        categoryMap.set(item.category, existing + total);
      });
    });

    const data = Array.from(categoryMap.entries()).map(([category, total]) => ({
      label: category,
      data: [total],
      backgroundColor: getRandomColor(),
    }));

    data.push({
      label: "Free",
      data: [maxValue - data.reduce((acc, value) => acc + value.data[0], 0)],
      backgroundColor: "rgba(72, 72, 72, 0.5)",
    });

    return data;
  };

  const getSummarizedData = () => {
    const data = receipts.reduce(
      (accumulator, itemData) =>
        accumulator +
        itemData.items.reduce((acc, value) => acc + value.price * value.qty, 0),
      0,
    );
    const item = [
      {
        label: "Grocery",
        data: [data],
        backgroundColor: getRandomColor(),
      },
      {
        label: "Free",
        data: [maxValue - data],
        backgroundColor: "rgba(72, 72, 72, 0.5)",
      },
    ];
    return item;
  };

  const detailedData = getDetailedData();
  const summarizedData = getSummarizedData();
  return {
    detailedData,
    summarizedData,
  };
};
