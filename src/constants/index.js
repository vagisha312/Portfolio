import {
  mobile,
  pic1,
  pic2,
  pic3,
  leetcode,
  linkedin1,
  linkedin2,
  linkedin3,
  leetcode1,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  linkedin,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  cpp,
  Github,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Coding",
    icon: creator,
  },
  {
    title: "Data Structure & Algorithms",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "HTML ",
    icon: html,
  },
  {
    name: "CSS ",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Github",
    icon: Github,
  },
  
];

const experiences = [
  {
    title: "Class X",
      company_name: "Loreto Convent Intermediate College, Lucknow (ICSE)" ,
      icon: mobile,
      iconBg: "#383E56",
      date: "  2018 (Education) ",
      points: [
        "Percentage: 91.3% ",
        "Science",
        "Mathematics",
        "Social Science",
        "Computer",
    ],
  },
  {
    title: "Class XII",
      company_name: "Loreto Convent Intermediate College, Lucknow (ISC)",
      icon: creator,
      iconBg: "#E6DEDD",
      date: "2020 (Education)",
      points: [
        "Percentage: 84.2%",
        "Physics", 
        "Chemistry", 
        "Mathematics",
        "Computer Science ",
    ],
  },
  {
    title: "B.Tech. ECE",
    company_name: "Jaypee Institute of Information Technology",
    icon: web,
    iconBg: "#383E56",
    date: " 2021 - 2025(Education)",
    points: [
      "CGPA: 7.7",
      "Programming (C++)",
      "Data Structure and Algorithms",
      "Database management system",
      "Object Oriented Programming",
      "Operating system",
      "Computer Networks",
    ],
  },
  {
    title: "Full Stack Development",
    company_name: "PROJECTS",
    icon: meta,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "Blogging Buzz: A Node.js Responsive web application utilizing Express as a framework to handle HTTP request.It integrates MongoDB database and JWT tokens for authentication and authorization. The frontend is a React application with Redux for state management and asynchronous operations.",
      "Project Stack: Redux, Tailwind CSS, React.js, Node.js, Express.js, MongoDB.",
      
      
    ],
  },
  {
    title: "Python",
    company_name: "PROJECT",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "ChatBot: Created by integrating Python libraries (PyPDF2, SpaCy, NumPy) and services (OpenAI) . It uses language modelsfor question answering, utilizes natural language processing techniques , and employs algorithms for similarity search and text manipulation.",
      "Project Stack: Python.",
      
    ],
  },
  {
    title: "React",
    company_name: "PROJECT",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "2022",
    points: [
      "Text-Assistant: Created a multi-functional React website enabling user to perform a range of operations on text input.",
      "Project Stack: HTML, CSS, React.js",
      "Movie Website: A  user-friendly responsive movie website with features like booking ticket and viewing movie details.",
      "Project Stack: HTML, CSS, React.js,Bootstrap.",
      
    ],
  },
  {
    title: "C++",
    company_name: "PROJECT",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "2022",
    points: [
      "Pizza-Ordering System: Created by utilizing AVL tree and Dijkstra's algorithm to implement features like serving customers and delivery distances. ",
      "Project Stack: C++, Data Structre , Algorithms",
      
    ],
  },
  {
    title: "Frontend",
    company_name: "PROJECT",
    icon: web,
    iconBg: "#E6DEDD",
    date: "2021",
    points: [
      "E-Commerace Website: A user-friendly website with an interactive interface.  ",
      "Project Stack: HTML, CSS, JavaScript.",

      
    ],
  },
  {
    title: "SKILLS",
    company_name: "Technical & Soft",
    icon: backend,
    iconBg: "#E6DEDD",
    points: [
      "Programming: C++ , Data structures , Problem-Solving , Python",
      "Frontend : HTML , CSS , Tailwind CSS , JavaScript , React.js , Redux (Redux Toolkit)",
      "Backend : Node.js , Express.js , Mongo DB , Mongoose , Authentication and security",
      "Soft skills :Project Management, Communication, Team Collaboration, Leadership, Critical Thinking, Adaptability"
    ],
  },
];

const testimonials = [
  {
    testimonial: `• Created a Node.js responsive web application utilizing Express as a framework to handle HTTP requests. 
• Integrated MongoDB database using Mongoose for data modelling and JWT tokens that manage user authentication and authorization, ensuring secure login and registration.
• The frontend is a React application with Redux for state management and asynchronous operations.
• Blogging Buzz allows users to create, share, interact with content, and build a community around posts and profiles.
• Project Stack: Redux, Tailwind CSS, React.js, Node.js, Express.js, MongoDB.`,
    name: "Blogging Buzz",
    designation: "",
    company: "",
    image: "", // (optional placeholder)
  },
  {
    testimonial: `• Developed a responsive website using Node.js and Express.js framework with JWT tokens for secure, authenticated, and authorized login and signup.
• Integrated MongoDB database with Mongoose for structured data storage and management.
• The frontend is built with React.js, enabling registration for users, organizations, and hospitals interested in blood donation, while individuals in need can easily locate nearby donors or hospitals to facilitate urgent blood transfusions.
• Project Stack: Tailwind CSS, React.js, Node.js, Express.js, MongoDB.`,
    name: "Blood Donation",
    designation: "",
    company: "",
    image: "", // (optional placeholder)
  },
  {
    testimonial: `• Created an intelligent chatbot by integrating Python libraries such as PyPDF2, SpaCy, and NumPy along with OpenAI services.
• Utilized language models for question answering, implemented natural language processing techniques, and applied similarity search and text manipulation algorithms.
• Project Stack: Python.`,
    name: "ChatBot",
    designation: "",
    company: "",
    image: "", // (optional placeholder)
  },
];


const projects = [
  {
    name: "GitHub",
    
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: pic1,
    source_code_link: "https://github.com/vagisha312",
    image1:github,
  },
  {
    name: "Linkedin",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "linkedin",
        color: "pink-text-gradient",
      },
    ],
    image: pic2,
    source_code_link: "https://www.linkedin.com/in/vagisha-gupta-517b27227/",
    image1:linkedin,
  },
  {
    name: "LeetCode",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pic3,
    source_code_link: "https://leetcode.com/Vagi_/",
    image1:leetcode1,
  },
];

export { services, technologies, experiences, testimonials, projects };