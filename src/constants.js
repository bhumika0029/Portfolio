// ================= SKILLS SECTION LOGOS =================
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";

import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

import cLogo from "./assets/tech_logo/c.png";
import javaLogo from "./assets/tech_logo/java.png";

import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// ================= EDUCATION LOGOS =================
import bsaLogo from "./assets/education_logo/sirtt.logo.png";
import kvLogo from "./assets/education_logo/kvs.logo.png";

// ================= PROJECT LOGOS =================
import aiLogo from "./assets/work_logo/ai.png";
import foodLogo from "./assets/work_logo/Screenshot 2025-12-21 233656.png";
import employeeLogo from "./assets/work_logo/employye.png";
import todoLogo from "./assets/work_logo/list.png";

// ================= SKILLS DATA =================
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "MongoDB Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

// ================= EDUCATION DATA =================
export const education = [
  {
    id: 0,
    img: bsaLogo,
    school: "Sagar Institute of Research & Technology",
    date: "2022 – 2026",
    grade: "73.2%",
    degree: "B.Tech – Computer Science & Information Technology",
    desc:
      "Focused on building a strong foundation in computer science concepts including programming, data structures, databases, operating systems, computer networks, and software engineering.",
  },
  {
    id: 1,
    img: kvLogo,
    school: "Kendriya Vidyalaya No. 3, Bhopal",
    date: "2021 – 2022",
    grade: "70%",
    degree: "CBSE (XII) – PCM",
    desc:
      "Completed higher secondary education under CBSE board with Physics, Chemistry, Mathematics, and Computer Science.",
  },
  {
    id: 2,
    img: kvLogo,
    school: "Kendriya Vidyalaya No. 3, Bhopal",
    date: "2019 – 2020",
    grade: "70%",
    degree: "CBSE (X)",
    desc:
      "Completed secondary education under CBSE board with Science and Computer Applications.",
  },
];

// ================= PROJECTS DATA =================
export const projects = [
  {
    id: 0,
    title: "AI Virtual Assistant",
    image: aiLogo,
    description:
      "Voice-enabled AI assistant using Web Speech API and Gemini AI. Features include voice I/O, smart responses, image upload, and branding.",
    tags: ["React", "Node.js", "Express", "MongoDB", "API"],
    github: "https://github.com/bhumika0029/Al-Virtual-Assistant.git",
    webapp: "https://al-virtual-assistant.vercel.app",
  },
  {
    id: 1,
    title: "Food Delivery App",
    image: foodLogo,
    description:
      "Responsive food delivery application built with React and Redux, simulating real-world ordering experience.",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    github: "https://github.com/bhumika0029/Food-Delivery.git",
    webapp: "https://food-delivery-jade-omega.vercel.app",
  },
  {
    id: 2,
    title: "Employee Management System",
    image: employeeLogo,
    description:
      "Role-based employee management system using Spring Boot, JPA, MySQL, and Thymeleaf with secure APIs.",
    tags: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
    github: "https://github.com/bhumika0029/Employee-Management-System.git",
    webapp: "https://employee-management-system-gamma-lyart.vercel.app",
  },
  {
    id: 3,
    title: "Todo List Application",
    image: todoLogo,
    description:
      "Task management application with REST APIs to create, update, and manage daily tasks using Spring Boot.",
    tags: ["Java", "Spring Boot", "MySQL", "REST API"],
    github: "https://github.com/bhumika0029/TodoList.git",
    webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
];
