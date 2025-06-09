const menuData = [
  {
    title: "Desserts",
    items: [
      { name: "Sheer Khurma", price: "10.00" },
      { name: "Gulab Jamun (3pc)", price: "6.00" },
      { name: "Kheer", price: "10.00" },
      { name: "Halwa", price: "10.00" },
      { name: "Kulfi Stick", price: "5.00" },
      { name: "Matka Kulfi", price: "7.00" }
    ]
  },
  {
    title: "Hot Drinks",
    items: [
      { name: "Karak Tea", price: "2.00/3.00" },
      { name: "Ginger / Masala Tea (Upsize +1)", price: "3.00/4.00" }
    ]
  },
  {
    title: "Cold Drinks",
    items: [
      { name: "Soft Drinks", price: "4.00" },
      { name: "Pakola", price: "4.00" },
      { name: "Coca Cola", price: "4.00" },
      { name: "Water (Small/Large)", price: "2.00/4.00" }
    ]
  },
  {
    title: "Shakes",
    items: [
      { name: "Ice Cream Shake", price: "10.00" },
      { name: "Strawberry Shake", price: "10.00" },
      { name: "Vanilla Shake", price: "10.00" },
      { name: "Chocolate Shake", price: "10.00" },
      { name: "Mango Milkshake", price: "10.00" },
      { name: "Avocado Milkshake", price: "10.00" },
      {
        name: "Oreo Milkshake",
        price: "12.00",
        description:
          "Ingredients: Ice, Vanilla, Cookies, Milk, Chocolate & Sauce"
      }
    ]
  },
  {
    title: "Lassi",
    items: [
      { name: "Sweet / Salty Lassi", price: "6.50" },
      { name: "Mint Sweet / Salty Lassi", price: "8.00" },
      { name: "Mango Lassi", price: "10.00" }
    ]
  },
  {
    title: "Lemonade",
    items: [
      { name: "Limo Pani", price: "5.00" },
      { name: "Mint Lemonade", price: "8.00" },
      { name: "Lemon Soda", price: "8.00" }
    ]
  },
  {
    title: "Juices",
    items: [
      { name: "Carrot Juice", price: "10.00" },
      { name: "Orange Juice", price: "10.00" }
    ]
  },
  {
    title: "Chaat N Snacks",
    items: [
      { name: "Channa Chaat", price: "11.00" },
      { name: "Samosa Chaat", price: "11.00" },
      { name: "Samosa (1pc)", price: "3.00", description: "(2pc AED 5.00)" },
      { name: "Shami Kabab (3pcs)", price: "9.00" },
      { name: "Aloo Cutlet (3pcs)", price: "9.00" },
      { name: "Vegetable Pakora", price: "7.00" }
    ]
  },
  {
    title: "Starters",
    items: [
      { name: "Dynamite Shrimps", price: "25.00" },
      { name: "Dynamite Chicken", price: "15.00" },
      { name: "Sesame Chicken", price: "15.00" },
      { name: "French Fries", price: "5.00/8.00" },
      { name: "Fried Wings (6pc)", price: "15.00" },
      { name: "Chicken Lollipop Dry (6pc)", price: "18.00" },
      { name: "Chicken Nuggets (6pc) w/ Fries", price: "12.00" }
    ]
  },
  {
    title: "Naan & Paratha",
    items: [
      { name: "Plain Naan", price: "2.00" },
      { name: "Butter Naan / Roti", price: "3.00" },
      { name: "Roghni Naan", price: "4.00" },
      { name: "Garlic Naan", price: "5.00" },
      { name: "Afghani Naan", price: "5.00" },
      { name: "Whole Wheat Roti", price: "2.00" }
    ]
  },
  {
    title: "Stuffed Naan",
    items: [
      { name: "Qeema Chicken", price: "10.00" },
      { name: "Aloo", price: "6.00" },
      { name: "Cheese", price: "10.00" }
    ]
  },
  {
    title: "Stuffed Paratha",
    items: [
      { name: "Aloo Paratha", price: "5.50" },
      { name: "Chicken Paratha", price: "11.00" },
      { name: "Qeema Mutton Paratha", price: "13.00" },
      { name: "Nutella Paratha", price: "10.00" },
      { name: "Gobi Paratha", price: "10.00" },
      { name: "Chicken Cheese", price: "14.00" },
      { name: "Chicken Achari Paratha", price: "15.00" }
    ]
  },
  {
    title: "Paratha",
    items: [
      { name: "Whole Wheat Paratha", price: "2.00" },
      { name: "Puri Paratha", price: "2.50" }
    ]
  },
  {
    title: "Breakfast",
    items: [
      { name: "Paratha Combo (Paratha/Chana/Tea)", price: "10.50" },
      { name: "Paratha Omelette Combo", price: "10.50" },
      { name: "Half/Full Fry/Omelette", price: "5.00" },
      { name: "Cheese Omelette", price: "8.00" },
      { name: "Boiled Egg (2pc)", price: "5.00" },
      { name: "Anda Burji", price: "7.00" }
    ]
  },
  {
    title: "Soup",
    items: [
      { name: "H&S Soup Chicken", price: "12.00" },
      { name: "H&S Soup Veg", price: "10.00" },
      { name: "Corn Soup Chicken", price: "12.00" },
      { name: "Corn Soup Veg", price: "10.00" },
      { name: "Manchow Soup Chicken", price: "12.00" },
      { name: "Manchow Soup Veg", price: "10.00" },
      { name: "MP Special Soup", price: "15.00/20.00" },
      { name: "Lentil Soup", price: "10.00" }
    ]
  },
  {
    title: "Salads",
    items: [
      { name: "Green Salad", price: "10.00" },
      { name: "Fattoush", price: "12.00" },
      { name: "Greek Salad", price: "15.00" },
      { name: "Kachomar Salad/Raita", price: "5.00" }
    ]
  },
  {
    title: "Grills & BBQ Special",
    items: [
      { name: "Charcoal Grill Chicken (Half)", price: "18.00" },
      { name: "Charcoal Grill Chicken (Full)", price: "35.00" },
      { name: "Half Peri Peri Sauce", price: "2.00" },
      { name: "Full Peri Peri Sauce", price: "4.00" },
      { name: "Beef Behari Boti (8pc)", price: "25.00" },
      { name: "Fish Tikka (8pc)", price: "20.00" },
      { name: "Grilled Prawns (10pc)", price: "30.00" },
      {
        name: "Chicken Skewers",
        price: "22.00",
        description: "Malai, Minty Green & Tandoori"
      },
      {
        name: "Vegetable Skewers",
        price: "18.00",
        description: "Paneer, Mushroom, Capsicum & Tomato"
      },
      { name: "Seekh Kabab (Chicken)", price: "22.00" },
      { name: "Seekh Kabab (Mutton)", price: "28.00" },
      {
        name: "Mix Grill (1 Person)",
        price: "25.00",
        description: "1x Mutton Kabab, 1x Chicken Kabab, 1x Skewer"
      },
      {
        name: "Chicken Tikka",
        price: "15.00",
        description: "Charcoal-grilled ¼ chicken in tandoori spices"
      },
      { name: "Chapli Kabab (Chicken)", price: "24.00" },
      { name: "Chapli Kabab (Mutton)", price: "28.00" },
      {
        name: "Grill Platter",
        price: "55.00",
        description:
          "Seekh 2pc, Behari Boti 4pc, Malai Boti 4pc, Seekh 2pc & Fish 1pc"
      }
    ]
  },
  {
    title: "Chinese Cuisine",
    items: [
      { name: "Hakka/Schezwan Noodles (Chicken)", price: "18.00" },
      { name: "Hakka/Schezwan Noodles (Veg)", price: "15.00" },
      { name: "Hakka/Schezwan Noodles (Beef)", price: "21.00" },
      { name: "Hakka/Schezwan Noodles (Prawns)", price: "25.00" },
      { name: "Chicken Manchurian", price: "18.00" },
      { name: "Vegetable Manchurian", price: "18.00" },
      { name: "Chicken Chilli Dry", price: "20.00" },
      { name: "Chilli Dry (Beef/Prawns)", price: "25.00" }
    ]
  },
  {
    title: "Add Ons",
    items: [
      { name: "Side White Rice", price: "5.00" },
      { name: "Side Chicken Fried Rice", price: "8.00" },
      { name: "Side Veg Fried Rice", price: "6.00" },
      { name: "Side Chilli Garlic Fried Rice", price: "10.00" }
    ]
  },
  {
    title: "Paratha Rolls",
    items: [
      { name: "Chicken Garlic Mayo Roll", price: "12.00" },
      { name: "Omelette Paratha Roll (8oz)", price: "8.00" },
      { name: "Chicken Seekh Roll", price: "12.00" },
      { name: "Mutton Seekh Roll", price: "12.00" },
      { name: "Malai Boti Roll", price: "12.00" },
      { name: "Chicken Behari Roll", price: "13.00" },
      { name: "Beef Behari Roll", price: "15.00" },
      { name: "Chicken Cheese Roll", price: "13.00" },
      { name: "Chicken Chutney Roll", price: "13.00" }
    ]
  },
  {
    title: "Sandwiches & Burgers",
    items: [
      { name: "Chicken Mayo Sandwich", price: "6.00" },
      { name: "Omelette Sandwich (2pc)", price: "7.00" },
      { name: "Club Sandwich", price: "15.00" },
      { name: "Crispy Burger", price: "13.00" },
      { name: "Chicken Burger", price: "10.00" },
      { name: "Vegetable Burger", price: "10.00" },
      { name: "Chapli Burger (Chicken)", price: "15.00" },
      { name: "Chapli Burger (Beef)", price: "18.00" }
    ]
  },
  {
    title: "Shawarma",
    items: [
      { name: "Small Shawarma", price: "6.00" },
      { name: "Large Shawarma", price: "10.00" },
      { name: "Anda Shami Kabab", price: "10.00" }
    ]
  },
  {
    title: "Rice Specialties",
    items: [
      { name: "Afghani Chicken Pulao", price: "20.00" },
      { name: "Afghani Mutton Pulao", price: "28.00" },
      { name: "Afghani Plain Rice", price: "15.00" },
      { name: "Chicken Pulao", price: "18.00" },
      { name: "Mutton Pulao", price: "25.00" },
      { name: "Vegetable Pulao", price: "13.00" },
      { name: "Chicken Biryani", price: "18.00" },
      { name: "Mutton Biryani", price: "22.00" },
      { name: "Vegetable Biryani", price: "13.00" },
      { name: "BBQ Biryani (Chicken Tikka ¼)", price: "20.00" },
      { name: "BBQ Biryani (Seekh Kabab 2pc)", price: "20.00" },
      { name: "BBQ Biryani (Mutton Seekh Kabab)", price: "22.00" },
      { name: "BBQ Pulao (Chicken Tikka)", price: "20.00" },
      { name: "BBQ Pulao (Seekh Kabab 2pc)", price: "20.00" },
      { name: "BBQ Pulao (Mutton Seekh Kabab)", price: "22.00" },
      { name: "Steamed White Rice", price: "8.00" },
      { name: "Zeera Rice", price: "10.00" },
      { name: "Pulao / Biryani Rice", price: "10.00" },
      {
        name: "MP Special Rice Bucket (4pc Shami + 5pc Chicken)",
        price: "45.00"
      },
      { name: "Vegetable Fried Rice", price: "18.00" },
      { name: "Egg Fried Rice", price: "20.00" },
      { name: "Chicken Fried Rice", price: "20.00" },
      { name: "Prawns Fried Rice", price: "25.00" }
    ]
  },
  {
    title: "Karahi",
    items: [
      { name: "Chicken Peshawari", price: "22.00" },
      { name: "Mutton Peshawari", price: "32.00" },
      { name: "MP Special Chicken Highway Karahi", price: "22.00" },
      { name: "Mutton Highway Karahi", price: "32.00" },
      { name: "Chicken Shinwari Karahi", price: "25.00" },
      { name: "Mutton Shinwari Karahi", price: "35.00" },
      { name: "Chicken White Karahi (Bone)", price: "22.00" },
      { name: "Chicken Black Pepper Karahi", price: "22.00" },
      { name: "Mutton Black Pepper Karahi", price: "32.00" }
    ]
  },
  {
    title: "Kabab Karahi",
    items: [
      { name: "Chicken Kabab Karahi", price: "20.00" },
      { name: "Mutton Kabab Karahi", price: "25.00" }
    ]
  },
  {
    title: "Handi",
    items: [
      { name: "Chicken Lahori Handi", price: "26.00" },
      { name: "Mutton Lahori Handi", price: "38.00" },
      { name: "Chicken Reshmi Handi", price: "26.00" },
      { name: "White Chicken Handi", price: "26.00" }
    ]
  },
  {
    title: "Curries",
    items: [
      { name: "Butter Chicken", price: "26.00" },
      { name: "Paneer Makhni", price: "20.00" },
      { name: "Prawns Masala", price: "30.00" },
      { name: "Jalfrezi Chicken", price: "24.00" },
      { name: "Ginger Chicken", price: "24.00" },
      { name: "Chicken Qorma", price: "15.00" },
      { name: "Mutton Qorma", price: "22.00" }
    ]
  },
  {
    title: "Tawa Qeema",
    items: [
      { name: "Aaloo Qeema", price: "18.00" },
      { name: "Mutter Qeema", price: "18.00" },
      { name: "Mutton Qeema", price: "22.00" }
    ]
  },
  {
    title: "Dal",
    items: [
      { name: "MP Special Dal", price: "12.00" },
      { name: "Rajma", price: "11.00" },
      { name: "Chana", price: "6.00/10.00" },
      { name: "Anda Chana", price: "13.00" },
      { name: "Dal Makhni", price: "13.00" },
      { name: "Dal Mash Fry", price: "13.00" },
      { name: "Murgh Chana", price: "18.00" }
    ]
  },
  {
    title: "Curry Rice Combo",
    items: [
      { name: "Chicken Curry", price: "15.00" },
      { name: "Butter Chicken", price: "15.00" },
      { name: "Chicken Handi", price: "17.00" }
    ]
  },
  {
    title: "Special Karahi",
    items: [
      { name: "Chicken Karahi (Half/Full)", price: "30.00/60.00" },
      { name: "Mutton Karahi (Half/Full)", price: "35.00/70.00" }
    ]
  },
  {
    title: "Vegetable",
    items: [
      { name: "Aaloo Tarkari", price: "10.00" },
      { name: "Palak Paneer", price: "13.00" },
      { name: "Mutter Paneer", price: "15.00" },
      { name: "Bhindi Masala", price: "15.00" },
      { name: "Dal Chawal", price: "10.00" },
      { name: "Vegetable Karahi", price: "15.00" },
      { name: "Paneer Handi", price: "15.00" },
      { name: "Vegetable Thali", price: "30.00" },
      { name: "Non Veg Thali", price: "40.00" }
    ]
  },
  {
    title: "Weekend Special",
    items: [
      {
        name: "Halwa Puri Combo",
        price: "15.00",
        description: "Chana, Aaloo Tarkari, Halwa & 2pc Puri"
      },
      { name: "Haleem", price: "12.00/16.00" },
      { name: "Nihari", price: "13.00/18.00" },
      { name: "Small Aaloo Tarkari", price: "6.00" },
      { name: "Small Halwa", price: "4.00" },
      { name: "Puri (1pc)", price: "3.00" }
    ]
  }
];

export default menuData;
