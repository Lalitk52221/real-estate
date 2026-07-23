export interface Agent {
  id: number;
  name: string;
  image: string;
  phone: string;
  email: string;
}
export interface Property {
  id: number;
  title: string;
  location: string;
  city: string;
  state: string;
  image: string;
  price: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  featured: boolean;
  amenities: string[];
  propertyType: string;
  description: string;
  agent: Agent;
}

export const propertyData: Property[] = [
  {
    id: 1,
    title: "Luxury Villa in Gurgaon",
    location: "DLF Phase 1",
    city: "Gurgaon",
    state: "Haryana",
    image: "/images/property1.jpg",
    price: "₹2.45 Cr",
    area: "2450 Sq Ft",
    bedrooms: 4,
    bathrooms: 4,
    featured: true,
    propertyType: "Villa",
    description:
      "A luxurious villa with premium amenities, spacious interiors, and a landscaped garden.",
    amenities: [
      "24×7 Security",
      "Swimming Pool",
      "Gymnasium",
      "Children's Play Area",
      "Club House",
      "Power Backup",
      "Lift",
      "Visitor Parking",
      "Jogging Track",
      "CCTV Surveillance",
      "Landscaped Garden",
      "Rain Water Harvesting",
    ],
    agent: {
      id: 1,
      name: "Bharat Yogi",
      image: "/images/Testimonials/Bharat.png",
      phone: "+91 9876543210",
      email: "bharatyogi@gmail.com",
    },
    
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "Sector 57",
    city: "Gurgaon",
    state: "Haryana",
    image: "/images/property2.jpg",
    price: "₹98 Lac",
    area: "1450 Sq Ft",
    bedrooms: 3,
    bathrooms: 2,
    description:
      "A modern apartment with elegant finishes, convenient location, and excellent community features.",
    propertyType: "Apartment",
    featured: false,
    amenities: [
      "24×7 Security",
      "Swimming Pool",
      "Gymnasium",
      "Children's Play Area",
      "Club House",
      "Power Backup",
      "Lift",
      "Visitor Parking",
      "Jogging Track",
      "CCTV Surveillance",
      "Landscaped Garden",
      "Rain Water Harvesting",
    ],
    agent: {
      id: 1,
      name: "Bharat Yogi",
      image: "/images/Testimonials/Bharat.png",
      phone:"+91 8851245368",
      email: "bharatyogi@gmail.com",
    },
  },
  {
    id: 3,
    title: "Residential Plot",
    location: "Sohna Road",
    city: "Gurgaon",
    state: "Haryana",
    image: "/images/property3.jpg",
    price: "₹78 Lac",
    area: "180 Sq Yd",
    bedrooms: 0,
    bathrooms: 0,
    featured: true,
    propertyType: "Residensial Plot",
    description:
      "A residential plot located on Sohna Road, ideal for building your dream home or investment property.",
    amenities: [
      "24×7 Security",
      "Swimming Pool",
      "Gymnasium",
      "Children's Play Area",
      "Club House",
      "Power Backup",
      "Lift",
      "Visitor Parking",
      "Jogging Track",
      "CCTV Surveillance",
      "Landscaped Garden",
      "Rain Water Harvesting",
    ],
    agent: {
      id: 1,
      name: "Bharat Yogi",
      image: "/images/Testimonials/Bharat.png",
      phone:"+91 8851245368",
      email: "bharatyogi@gmail.com",
    },
  },
  {
    id: 4,
    title: "Premium Builder Floor",
    location: "Sector 45",
    city: "Gurgaon",
    state: "Haryana",
    image: "/images/property4.jpg",
    price: "₹1.65 Cr",
    area: "2200 Sq Ft",
    bedrooms: 3,
    bathrooms: 3,
    featured: true,
    description:
      "A premium builder floor with modern layouts, minimal upkeep, and easy access to local amenities.",
    propertyType: "flat",
    amenities: [
      "24×7 Security",
      "Swimming Pool",
      "Gymnasium",
      "Children's Play Area",
      "Club House",
      "Power Backup",
      "Lift",
      "Visitor Parking",
      "Jogging Track",
      "CCTV Surveillance",
      "Landscaped Garden",
      "Rain Water Harvesting",
    ],
    agent: {
      id: 1,
      name: "Bharat Yogi",
      image: "/images/Testimonials/Bharat.png",
      phone:"+91 8851245368",
      email: "bharatyogi@gmail.com",
    },
  },

  {
    id: 5,
    title: "Luxury Penthouse",
    location: "Golf Course Road",
    city: "Gurgaon",
    state: "Haryana",
    image: "/images/property1.jpg",
    price: "₹5.10 Cr",
    area: "4200 Sq Ft",
    bedrooms: 5,
    bathrooms: 5,
    featured: false,
    description:
      "A stunning penthouse offering panoramic views, premium interiors, and a luxurious living experience.",
    propertyType: "flat",
    amenities: [
      "24×7 Security",
      "Swimming Pool",
      "Gymnasium",
      "Children's Play Area",
      "Club House",
      "Power Backup",
      "Lift",
      "Visitor Parking",
      "Jogging Track",
      "CCTV Surveillance",
      "Landscaped Garden",
      "Rain Water Harvesting",
    ],
    agent: {
      id: 1,
      name: "Bharat Yogi",
      image: "/images/Testimonials/Bharat.png",
      phone:"+91 8851245368",
      email: "bharatyogi@gmail.com",
    },
  },
  {
    id: 6,
    title: "Commercial Office",
    location: "Cyber City",
    city: "Gurgaon",
    state: "Haryana",
    image: "/images/property2.jpg",
    price: "₹3.80 Cr",
    area: "3000 Sq Ft",
    bedrooms: 0,
    bathrooms: 0,
    featured: false,
    description:
      "A commercial office space in Cyber City with premium conveniences and central location.",
    propertyType: "residensial plot",
    amenities: [
      "24×7 Security",
      "Swimming Pool",
      "Gymnasium",
      "Children's Play Area",
      "Club House",
      "Power Backup",
      "Lift",
      "Visitor Parking",
      "Jogging Track",
      "CCTV Surveillance",
      "Landscaped Garden",
      "Rain Water Harvesting",
    ],
    agent: {
      id: 1,
      name: "sahil",
      image: "/images/Testimonials/sahil.jpg",
      phone:"+91 8851245368",
      email: "bharatyogi@gmail.com",
    },
  },

  {
    id: 7,
    title: "Affordable Apartment",
    location: "Sector 92",
    city: "Gurgaon",
    state: "Haryana",
    image: "/images/property4.jpg",
    price: "₹65 Lac",
    area: "1100 Sq Ft",
    bedrooms: 2,
    bathrooms: 2,
    featured: false,
    description:
      "An affordable apartment with smart layouts, efficient amenities, and value-driven pricing.",
    propertyType: "Villa",
    amenities: [
      "24×7 Security",
      "Swimming Pool",
      "Gymnasium",
      "Children's Play Area",
      "Club House",
      "Power Backup",
      "Lift",
      "Visitor Parking",
      "Jogging Track",
      "CCTV Surveillance",
      "Landscaped Garden",
      "Rain Water Harvesting",
    ],
    agent: {
      id: 1,
      name: "Sahil Baisla",
      image: "/images/Testimonials/sahil.jpg",
      phone:"+91 8851245368",
      email: "bharatyogi@gmail.com",
    },
  },
];

// export const AgentData: Agent[] = [
//   {
//     id: 1,
//     name: "Bharat Yogi",
//     image: "/images/agent1.jpg",
//     phone: "+91 9876543210",
//     email: "bharat.yogi@gmail.com",
//   },
//   {
//     id: 2,
//     name: "Lalit Kumar",
//     image: "/images/Testimonials/gaurav.png",
//     phone: "+91 8851245368",
//     email: "lalit.kumar885124@gmail.com",
//   },
//   {
//     id: 2,
//     name: "Nitesh",
//     image: "/images/Testimonials/nitesh.jpg",
//     phone: "+91 8851245368",
//     email: "nitesh@gmail.com",
//   },
// ];
