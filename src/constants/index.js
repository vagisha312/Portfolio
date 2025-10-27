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
    testimonial:
      "The Complete 2022 Web Development Bootcamp",
    name: "Udemy",
    designation: "",
    company: "",
    image: "data:image/jpeg;base64,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",
  },
  {
    testimonial:
      "Mastering Data Structures & Algorithms using C and C++",
    name: "Udemy",
    designation: "",
    company: "",
    image: "data:image/jpeg;base64,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",
  },
  {
    testimonial:
      "The Complete Python Course | Learn Python by Doing in 2023",
    name: "Udemy",
    designation: "",
    company: "",
    image: "data:image/jpeg;base64,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",
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