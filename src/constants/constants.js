const marketTabs = [
  {
    id: 1,
    title: "Cryptoassets",
  },
  {
    id: 2,
    title: "Exchanges",
  },
];

const delivery_time = [
  {
    id: 1,
    label: "10 Mins",
  },
  {
    id: 2,
    label: "20 Mins",
  },
  {
    id: 3,
    label: "30 Mins",
  },
];

const ratings = [
  {
    id: 1,
    label: 1,
  },
  {
    id: 2,
    label: 2,
  },
  {
    id: 3,
    label: 3,
  },
  {
    id: 4,
    label: 4,
  },
  {
    id: 5,
    label: 5,
  },
];

const tags = [
  {
    id: 1,
    label: "Burger",
  },
  {
    id: 2,
    label: "Fast Food",
  },
  {
    id: 3,
    label: "Pizza",
  },
  {
    id: 4,
    label: "Asian",
  },
  {
    id: 5,
    label: "Dessert",
  },
  {
    id: 6,
    label: "Breakfast",
  },
  {
    id: 7,
    label: "Vegetable",
  },
  {
    id: 8,
    label: "Taccos",
  },
];

const hobbiesPrev = [
  { id: 0, title: "Pisces", },
  { id: 1, title: "Gemini",  },
  { id: 2, title: "Aquarius" },
  { id: 3, title: "Cancer" },
  { id: 4, title: "Leo" },
];

const hobbies = [
  {
    id: 1,
    title: "Sport",
    data: [
      { id: 1, title: "Tennis" },
      { id: 2, title: "Football" },
      { id: 3, title: "Soccer" },
      { id: 4, title: "Golf" },
      { id: 5, title: "Volleyball" },
      { id: 6, title: "Boxing" },
      { id: 7, title: "Baseball" },
      { id: 8, title: "Basketball" },
    ],
  },
  {
    id: 2,
    title: "Wellness",
    data: [
      { id: 1, title: "Health" },
      { id: 2, title: "Meditation" },
      { id: 3, title: "Nutrition" },
      { id: 4, title: "Hiking" },
      { id: 5, title: "Medicine" },
      { id: 6, title: "Fitness" },
    ],
  },
  {
    id: 3,
    title: "Tech",
    data: [
      { id: 1, title: "Product" },
      { id: 2, title: "Engineering" },
      { id: 3, title: "Crypto" },
      { id: 4, title: "AI" },
      { id: 5, title: "Marketing" },
      { id: 6, title: "Startups" },
      { id: 7, title: "VR/AR" },
      { id: 8, title: "Venture capital" },
    ],
  },
  {
    id: 4,
    title: "Knowledge",
    data: [
      { id: 1, title: "Math" },
      { id: 2, title: "Psychology" },
      { id: 3, title: "Philosophy" },
      { id: 4, title: "Space" },
      { id: 5, title: "Biology" },
      { id: 6, title: "Science" },
      { id: 7, title: "Physics" },
      { id: 8, title: "History" },
    ],
  },
  {
    id: 5,
    title: "Art",
    data: [
      { id: 1, title: "Theatre" },
      { id: 2, title: "Photography" },
      { id: 3, title: "Books" },
      { id: 4, title: "Art" },
      { id: 5, title: "Fashion" },
      { id: 6, title: "Architecture" },
      { id: 7, title: "Writing" },
      { id: 8, title: "Design" },
    ],
  },
  {
    id: 6,
    title: "Entertainment",
    data: [
      { id: 1, title: "Games" },
      { id: 2, title: "Karaoke" },
      { id: 3, title: "Comedy" },
      { id: 4, title: "Television" },
      { id: 5, title: "Movies" },
      { id: 6, title: "TV Shows" },
      { id: 7, title: "Podcasts" },
      { id: 8, title: "Live Streams" },
    ],
  },
  {
    id: 7,
    title: "Common",
    data: [
      { id: 1, title: "Music" },
      { id: 2, title: "Enterpreneurship" },
      { id: 3, title: "Stocks" },
      { id: 4, title: "Networking" },
      { id: 5, title: "Tiktok" },
      { id: 6, title: "Real estate" },
      { id: 7, title: "Politics" },
      { id: 8, title: "Travel" },
      { id: 9, title: "Blogging" },
      { id: 10, title: "Relationships" },
    ],
  },
];

//API
// My Holdings
//https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}&ids=${ids}

// Coin Market
//https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}

const constants = {
  marketTabs,
  hobbies,
  hobbiesPrev,
};

export default constants;
