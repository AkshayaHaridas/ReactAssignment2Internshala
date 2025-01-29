const books = [
  //Sci-Fi
  {
    id: 1,
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
    publicationYear: 1965,
    description:
      "An epic tale of politics, religion, and survival on the desert planet Arrakis.",
    image: "https://m.media-amazon.com/images/I/91ndmtXb8UL._SL1500_.jpg",
    rating: 4.9,
  },
  {
    id: 2,
    title: "Foundation",
    author: "Isaac Asimov",
    category: "Sci-Fi",
    publicationYear: 1951,
    description:
      "A mathematician's efforts to save humanity through psychohistory.",
    image: "https://m.media-amazon.com/images/I/51oyCTOSo0L._SY445_SX342_.jpg",
    rating: 4.5,
  },
  {
    id: 3,
    title: "Neuromancer",
    author: "William Gibson",
    category: "Sci-Fi",
    publicationYear: 1984,
    description:
      "A cyberpunk classic about artificial intelligence and virtual reality.",
    image: "https://m.media-amazon.com/images/I/51nWyRYC9qL._SY445_SX342_.jpg",
    rating: 4.3,
  },
  {
    id: 4,
    title: "Ender's Game",
    author: "Orson Scott Card",
    category: "Sci-Fi",
    publicationYear: 1985,
    description:
      "A young genius is trained to save humanity in a war against aliens.",
    image: "https://m.media-amazon.com/images/I/91T-14y8aTL._SL1500_.jpg",
    rating: 4.6,
  },
  {
    id: 5,
    title: "The Left Hand of Darkness",
    author: "Ursula K. Le Guin",
    category: "Sci-Fi",
    publicationYear: 1969,
    description: "An exploration of gender and society on a distant planet.",
    image: "https://m.media-amazon.com/images/I/41LEOJQ5F9L._SY445_SX342_.jpg",
    rating: 4.4,
  },
  // Fiction
  {
    id: 6,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    publicationYear: 1925,
    description:
      "A story of love, wealth, and the American Dream set in the Roaring Twenties.",
    image: "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg",
    rating: 4.5,
  },
  {
    id: 7,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    publicationYear: 1960,
    description:
      "A young girl's perspective on racial injustice and moral courage in the Deep South.",
    image:
      "https://vaundamicheauxnelson.com/wp-content/uploads/2021/12/Mockingbird-Cover.jpg",
    rating: 5,
  },
  {
    id: 8,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    category: "Fiction",
    publicationYear: 1951,
    description:
      "A coming-of-age story of teenage angst and alienation through Holden Caulfield's eyes.",
    image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg",
    rating: 4,
  },
  {
    id: 9,
    title: "Beloved",
    author: "Toni Morrison",
    category: "Fiction",
    publicationYear: 1987,
    description: "A haunting story of slavery, family, and freedom.",
    image: "https://m.media-amazon.com/images/I/41l3iWXyGmL._SY445_SX342_.jpg",
    rating: 4.8,
  },
  {
    id: 10,
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    category: "Fiction",
    publicationYear: 1967,
    description:
      "A magical realist tale of the Buendía family over generations.",
    image: "https://m.media-amazon.com/images/I/81oAEEwxBWL.jpg",
    rating: 4.7,
  },

  // Fantasy
  {
    id: 11,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    publicationYear: 1937,
    description:
      "Bilbo Baggins' adventure to recover a treasure guarded by the dragon Smaug.",
    image: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
    rating: 4.9,
  },
  {
    id: 12,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    category: "Fantasy",
    publicationYear: 1997,
    description:
      "The magical story of a young wizard discovering his powers and facing dark forces.",
    image: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
    rating: 5,
  },
  {
    id: 13,
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    category: "Fantasy",
    publicationYear: 2007,
    description:
      "The tale of a gifted young man on his journey to become a legend.",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1704917687i/186074.jpg",
    rating: 4.6,
  },
  {
    id: 14,
    title: "Mistborn: The Final Empire",
    author: "Brandon Sanderson",
    category: "Fantasy",
    publicationYear: 2006,
    description: "A revolution led by a street urchin with powerful magic.",
    image: "https://m.media-amazon.com/images/I/51G0zeHL2FL._SY445_SX342_.jpg",
    rating: 4.8,
  },
  {
    id: 15,
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    category: "Fantasy",
    publicationYear: 1996,
    description:
      "A brutal battle for power in a kingdom filled with treachery and magic.",
    image: "https://images-na.ssl-images-amazon.com/images/I/91dSMhdIzTL.jpg",
    rating: 4.7,
  },

  // Romance
  {
    id: 16,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Romance",
    publicationYear: 1813,
    description:
      "A classic romance that explores themes of love, class, and societal expectations.",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681804503i/129915654.jpg",
    rating: 4.8,
  },
  {
    id: 17,
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    category: "Romance",
    publicationYear: 1847,
    description:
      "A governess falls in love with her mysterious employer, Mr. Rochester.",
    image: "https://m.media-amazon.com/images/I/51BkCLmQ5jS._SY445_SX342_.jpg",
    rating: 4.7,
  },
  {
    id: 18,
    title: "Wuthering Heights",
    author: "Emily Brontë",
    category: "Romance",
    publicationYear: 1847,
    description:
      "A passionate tale of love and revenge on the Yorkshire moors.",
    image: "https://m.media-amazon.com/images/I/51l0vU0CZNL._SY445_SX342_.jpg",
    rating: 4.5,
  },
  {
    id: 19,
    title: "The Notebook",
    author: "Nicholas Sparks",
    category: "Romance",
    publicationYear: 1996,
    description: "A timeless love story spanning decades.",
    image: "https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg",
    rating: 4.6,
  },
  {
    id: 20,
    title: "Me Before You",
    author: "Jojo Moyes",
    category: "Romance",
    publicationYear: 2012,
    description: "A heartwarming story about love, loss, and second chances.",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/w/i/y/me-before-you-original-imahyb23hzverxdv.jpeg?q=90&crop=false",
    rating: 4.4,
  },
];

export default books;
