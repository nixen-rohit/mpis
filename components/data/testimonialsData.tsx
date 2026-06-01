 

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  initials: string;
  countryCode: string;
}

export const testimonialsData: Testimonial[] = [
  { 
    id: 1, 
    name: "Abdur Rashid", 
    role: "Founder & CEO", 
    content: "MPIS Revolution transformed our entire digital infrastructure. Their team is professional, responsive and delivered beyond expectations. Highly recommended!", 
    rating: 5, 
    initials: "A", 
    countryCode: "IN" 
  },
  { 
    id: 2, 
    name: "Sarah Mitchell", 
    role: "Head of Product", 
    content: "The mobile app they built for us received outstanding reviews on the App Store. The UI/UX design is world-class and the performance is flawless.", 
    rating: 5, 
    initials: "S", 
    countryCode: "AU" 
  },
  { 
    id: 3, 
    name: "Ahmed Al Farsi", 
    role: "CTO", 
    company: "TechVentures UAE", 
    content: "Working with MPIS was a game changer. They understood our vision from day one and executed with precision. The project was delivered on time and under budget.", 
    rating: 5, 
    initials: "A", 
    countryCode: "AE" 
  },
  { 
    id: 4, 
    name: "Priya Sharma", 
    role: "Marketing Director", 
    content: "MPIS Revolution transformed our entire digital infrastructure. Their team is professional, responsive and delivered beyond expectations. Highly recommended!", 
    rating: 5, 
    initials: "P", 
    countryCode: "IN" 
  },
  { 
    id: 5, 
    name: "James O'Brien", 
    role: "Head of Product", 
    content: "The mobile app they built for us received outstanding reviews on the App Store. The UI/UX design is world-class and the performance is flawless.", 
    rating: 5, 
    initials: "J", 
    countryCode: "AU" 
  },
  { 
    id: 6, 
    name: "Fatima Al Zahra", 
    role: "CEO", 
    company: "TechVentures UAE", 
    content: "Working with MPIS was a game changer. They understood our vision from day one and executed with precision. The project was delivered on time and under budget.", 
    rating: 5, 
    initials: "F", 
    countryCode: "AE" 
  },
];