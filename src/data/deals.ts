export interface Deal {
  id: number;
  store: string;
  storeLogo: string;
  storeHandle: string;
  category: string;
  discount: string;
  title: string;
  description: string;
  image: string;
  expires: string;
  distance: string;
  isOnline: boolean;
  code?: string;
  verified: boolean;
  likes: number;
  comments: number;
  shares: number;
  bookmarked?: boolean;
  postedTime: string;
  originalPrice?: string;
  discountPrice?: string;
}

export interface Store {
  name: string;
  handle: string;
  logo: string;
  banner: string;
  followers: string;
  description: string;
  isFollowed?: boolean;
  featuredCategory: string;
}

export const INITIAL_STORES: Store[] = [
  {
    name: "Nike",
    handle: "nike",
    logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&auto=format&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1552066344-2464c1135c32?w=1200&auto=format&fit=crop&q=80",
    followers: "12.4M",
    description: "Just Do It. Official deals and exclusive flash drops on innovative athletic footwear, apparel, and premium sportswear gear.",
    isFollowed: true,
    featuredCategory: "Sportswear"
  },
  {
    name: "Amazon",
    handle: "amazon",
    logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=150&auto=format&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=1200&auto=format&fit=crop&q=80",
    followers: "45.1M",
    description: "Earth's most customer-centric company. Daily lightning deals, prime exclusive savings, and unbeatable tech discounts.",
    isFollowed: true,
    featuredCategory: "Retail & Tech"
  },
  {
    name: "Apple",
    handle: "apple",
    logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=150&auto=format&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1200&auto=format&fit=crop&q=80",
    followers: "38.2M",
    description: "Think Different. Certified refurbished, education savings, and special carrier deals on MacBooks, iPhones, and iPads.",
    isFollowed: true,
    featuredCategory: "Electronics"
  },
  {
    name: "Target",
    handle: "target",
    logo: "https://images.unsplash.com/photo-1563013591-733f1631f5f7?w=150&auto=format&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=1200&auto=format&fit=crop&q=80",
    followers: "8.9M",
    description: "Expect More. Pay Less. Find trending apparel, home decor, grocery offers, and Target Circle exclusive daily drops.",
    isFollowed: true,
    featuredCategory: "Department Store"
  },
  {
    name: "Adidas",
    handle: "adidas",
    logo: "https://images.unsplash.com/photo-1518002171953-a080ee817800?w=150&auto=format&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1517649763962-0c623266deb3?w=1200&auto=format&fit=crop&q=80",
    followers: "9.8M",
    description: "Impossible is Nothing. Save on Ultraboost, Sambas, Originals, and high-performance training clothing.",
    isFollowed: false,
    featuredCategory: "Sportswear"
  },
  {
    name: "Walmart",
    handle: "walmart",
    logo: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=150&auto=format&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=1200&auto=format&fit=crop&q=80",
    followers: "15.3M",
    description: "Save Money. Live Better. Rollback specials and clearance drops on 4K TVs, groceries, furniture, and toys.",
    isFollowed: false,
    featuredCategory: "Supercenter"
  }
];

