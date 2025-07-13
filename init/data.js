const sampleListings = [
  {
    title: "Sunset Cliff Villa",
    description: "Overlooking dramatic cliffs at golden hour",
    image:{ 
      filename:"listingimage",
      url:  "https://images.unsplash.com/photo-1576493169316-0745093ae312?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 15000,
    location: "Tuscany",
    
    country: "Italy"
  },
  {
    title: "Jungle Hideaway Villa",
    description: "Peaceful escape surrounded by lush foliage",
    image:{ 
      filename:"listingimage",
      url: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 9000,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Modern Glass Villa",
    description: "Contemporary design with floor‑to‑ceiling windows",
    image:{ 
      filename:"listingimage",
      url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 20000,
    location: "Malibu",
    country: "USA"
  },
  {
    title: "Beachfront Retreat",
    description: "Steps away from crystal clear waters",
    image:{ 
      filename:"listingimage",
      url: "https://images.unsplash.com/photo-1593714604578-d9e41b00c6c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 18000,
    location: "Phuket",
    country: "Thailand"
  },
  {
    title: "Mountain Lake Villa",
    description: "Peaceful property by a serene alpine lake",
    image:{ 
      filename:"listingimage",
      url: "https://images.unsplash.com/photo-1688653802629-5360086bf632?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 17000,
    location: "Aspen",
    country: "USA"
  },
  {
    title: "Whitewashed Mediterranean Villa",
    description: "Classic elegance on a blue sea backdrop",
    image:{
       filename:"listingimage",
      url: "https://images.unsplash.com/photo-1616012760010-8da02da071fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 16000,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Tropical Poolside Villa",
    description: "Private pool with palm‑fringed decking",
    image:{ 
      filename:"listingimage",
      url: "https://images.unsplash.com/photo-1717356280846-eaef82389e30?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 14000,
    location: "Cancún",
    country: "Mexico"
  },
  {
    title: "Desert Oasis Villa",
    description: "Luxury amid dunes with panoramic views",
    image:{
      filename:"listingimage",
      url: "https://images.unsplash.com/photo-1716807335095-8948ce6ab482?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 19000,
    location: "Dubai",
    country: "UAE"
  },
  {
    title: "Rainforest Tree‑Top Villa",
    description: "Eco‑luxury perched among the canopy",
    image: {
      filename:"listingimage" ,
      url: "https://images.unsplash.com/photo-1595243643203-06ba168495ea?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 13000,
    location: "Costa Rica",
    country: "Costa Rica"
  },
  {
    title: "Secluded Countryside Villa",
    description: "Tranquil estate in rolling green hills",
    image: {
      filename:"listingimage" ,
      url: "https://images.unsplash.com/photo-1685648628650-63740d39bffc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 11000,
    location: "Devon",
    country: "UK"
  },
  {
    title: "Luxury Urban Villa",
    description: "Stylish hideaway in the heart of the city",
    image: {
      filename:"listingimage" ,
      url: "https://images.unsplash.com/photo-1692736933760-8a8a9b8c1b6f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12500,
    location: "Los Angeles",
    country: "USA"
  },
  {
    title: "Clifftop Infinity Villa",
    description: "Infinity pool leaking into the horizon",
    image: {
      filename:"listingimage" ,
      url: "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 21000,
    location: "Ibiza",
    country: "Spain"
  },
  {
    title: "Rustic Stone Villa",
    description: "Cozy charm with traditional stone walls",
    image: {
      filename:"listingimage" ,
      url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 10500,
    location: "Provence",
    country: "France"
  },
  {
    title: "Seaside Minimalist Villa",
    description: "Clean lines meeting ocean breeze",
    image: {
      filename:"listingimage" ,
      url: "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 15500,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Tropical Jungle Villa",
    description: "Immersed in vibrant greenery and wildlife",
    image: {
      filename:"listingimage" ,
      url: "https://images.unsplash.com/photo-1543489822-c49534f3271f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 9800,
    location: "Phuket",
    country: "Thailand"
  },
  {
    title: "Modern Mountain Villa",
    description: "Sleek design overlooking snowy peaks",
    image: {
      filename:"listingimage" ,
      url: "https://images.unsplash.com/photo-1582610191340-fa501e6e5040?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 17500,
    location: "Zermatt",
    country: "Switzerland"
  },
  {
    title: "Cliff‑Edge Glass Villa",
    description: "Panoramic views with wall‑to‑wall glass",
    image: {
      filename:"listingimage" ,
      url: "https://images.unsplash.com/photo-1693466800653-9eb917c0552e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 22000,
    location: "Big Sur",
    country: "USA"
  },
  {
    title: "Oasis Pool Villa",
    description: "Private pool nestled in desert greenery",
    image: {
      filename:"listingimage" ,
      url: "https://images.unsplash.com/photo-1562239409-b5c79828df9e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 16500,
    location: "Marrakech",
    country: "Morocco"
  },
  {
    title: "Coastal Rustic Villa",
    description: "Weathered wood and ocean air vibes",
    image: {
      filename:"listingimage" ,
      url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 14000,
    location: "Maui",
    country: "USA"
  },
  {
    title: "Zen Bamboo Villa",
    description: "Organic architecture amid bamboo groves",
    image: {
      filename:"listingimage" ,
      url: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Kyoto",
    country: "Japan"
  },
  {
    title: "Hilltop Sunrise Villa",
    description: "Breathtaking views with golden sunrise skies",
    image: {
      filename:"listingimage" ,
      url: "https://images.unsplash.com/photo-1626249893783-cc4a9f66880a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 13500,
    location: "Chiang Mai",
    country: "Thailand"
  },
  {
    title: "Art Deco Beach Villa",
    description: "Retro-inspired luxury on the shoreline",
    image: {
      filename:"listingimage" ,
      url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 14500,
    location: "Miami",
    country: "USA"
  },
  {
    title: "Forest Creek Villa",
    description: "Nestled beside gentle streams in quiet woods",
    image: {
      filename:"listingimage" ,
      url: "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 10800,
    location: "British Columbia",
    country: "Canada"
  },
  {
    title: "Ice Fjord Villa",
    description: "Minimalist warm interiors in a cold wonderland",
    image: {
      filename:"listingimage" ,
      url: "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 18500,
    location: "Reykjavík",
    country: "Iceland"
  }
];

module.exports = { data: sampleListings };
