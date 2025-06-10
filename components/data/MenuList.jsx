// data/MenuList.js

const menuData = [
  {
    title: "Desserts",
    items: [
      {
        name: "Sheer Khurma",
        price: "10.00",
        image: "/images/dessert.jpg"
      },
      {
        name: "Gulab Jamun (3pc)",
        price: "6.00",
        image: "/images/gulab-jamun-3pc.jpg"
      },
      {
        name: "Kheer",
        price: "10.00",
        image: "/images/kheer.jpg"
      },
      {
        name: "Halwa",
        price: "10.00",
        image: "/images/halwa.jpg"
      },
      {
        name: "Kulfi Stick",
        price: "5.00",
        image: "/images/kulfi-stick.jpg"
      },
      {
        name: "Matka Kulfi",
        price: "7.00",
        image: "/images/matka-kulfi.jpg"
      }
    ]
  },
  {
    title: "Hot Drinks",
    items: [
      {
        name: "Karak Tea",
        price: "2.00/3.00",
        image: "/images/karak-tea.jpg"
      },
      {
        name: "Ginger / Masala Tea (Upsize +1)",
        price: "3.00/4.00",
        image: "/images/ginger-masala-tea-upsize-1.jpg"
      }
    ]
  },
  {
    title: "Cold Drinks",
    items: [
      {
        name: "Soft Drinks",
        price: "4.00",
        image: "/images/soft-drinks.jpg"
      },
      {
        name: "Pakola",
        price: "4.00",
        image: "/images/pakola.jpg"
      },
      {
        name: "Coca Cola",
        price: "4.00",
        image: "/images/cocacola.jpg"
      },
      {
        name: "Water (Small/Large)",
        price: "2.00/4.00",
        image: "/images/water-small-large.jpg"
      }
    ]
  },
  {
    title: "Shakes",
    items: [
      {
        name: "Ice Cream Shake",
        price: "10.00",
        image: "/images/ice-cream-shake.jpg"
      },
      {
        name: "Strawberry Shake",
        price: "10.00",
        image: "/images/strawberry-shake.jpg"
      },
      {
        name: "Vanilla Shake",
        price: "10.00",
        image: "/images/vanilla-shake.jpg"
      },
      {
        name: "Chocolate Shake",
        price: "10.00",
        image: "/images/chocolate-shake.jpg"
      },
      {
        name: "Mango Milkshake",
        price: "10.00",
        image: "/images/mango-milkshake.jpg"
      },
      {
        name: "Avocado Milkshake",
        price: "10.00",
        image: "/images/avocado-milkshake.jpg"
      },
      {
        name: "Oreo Milkshake",
        price: "12.00",
        description:
          "Ingredients: Ice, Vanilla, Cookies, Milk, Chocolate & Sauce",
        image: "/images/oreo-milkshake.jpg"
      }
    ]
  },
  {
    title: "Lassi",
    items: [
      {
        name: "Sweet / Salty Lassi",
        price: "6.50",
        image: "/images/sweet-salty-lassi.jpg"
      },
      {
        name: "Mint Sweet / Salty Lassi",
        price: "8.00",
        image: "/images/mint-sweet-salty-lassi.jpg"
      },
      {
        name: "Mango Lassi",
        price: "10.00",
        image: "/images/mango-lassi.jpg"
      }
    ]
  },
  {
    title: "Lemonade",
    items: [
      {
        name: "Limo Pani",
        price: "5.00",
        image: "/images/limo-pani.jpg"
      },
      {
        name: "Mint Lemonade",
        price: "8.00",
        image: "/images/mint-lemonade.jpg"
      },
      {
        name: "Lemon Soda",
        price: "8.00",
        image: "/images/lemon-soda.jpg"
      }
    ]
  },
  {
    title: "Juices",
    items: [
      {
        name: "Carrot Juice",
        price: "10.00",
        image: "/images/carrotjuices.jpg"
      },
      {
        name: "Orange Juice",
        price: "10.00",
        image: "/images/orange-juice.jpg"
      }
    ]
  },
  {
    title: "Chaat N Snacks",
    items: [
      {
        name: "Channa Chaat",
        price: "11.00",
        image: "/images/channa-chaat.jpg"
      },
      {
        name: "Samosa Chaat",
        price: "11.00",
        image: "/images/samosachaat.jpg"
      },
      {
        name: "Samosa (1pc)",
        price: "3.00",
        description: "(2pc AED 5.00)",
        image: "/images/samosa-1pc.jpg"
      },
      {
        name: "Shami Kabab (3pcs)",
        price: "9.00",
        image: "/images/shami-kabab-3pcs.jpg"
      },
      {
        name: "Aloo Cutlet (3pcs)",
        price: "9.00",
        image: "/images/aloo-cutlet-3pcs.jpg"
      },
      {
        name: "Vegetable Pakora",
        price: "7.00",
        image: "/images/vegetable-pakora.jpg"
      }
    ]
  },
  {
    title: "Starters",
    items: [
      {
        name: "Dynamite Shrimps",
        price: "25.00",
        image: "/images/dynamite-shrimps.jpg"
      },
      {
        name: "Dynamite Chicken",
        price: "15.00",
        image: "/images/dynamite-chicken.jpg"
      },
      {
        name: "Sesame Chicken",
        price: "15.00",
        image: "/images/sesame-chicken.jpg"
      },
      {
        name: "French Fries",
        price: "5.00/8.00",
        image: "/images/french-fries.jpg"
      },
      {
        name: "Fried Wings (6pc)",
        price: "15.00",
        image: "/images/fried-wings-6pc.jpg"
      },
      {
        name: "Chicken Lollipop Dry (6pc)",
        price: "18.00",
        image: "/images/chicken-lollipop-dry-6pc.jpg"
      },
      {
        name: "Chicken Nuggets (6pc) w/ Fries",
        price: "12.00",
        image: "/images/chicken-nuggets-6pc-fries.jpg"
      }
    ]
  },
  {
    title: "Naan & Paratha",
    items: [
      {
        name: "Plain Naan",
        price: "2.00",
        image: "/images/plain-naan.jpg"
      },
      {
        name: "Butter Naan / Roti",
        price: "3.00",
        image: "/images/butter-naan-roti.jpg"
      },
      {
        name: "Roghni Naan",
        price: "4.00",
        image: "/images/roghni-naan.jpg"
      },
      {
        name: "Garlic Naan",
        price: "5.00",
        image: "/images/garlic-naan.jpg"
      },
      {
        name: "Afghani Naan",
        price: "5.00",
        image: "/images/afghani-naan.jpg"
      },
      {
        name: "Whole Wheat Roti",
        price: "2.00",
        image: "/images/whole-wheat-roti.jpg"
      }
    ]
  },
  {
    title: "Stuffed Naan",
    items: [
      {
        name: "Qeema Chicken",
        price: "10.00",
        image: "/images/qeema-chicken.jpg"
      },
      {
        name: "Aloo",
        price: "6.00",
        image: "/images/aloo-naan.jpg"
      },
      {
        name: "Cheese",
        price: "10.00",
        image: "/images/cheese-naan.jpg"
      }
    ]
  },
  {
    title: "Stuffed Paratha",
    items: [
      {
        name: "Aloo Paratha",
        price: "5.50",
        image: "/images/aloo-paratha.jpg"
      },
      {
        name: "Chicken Paratha",
        price: "11.00",
        image: "/images/chicken-paratha.jpg"
      },
      {
        name: "Qeema Mutton Paratha",
        price: "13.00",
        image: "/images/qeema-mutton-paratha.jpg"
      },
      {
        name: "Nutella Paratha",
        price: "10.00",
        image: "/images/nutella-paratha.jpg"
      },
      {
        name: "Gobi Paratha",
        price: "10.00",
        image: "/images/gobi-paratha.jpg"
      },
      {
        name: "Chicken Cheese",
        price: "14.00",
        image: "/images/chicken-cheese-paratha.jpg"
      },
      {
        name: "Chicken Achari Paratha",
        price: "15.00",
        image: "/images/chicken-achari-paratha.jpg"
      }
    ]
  },
  {
    title: "Paratha",
    items: [
      {
        name: "Whole Wheat Paratha",
        price: "2.00",
        image: "/images/whole-wheat-paratha.jpg"
      },
      {
        name: "Puri Paratha",
        price: "2.50",
        image: "/images/puri-paratha.jpg"
      }
    ]
  },
  {
    title: "Breakfast",
    items: [
      {
        name: "Paratha Combo (Paratha/Chana/Tea)",
        price: "10.50",
        image: "/images/paratha-combo.jpg"
      },
      {
        name: "Paratha Omelette Combo",
        price: "10.50",
        image: "/images/paratha-omelette-combo.jpg"
      },
      {
        name: "Half/Full Fry/Omelette",
        price: "5.00",
        image: "/images/half-full-fry-omelette.jpg"
      },
      {
        name: "Cheese Omelette",
        price: "8.00",
        image: "/images/cheese-omelette.jpg"
      },
      {
        name: "Boiled Egg (2pc)",
        price: "5.00",
        image: "/images/boiled-egg-2pc.jpg"
      },
      {
        name: "Anda Burji",
        price: "7.00",
        image: "/images/anda-burji.jpg"
      }
    ]
  },
  {
    title: "Soup",
    items: [
      {
        name: "H&S Soup Chicken",
        price: "12.00",
        image: "/images/soupchicken.jpg"
      },
      {
        name: "H&S Soup Veg",
        price: "10.00",
        image: "/images/soupveg.jpg"
      },
      {
        name: "Corn Soup Chicken",
        price: "12.00",
        image: "/images/corn-soup-chicken.jpg"
      },
      {
        name: "Corn Soup Veg",
        price: "10.00",
        image: "/images/corn-soup-veg.jpg"
      },
      {
        name: "Manchow Soup Chicken",
        price: "12.00",
        image: "/images/manchow-soup-chicken.jpg"
      },
      {
        name: "Manchow Soup Veg",
        price: "10.00",
        image: "/images/manchow-soup-veg.jpg"
      },
      {
        name: "MP Special Soup",
        price: "15.00/20.00",
        image: "/images/mp-special-soup.jpg"
      },
      {
        name: "Lentil Soup",
        price: "10.00",
        image: "/images/lentil-soup.jpg"
      }
    ]
  },
  {
    title: "Salads",
    items: [
      {
        name: "Green Salad",
        price: "10.00",
        image: "/images/green-salad.jpg"
      },
      {
        name: "Fattoush",
        price: "12.00",
        image: "/images/fattoush.jpg"
      },
      {
        name: "Greek Salad",
        price: "15.00",
        image: "/images/greek-salad.jpg"
      },
      {
        name: "Kachomar Salad/Raita",
        price: "5.00",
        image: "/images/kachomar-salad-raita.jpg"
      }
    ]
  },
  {
    title: "Grills & BBQ Special",
    items: [
      {
        name: "Charcoal Grill Chicken (Half)",
        price: "18.00",
        image: "/images/charcoalgrillchicken.jpg"
      },
      {
        name: "Charcoal Grill Chicken (Full)",
        price: "35.00",
        image: "/images/charcoal-grill-chicken-full.jpg"
      },
      {
        name: "Half Peri Peri Sauce",
        price: "2.00",
        image: "/images/half-peri-peri-sauce.jpg"
      },
      {
        name: "Full Peri Peri Sauce",
        price: "4.00",
        image: "/images/full-peri-peri-sauce.jpg"
      },
      {
        name: "Beef Behari Boti (8pc)",
        price: "25.00",
        image: "/images/beef-behari-boti-8pc.jpg"
      },
      {
        name: "Fish Tikka (8pc)",
        price: "20.00",
        image: "/images/fish-tikka-8pc.jpg"
      },
      {
        name: "Grilled Prawns (10pc)",
        price: "30.00",
        image: "/images/grilled-prawns-10pc.jpg"
      },
      {
        name: "Chicken Skewers",
        price: "22.00",
        description: "Malai, Minty Green & Tandoori",
        image: "/images/chicken-skewers.jpg"
      },
      {
        name: "Vegetable Skewers",
        price: "18.00",
        description: "Paneer, Mushroom, Capsicum & Tomato",
        image: "/images/vegetable-skewers.jpg"
      },
      {
        name: "Seekh Kabab (Chicken)",
        price: "22.00",
        image: "/images/seekh-kabab-chicken.jpg"
      },
      {
        name: "Seekh Kabab (Mutton)",
        price: "28.00",
        image: "/images/seekh-kabab-mutton.jpg"
      },
      {
        name: "Mix Grill (1 Person)",
        price: "25.00",
        description: "1x Mutton Kabab, 1x Chicken Kabab, 1x Skewer",
        image: "/images/mix-grill-1-person.jpg"
      },
      {
        name: "Chicken Tikka",
        price: "15.00",
        description: "Charcoal-grilled ¼ chicken in tandoori spices",
        image: "/images/chicken-tikka.jpg"
      },
      {
        name: "Chapli Kabab (Chicken)",
        price: "24.00",
        image: "/images/chapli-kabab-chicken.jpg"
      },
      {
        name: "Chapli Kabab (Mutton)",
        price: "28.00",
        image: "/images/chapli-kabab-mutton.jpg"
      },
      {
        name: "Grill Platter",
        price: "55.00",
        description:
          "Seekh 2pc, Behari Boti 4pc, Malai Boti 4pc, Seekh 2pc & Fish 1pc",
        image: "/images/grill-platter.jpg"
      }
    ]
  },
  {
    title: "Chinese Cuisine",
    items: [
      {
        name: "Hakka/Schezwan Noodles (Chicken)",
        price: "18.00",
        image: "/images/hakka-schezwan-noodles-chicken.jpg"
      },
      {
        name: "Hakka/Schezwan Noodles (Veg)",
        price: "15.00",
        image: "/images/hakka-schezwan-noodles-veg.jpg"
      },
      {
        name: "Hakka/Schezwan Noodles (Beef)",
        price: "21.00",
        image: "/images/hakka-schezwan-noodles-beef.jpg"
      },
      {
        name: "Hakka/Schezwan Noodles (Prawns)",
        price: "25.00",
        image: "/images/hakka-schezwan-noodles-prawns.jpg"
      },
      {
        name: "Chicken Manchurian",
        price: "18.00",
        image: "/images/chicken-manchurian.jpg"
      },
      {
        name: "Vegetable Manchurian",
        price: "18.00",
        image: "/images/vegetable-manchurian.jpg"
      },
      {
        name: "Chicken Chilli Dry",
        price: "20.00",
        image: "/images/chicken-chilli-dry.jpg"
      },
      {
        name: "Chilli Dry (Beef/Prawns)",
        price: "25.00",
        image: "/images/chilli-dry-beef-prawns.jpg"
      }
    ]
  },
  {
    title: "Add Ons",
    items: [
      {
        name: "Side White Rice",
        price: "5.00",
        image: "/images/side-white-rice.jpg"
      },
      {
        name: "Side Chicken Fried Rice",
        price: "8.00",
        image: "/images/side-chicken-fried-rice.jpg"
      },
      {
        name: "Side Veg Fried Rice",
        price: "6.00",
        image: "/images/side-veg-fried-rice.jpg"
      },
      {
        name: "Side Chilli Garlic Fried Rice",
        price: "10.00",
        image: "/images/side-chilli-garlic-fried-rice.jpg"
      }
    ]
  },
  {
    title: "Paratha Rolls",
    items: [
      {
        name: "Chicken Garlic Mayo Roll",
        price: "12.00",
        image: "/images/chicken-garlic-mayo-roll.jpg"
      },
      {
        name: "Omelette Paratha Roll (8oz)",
        price: "8.00",
        image: "/images/omelette-paratha-roll-8oz.jpg"
      },
      {
        name: "Chicken Seekh Roll",
        price: "12.00",
        image: "/images/chicken-seekh-roll.jpg"
      },
      {
        name: "Mutton Seekh Roll",
        price: "12.00",
        image: "/images/mutton-seekh-roll.jpg"
      },
      {
        name: "Malai Boti Roll",
        price: "12.00",
        image: "/images/malai-boti-roll.jpg"
      },
      {
        name: "Chicken Behari Roll",
        price: "13.00",
        image: "/images/chicken-behari-roll.jpg"
      },
      {
        name: "Beef Behari Roll",
        price: "15.00",
        image: "/images/beef-behari-roll.jpg"
      },
      {
        name: "Chicken Cheese Roll",
        price: "13.00",
        image: "/images/chicken-cheese-roll.jpg"
      },
      {
        name: "Chicken Chutney Roll",
        price: "13.00",
        image: "/images/chicken-chutney-roll.jpg"
      }
    ]
  },
  {
    title: "Sandwiches & Burgers",
    items: [
      {
        name: "Chicken Mayo Sandwich",
        price: "6.00",
        image: "/images/chicken-mayo-sandwich.jpg"
      },
      {
        name: "Omelette Sandwich (2pc)",
        price: "7.00",
        image: "/images/omelette-sandwich-2pc.jpg"
      },
      {
        name: "Club Sandwich",
        price: "15.00",
        image: "/images/club-sandwich.jpg"
      },
      {
        name: "Crispy Burger",
        price: "13.00",
        image: "/images/crispy-burger.jpg"
      },
      {
        name: "Chicken Burger",
        price: "10.00",
        image: "/images/chicken-burger.jpg"
      },
      {
        name: "Vegetable Burger",
        price: "10.00",
        image: "/images/vegetable-burger.jpg"
      },
      {
        name: "Chapli Burger (Chicken)",
        price: "15.00",
        image: "/images/chapli-burger-chicken.jpg"
      },
      {
        name: "Chapli Burger (Beef)",
        price: "18.00",
        image: "/images/chapli-burger-beef.jpg"
      }
    ]
  },
  {
    title: "Shawarma",
    items: [
      {
        name: "Small Shawarma",
        price: "6.00",
        image: "/images/small-shawarma.jpg"
      },
      {
        name: "Large Shawarma",
        price: "10.00",
        image: "/images/large-shawarma.jpg"
      },
      {
        name: "Anda Shami Kabab",
        price: "10.00",
        image: "/images/anda-shami-kabab.jpg"
      }
    ]
  },
  {
    title: "Rice Specialties",
    items: [
      {
        name: "Afghani Chicken Pulao",
        price: "20.00",
        image: "/images/afghanichickenpulao.jpg"
      },
      {
        name: "Afghani Mutton Pulao",
        price: "28.00",
        image: "/images/afghani-mutton-pulao.jpg"
      },
      {
        name: "Afghani Plain Rice",
        price: "15.00",
        image: "/images/afghani-plain-rice.jpg"
      },
      {
        name: "Chicken Pulao",
        price: "18.00",
        image: "/images/chicken-pulao.jpg"
      },
      {
        name: "Mutton Pulao",
        price: "25.00",
        image: "/images/mutton-pulao.jpg"
      },
      {
        name: "Vegetable Pulao",
        price: "13.00",
        image: "/images/vegetable-pulao.jpg"
      },
      {
        name: "Chicken Biryani",
        price: "18.00",
        image: "/images/chicken-biryani.jpg"
      },
      {
        name: "Mutton Biryani",
        price: "22.00",
        image: "/images/mutton-biryani.jpg"
      },
      {
        name: "Vegetable Biryani",
        price: "13.00",
        image: "/images/vegetable-biryani.jpg"
      },
      {
        name: "BBQ Biryani (Chicken Tikka ¼)",
        price: "20.00",
        image: "/images/bbq-biryani-chicken-tikka.jpg"
      },
      {
        name: "BBQ Biryani (Seekh Kabab 2pc)",
        price: "20.00",
        image: "/images/bbq-biryani-seekh-kabab.jpg"
      },
      {
        name: "BBQ Biryani (Mutton Seekh Kabab)",
        price: "22.00",
        image: "/images/bbq-biryani-mutton-seekh-kabab.jpg"
      },
      {
        name: "BBQ Pulao (Chicken Tikka)",
        price: "20.00",
        image: "/images/bbq-pulao-chicken-tikka.jpg"
      },
      {
        name: "BBQ Pulao (Seekh Kabab 2pc)",
        price: "20.00",
        image: "/images/bbq-pulao-seekh-kabab.jpg"
      },
      {
        name: "BBQ Pulao (Mutton Seekh Kabab)",
        price: "22.00",
        image: "/images/bbq-pulao-mutton-seekh-kabab.jpg"
      },
      {
        name: "Steamed White Rice",
        price: "8.00",
        image: "/images/steamed-white-rice.jpg"
      },
      {
        name: "Zeera Rice",
        price: "10.00",
        image: "/images/zeera-rice.jpg"
      },
      {
        name: "Pulao / Biryani Rice",
        price: "10.00",
        image: "/images/pulao-biryani-rice.jpg"
      },
      {
        name: "MP Special Rice Bucket (4pc Shami + 5pc Chicken)",
        price: "45.00",
        image: "/images/mp-special-rice-bucket.jpg"
      },
      {
        name: "Vegetable Fried Rice",
        price: "18.00",
        image: "/images/vegetable-fried-rice.jpg"
      },
      {
        name: "Egg Fried Rice",
        price: "20.00",
        image: "/images/egg-fried-rice.jpg"
      },
      {
        name: "Chicken Fried Rice",
        price: "20.00",
        image: "/images/chicken-fried-rice.jpg"
      },
      {
        name: "Prawns Fried Rice",
        price: "25.00",
        image: "/images/prawns-fried-rice.jpg"
      }
    ]
  },
  {
    title: "Karahi",
    items: [
      {
        name: "Chicken Peshawari",
        price: "22.00",
        image: "/images/chicken-peshawari.jpg"
      },
      {
        name: "Mutton Peshawari",
        price: "32.00",
        image: "/images/mutton-peshawari.jpg"
      },
      {
        name: "MP Special Chicken Highway Karahi",
        price: "22.00",
        image: "/images/mp-special-chicken-highway-karahi.jpg"
      },
      {
        name: "Mutton Highway Karahi",
        price: "32.00",
        image: "/images/mutton-highway-karahi.jpg"
      },
      {
        name: "Chicken Shinwari Karahi",
        price: "25.00",
        image: "/images/chicken-shinwari-karahi.jpg"
      },
      {
        name: "Mutton Shinwari Karahi",
        price: "35.00",
        image: "/images/mutton-shinwari-karahi.jpg"
      },
      {
        name: "Chicken White Karahi (Bone)",
        price: "22.00",
        image: "/images/chicken-white-karahi-bone.jpg"
      },
      {
        name: "Chicken Black Pepper Karahi",
        price: "22.00",
        image: "/images/chicken-black-pepper-karahi.jpg"
      },
      {
        name: "Mutton Black Pepper Karahi",
        price: "32.00",
        image: "/images/mutton-black-pepper-karahi.jpg"
      }
    ]
  },
  {
    title: "Kabab Karahi",
    items: [
      {
        name: "Chicken Kabab Karahi",
        price: "20.00",
        image: "/images/chicken-kabab-karahi.jpg"
      },
      {
        name: "Mutton Kabab Karahi",
        price: "25.00",
        image: "/images/mutton-kabab-karahi.jpg"
      }
    ]
  },
  {
    title: "Handi",
    items: [
      {
        name: "Chicken Lahori Handi",
        price: "26.00",
        image: "/images/chicken-lahori-handi.jpg"
      },
      {
        name: "Mutton Lahori Handi",
        price: "38.00",
        image: "/images/mutton-lahori-handi.jpg"
      },
      {
        name: "Chicken Reshmi Handi",
        price: "26.00",
        image: "/images/chicken-reshmi-handi.jpg"
      },
      {
        name: "White Chicken Handi",
        price: "26.00",
        image: "/images/white-chicken-handi.jpg"
      }
    ]
  },
  {
    title: "Curries",
    items: [
      {
        name: "Butter Chicken",
        price: "26.00",
        image: "/images/butter-chicken.jpg"
      },
      {
        name: "Paneer Makhni",
        price: "20.00",
        image: "/images/paneer-makhni.jpg"
      },
      {
        name: "Prawns Masala",
        price: "30.00",
        image: "/images/prawns-masala.jpg"
      },
      {
        name: "Jalfrezi Chicken",
        price: "24.00",
        image: "/images/jalfrezi-chicken.jpg"
      },
      {
        name: "Ginger Chicken",
        price: "24.00",
        image: "/images/ginger-chicken.jpg"
      },
      {
        name: "Chicken Qorma",
        price: "15.00",
        image: "/images/chicken-qorma.jpg"
      },
      {
        name: "Mutton Qorma",
        price: "22.00",
        image: "/images/mutton-qorma.jpg"
      }
    ]
  },

  {
    title: "Tawa Qeema",
    items: [
      {
        name: "Aaloo Qeema",
        price: "18.00",
        image: "/images/aaloo-qeema.jpg"
      },
      {
        name: "Mutter Qeema",
        price: "18.00",
        image: "/images/mutter-qeema.jpg"
      },
      {
        name: "Mutton Qeema",
        price: "22.00",
        image: "/images/mutton-qeema.jpg"
      }
    ]
  },
  {
    title: "Dal",
    items: [
      {
        name: "MP Special Dal",
        price: "12.00",
        image: "/images/mp-special-dal.jpg"
      },
      {
        name: "Rajma",
        price: "11.00",
        image: "/images/rajma.jpg"
      },
      {
        name: "Chana",
        price: "6.00/10.00",
        image: "/images/chana.jpg"
      },
      {
        name: "Anda Chana",
        price: "13.00",
        image: "/images/anda-chana.jpg"
      },
      {
        name: "Dal Makhni",
        price: "13.00",
        image: "/images/dal-makhni.jpg"
      },
      {
        name: "Dal Mash Fry",
        price: "13.00",
        image: "/images/dal-mash-fry.jpg"
      },
      {
        name: "Murgh Chana",
        price: "18.00",
        image: "/images/murgh-chana.jpg"
      }
    ]
  },
  {
    title: "Curry Rice Combo",
    items: [
      {
        name: "Chicken Curry",
        price: "15.00",
        image: "/images/chicken-curry.jpg"
      },
      {
        name: "Butter Chicken",
        price: "15.00",
        image: "/images/butter-chicken.jpg"
      },
      {
        name: "Chicken Handi",
        price: "17.00",
        image: "/images/chicken-handi.jpg"
      }
    ]
  },
  {
    title: "Special Karahi",
    items: [
      {
        name: "Chicken Karahi (Half/Full)",
        price: "30.00/60.00",
        image: "/images/chicken-karahi-half-full.jpg"
      },
      {
        name: "Mutton Karahi (Half/Full)",
        price: "35.00/70.00",
        image: "/images/mutton-karahi-half-full.jpg"
      }
    ]
  },
  {
    title: "Vegetable",
    items: [
      {
        name: "Aaloo Tarkari",
        price: "10.00",
        image: "/images/aaloo-tarkari.jpg"
      },
      {
        name: "Palak Paneer",
        price: "13.00",
        image: "/images/palak-paneer.jpg"
      },
      {
        name: "Mutter Paneer",
        price: "15.00",
        image: "/images/mutter-paneer.jpg"
      },
      {
        name: "Bhindi Masala",
        price: "15.00",
        image: "/images/bhindi-masala.jpg"
      },
      {
        name: "Dal Chawal",
        price: "10.00",
        image: "/images/dal-chawal.jpg"
      },
      {
        name: "Vegetable Karahi",
        price: "15.00",
        image: "/images/vegetable-karahi.jpg"
      },
      {
        name: "Paneer Handi",
        price: "15.00",
        image: "/images/paneer-handi.jpg"
      },
      {
        name: "Vegetable Thali",
        price: "30.00",
        image: "/images/vegetable-thali.jpg"
      },
      {
        name: "Non Veg Thali",
        price: "40.00",
        image: "/images/non-veg-thali.jpg"
      }
    ]
  },
  {
    title: "Weekend Special",
    items: [
      {
        name: "Halwa Puri Combo",
        price: "15.00",
        description: "Chana, Aaloo Tarkari, Halwa & 2pc Puri",
        image: "/images/halwa-puri-combo.jpg"
      },
      {
        name: "Haleem",
        price: "12.00/16.00",
        image: "/images/haleem.jpg"
      },
      {
        name: "Nihari",
        price: "13.00/18.00",
        image: "/images/nihari.jpg"
      },
      {
        name: "Small Aaloo Tarkari",
        price: "6.00",
        image: "/images/small-aaloo-tarkari.jpg"
      },
      {
        name: "Small Halwa",
        price: "4.00",
        image: "/images/small-halwa.jpg"
      },
      {
        name: "Puri (1pc)",
        price: "3.00",
        image: "/images/puri-1pc.jpg"
      }
    ]
  }
];

export default menuData;
