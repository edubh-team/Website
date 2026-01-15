export type Course = {
  id: string;
  title: string;
  university:
    | "Manipal University"
    | "Jain University"
    | "Sharda University Online"
    | "Amity University";
  category: "Undergraduate" | "Postgraduate" | "Integrated" | "Certification";
  description: string;
  duration: string;
};

export const courses: Course[] = [
  // --- Jain University ---
  {
    id: "mba-jain",
    title: "MBA – Digital Business & Strategy",
    university: "Jain University",
    category: "Postgraduate",
    description: "A two-year MBA program focused on digital business, growth strategy, and analytics, crafted with input from global tech and consulting companies.",
    duration: "2 Years • Full-time • Hybrid",
  },
  {
    id: "cert-product-jain",
    title: "Certification in Product Management",
    university: "Jain University",
    category: "Certification",
    description: "A fast-track program covering product discovery, roadmapping, experimentation, and stakeholder communication for aspiring PMs.",
    duration: "6 Months • Part-time • Online",
  },

  // --- Sharda University ---
  {
    id: "bba-sharda-online",
    title: "BBA – Online Business Administration",
    university: "Sharda University Online",
    category: "Undergraduate",
    description: "A three-year online-first BBA that blends business fundamentals with live virtual classrooms and continuous mentor feedback.",
    duration: "3 Years • Online • Flexible",
  },


  // --- Manipal University (Technical & Integrated) ---
  {
    id: "btech-manipal",
    title: "B.Tech – Computer Science & Engineering",
    university: "Manipal University",
    category: "Undergraduate",
    description: "An engineering program designed for modern software careers with focus on AI, cloud-native development, and distributed systems.",
    duration: "4 Years • Full-time • On-campus",
  },
  {
    id: "mca-manipal",
    title: "MCA – Advanced Software Systems",
    university: "Manipal University",
    category: "Postgraduate",
    description: "A postgraduate program for engineers and graduates looking to build advanced skills in software architecture and enterprise systems.",
    duration: "2 Years • Full-time • Hybrid",
  },
  {
    id: "integrated-tech-management-manipal",
    title: "Integrated B.Tech + MBA in Technology Management",
    university: "Manipal University",
    category: "Integrated",
    description: "A five-year integrated pathway that combines strong engineering fundamentals with advanced training in product, operations, and strategy.",
    duration: "5 Years • Full-time • On-campus",
  },
  {
    id: "cert-ai-manipal",
    title: "Certification in Applied AI & ML",
    university: "Manipal University",
    category: "Certification",
    description: "Hands-on AI program focusing on building and deploying ML models for real-world scenarios.",
    duration: "9 Months • Part-time • Online",
  },

  // --- Manipal University (General & Humanities) ---
  {
    id: "manipal-pg-mba-gen",
    title: "Master of Business Administration",
    university: "Manipal University",
    category: "Postgraduate",
    description: "Prepare for the future workplace with this UGC-entitled online Master of Business Administration (MBA) from Manipal University Jaipur (MUJ), a NAAC A+ rated university. This QS-ranked MBA degree offers 13 career-focused specializations.",
    duration: "2 years"
  },
  {
    id: "manipal-ug-bba-gen",
    title: "Bachelor of Business Administration",
    university: "Manipal University",
    category: "Undergraduate",
    description: "Prepare for a management career with an online Bachelor of Business Administration (BBA) program from Manipal University Jaipur (MUJ). This three-year online undergraduate program is suitable for students who completed 10+2 to stand out in various sectors.",
    duration: "3 years"
  },
  {
    id: "manipal-ug-bca-gen",
    title: "Bachelor of Computer Application",
    university: "Manipal University",
    category: "Undergraduate",
    description: "The online Bachelor of Computer Application (BCA) from Manipal University Jaipur (MUJ) is designed to prepare learners for the dynamic IT industry, covering foundations of computer applications, software development, and database management.",
    duration: "3 years"
  },
  {
    id: "manipal-pg-mca-gen",
    title: "Master of Computer Application",
    university: "Manipal University",
    category: "Postgraduate",
    description: "The online Master of Computer Application (MCA) from NAAC A+ accredited Manipal University Jaipur (MUJ) is designed to empower learners to excel as strategic and innovative technology leaders in the data-driven digital world.",
    duration: "2 years"
  },
  {
    id: "manipal-ug-bcom-gen",
    title: "Bachelor of Commerce",
    university: "Manipal University",
    category: "Undergraduate",
    description: "Boost your career prospects with an online Bachelor of Commerce (BCom) from Manipal University Jaipur (MUJ). This 100% online undergraduate degree program is designed to equip learners with high-demand skills in the field of commerce.",
    duration: "3 years"
  },
  {
    id: "manipal-pg-ma-economics",
    title: "Master of Arts in Economics",
    university: "Manipal University",
    category: "Postgraduate",
    description: "The online Master of Arts (MA) in Economics from Manipal University Jaipur (MUJ) is designed to equip learners with future-ready skill sets to succeed in dynamic policy-making fields.",
    duration: "2 years"
  },
  {
    id: "manipal-pg-mcom-gen",
    title: "Master of Commerce",
    university: "Manipal University",
    category: "Postgraduate",
    description: "The online Master of Commerce (MCom) program from Manipal University Jaipur (MUJ) is designed to equip learners with the essential skills to fast-track their careers in the evolving business ecosystem.",
    duration: "2 years"
  },
  {
    id: "manipal-pg-ma-journalism",
    title: "Master of Arts (MA) in Journalism and Mass Communication",
    university: "Manipal University",
    category: "Postgraduate",
    description: "The online Master of Arts (MA) in Journalism and Mass Communication from Manipal University Jaipur (MUJ) is designed to produce future-ready media professionals with essential skills that equip them to thrive in the evolving media industry.",
    duration: "2 years"
  },
  {
    id: "manipal-pg-ma-english",
    title: "Master of Arts (MA) in English",
    university: "Manipal University",
    category: "Postgraduate",
    description: "The online Master of Arts (MA) in English from Sikkim Manipal University (SMU) is designed for learners to delve into the world of English language and literature across periods and cultures.",
    duration: "2 years"
  },
  {
    id: "manipal-pg-ma-political-science",
    title: "Master of Arts (MA) in Political Science",
    university: "Manipal University",
    category: "Postgraduate",
    description: "The online Master of Arts (MA) in Political Science from Sikkim Manipal University (SMU) is designed for learners with advanced knowledge and skills in political systems to stand out in their careers.",
    duration: "2 years"
  },
  {
    id: "manipal-pg-ma-sociology",
    title: "Master of Arts (MA) in Sociology",
    university: "Manipal University",
    category: "Postgraduate",
    description: "The online Master of Arts (MA) in Sociology from Sikkim Manipal University (SMU) is designed to equip learners with the latest advancements in the field of sociology.",
    duration: "2 years"
  }
];
