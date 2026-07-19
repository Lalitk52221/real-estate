export interface Property {
  id: number;
  title: string;
  location: string;
  image: string;
  price: string;
  area: string;
  bedrooms: number;
  featured: boolean;
}

export const propertyData: Property[] = [
  {
    id: 1,
    title: "Luxury Villa in Gurgaon",
    location: "DLF Phase 1, Gurgaon",
    image: "/images/property1.jpg",
    price: "₹2.45 Cr",
    area: "2450 Sq Ft",
    bedrooms: 4,
    featured: true,
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "Sector 57, Gurgaon",
    image: "/images/property2.jpg",
    price: "₹98 Lac",
    area: "1450 Sq Ft",
    bedrooms: 3,
    featured: false,
  },
  {
    id: 3,
    title: "Residential Plot",
    location: "Sohna Road",
    image: "/images/property3.jpg",
    price: "₹78 Lac",
    area: "180 Sq Yd",
    bedrooms: 0,
    featured: true,
  },
  {
    id: 4,
    title: "Premium Builder Floor",
    location: "Sector 45, Gurgaon",
    image: "/images/property4.jpg",
    price: "₹1.65 Cr",
    area: "2200 Sq Ft",
    bedrooms: 3,
    featured: true,
  },
  {
    id: 5,
    title: "Luxury Penthouse",
    location: "Golf Course Road",
    image: "/images/property1.jpg",
    price: "₹5.10 Cr",
    area: "4200 Sq Ft",
    bedrooms: 5,
    featured: false,
  },
  {
    id: 6,
    title: "Commercial Office",
    location: "Cyber City",
    image: "/images/property2.jpg",
    price: "₹3.80 Cr",
    area: "3000 Sq Ft",
    bedrooms: 0,
    featured: false,
  },
  {
    id: 7,
    title: "Independent House",
    location: "Sector 46, Gurgaon",
    image: "/images/property3.jpg",
    price: "₹2.15 Cr",
    area: "2800 Sq Ft",
    bedrooms: 4,
    featured: true,
  },
  {
    id: 8,
    title: "Affordable Apartment",
    location: "Sector 92, Gurgaon",
    image: "/images/property4.jpg",
    price: "₹65 Lac",
    area: "1100 Sq Ft",
    bedrooms: 2,
    featured: false,
  }
];