export const INITIAL_DEALS: Deal[] = [
  {
    id: 1,
    store: "Nike",
    storeHandle: "nike",
    storeLogo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&auto=format&fit=crop&q=80",
    category: "Footwear",
    discount: "50% OFF",
    title: "Nike Air Zoom Pegasus 40 Running Shoes",
    description: "Limited summer clearance sale on selected premium running shoes. Engineered for responsive comfort and exceptional durability on road and track.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    expires: "Expires in 12 hours",
    distance: "2.3 km away",
    isOnline: true,
    code: "SUMMER50",
    verified: true,
    likes: 342,
    comments: 48,
    shares: 89,
    bookmarked: true,
    postedTime: "10m ago",
    originalPrice: "$130.00",
    discountPrice: "$65.00"
  },
  {
    id: 2,
    store: "Amazon",
    storeHandle: "amazon",
    storeLogo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=150&auto=format&fit=crop&q=80",
    category: "Electronics",
    discount: "Up to 40% OFF",
    title: "Daily Flash Deals: Sony WH-1000XM5 Headphones",
    description: "Industry-leading noise canceling wireless headphones with 30-hour battery life. Perfect for travel, home office, and premium audio listening.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    expires: "Expires tonight",
    distance: "Online Only",
    isOnline: true,
    verified: true,
    likes: 892,
    comments: 156,
    shares: 204,
    bookmarked: false,
    postedTime: "2h ago",
    originalPrice: "$399.99",
    discountPrice: "$239.99"
  },
  {
    id: 3,
    store: "Apple",
    storeHandle: "apple",
    storeLogo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=150&auto=format&fit=crop&q=80",
    category: "Computers",
    discount: "Student Discount",
    title: "🎓 Save up to $200 on MacBook Air M3 + Free AirPods",
    description: "Exclusive student education savings. Get the ultra-portable MacBook Air M3 chip with all-day battery life, plus a complimentary pair of AirPods.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
    expires: "Valid all month",
    distance: "Online + In-Store",
    isOnline: true,
    verified: true,
    likes: 1240,
    comments: 310,
    shares: 445,
    bookmarked: true,
    postedTime: "4h ago",
    originalPrice: "$1,099",
    discountPrice: "$899"
  },
  {
    id: 4,
    store: "Target",
    storeHandle: "target",
    storeLogo: "https://images.unsplash.com/photo-1563013591-733f1631f5f7?w=150&auto=format&fit=crop&q=80",
    category: "Home & Patio",
    discount: "35% OFF",
    title: "Patio Furniture & Outdoor Living Refresh Drop",
    description: "Transform your backyard space with weather-resistant wicker sets, fire pit tables, and ambient solar string lighting. Target Circle offer.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80",
    expires: "Expires in 3 days",
    distance: "4.1 km away",
    isOnline: true,
    verified: true,
    likes: 198,
    comments: 24,
    shares: 31,
    bookmarked: false,
    postedTime: "5h ago",
    originalPrice: "$499.00",
    discountPrice: "$324.35"
  },
  {
    id: 5,
    store: "Adidas",
    storeHandle: "adidas",
    storeLogo: "https://images.unsplash.com/photo-1518002171953-a080ee817800?w=150&auto=format&fit=crop&q=80",
    category: "Footwear",
    discount: "EXTRA 25% OFF",
    title: "Ultraboost Light Shoes Clearance Drop",
    description: "Experience epic energy return with our lightest Boost cushioning ever. Use code at checkout for additional discounts on marked items.",
    image: "https://images.unsplash.com/photo-1508296695146-257a814050b4?w=800&auto=format&fit=crop&q=80",
    expires: "Expires in 24 hours",
    distance: "Online Only",
    isOnline: true,
    code: "ADIDAS25",
    verified: true,
    likes: 412,
    comments: 67,
    shares: 92,
    bookmarked: false,
    postedTime: "8h ago",
    originalPrice: "$190.00",
    discountPrice: "$114.00"
  },
  {
    id: 6,
    store: "Walmart",
    storeHandle: "walmart",
    storeLogo: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=150&auto=format&fit=crop&q=80",
    category: "Electronics",
    discount: "$300 OFF Rollback",
    title: "Samsung 65\" Class QLED 4K Smart TV",
    description: "Quantum Dot technology delivers 100% color volume. Sleek slim design with Object Tracking Sound. Unbeatable holiday weekend rollback pricing.",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&auto=format&fit=crop&q=80",
    expires: "While supplies last",
    distance: "6.8 km away",
    isOnline: true,
    verified: true,
    likes: 670,
    comments: 112,
    shares: 189,
    bookmarked: false,
    postedTime: "12h ago",
    originalPrice: "$999.00",
    discountPrice: "$699.00"
  },
  {
    id: 7,
    store: "Nike",
    storeHandle: "nike",
    storeLogo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&auto=format&fit=crop&q=80",
    category: "Apparel",
    discount: "BUY 1 GET 1 50% OFF",
    title: "Dri-FIT Fitness & Training Apparel Bundle",
    description: "Stay dry and comfortable during high-intensity workouts. Mix and match shirts, shorts, and performance socks.",
    image: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=800&auto=format&fit=crop&q=80",
    expires: "Expires in 2 days",
    distance: "2.3 km away",
    isOnline: true,
    verified: true,
    likes: 289,
    comments: 32,
    shares: 55,
    bookmarked: false,
    postedTime: "1d ago"
  },
  {
    id: 8,
    store: "Apple",
    storeHandle: "apple",
    storeLogo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=150&auto=format&fit=crop&q=80",
    category: "Accessories",
    discount: "20% OFF",
    title: "MagSafe Wireless Chargers & Accessories",
    description: "Snap on magnetic cases, wallets, and portable battery packs for effortless alignment and faster wireless charging.",
    image: "https://images.unsplash.com/photo-1622445262464-8c650170a4a6?w=800&auto=format&fit=crop&q=80",
    expires: "Expires this Friday",
    distance: "Online + In-Store",
    isOnline: true,
    verified: true,
    likes: 541,
    comments: 89,
    shares: 130,
    bookmarked: false,
    postedTime: "1d ago",
    originalPrice: "$49.00",
    discountPrice: "$39.00"
  }
];

export const CATEGORIES = [
  "All Deals",
  "Footwear",
  "Electronics",
  "Computers",
  "Apparel",
  "Home & Patio",
  "Gaming",
  "Beauty",
  "Travel",
  "Fitness"
];

export const INITIAL_NOTIFICATIONS = [
  {
    id: 1,
    type: "deal",
    title: "Nike posted a new 50% OFF sale.",
    time: "10m ago",
    unread: true,
    storeLogo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&auto=format&fit=crop&q=80",
    link: "/feed"
  },
  {
    id: 2,
    type: "alert",
    title: "Amazon flash sale starts in 1 hour.",
    time: "45m ago",
    unread: true,
    storeLogo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=150&auto=format&fit=crop&q=80",
    link: "/feed"
  },
  {
    id: 3,
    type: "update",
    title: "Apple education discounts updated.",
    time: "2h ago",
    unread: false,
    storeLogo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=150&auto=format&fit=crop&q=80",
    link: "/feed"
  },
  {
    id: 4,
    type: "follow",
    title: "Target added new daily circle drops nearby (4.1 km).",
    time: "5h ago",
    unread: false,
    storeLogo: "https://images.unsplash.com/photo-1563013591-733f1631f5f7?w=150&auto=format&fit=crop&q=80",
    link: "/feed"
  }
];
