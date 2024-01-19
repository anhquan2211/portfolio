import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  trello,
  mindmap,
  discord,
  threejs,
  f8,
  sequelize,
  prisma,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "Sequelize",
    icon: sequelize,
  },
  {
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "F8 Education Technology Joint Stock Company",
    icon: f8,
    iconBg: "#383E56",
    date: "September 2023 - December 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Teaching assistant in web programming",
    company_name: "F8 Education Technology Joint Stock Company",
    icon: f8,
    iconBg: "#E6DEDD",
    date: "July 2023 - Now",
    points: [
      "Support lecturers and students in class sessions at the training center.",
      "Support students with projects during the training process.",
      "Review students' code during homework.",
    ],
  },
];

const projects = [
  {
    name: "Trello Project",
    description:
      "This is a project that clones Trello's web drag and drop features to simulate drag and drop and task management. The project is built on both Frontend and Backend.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
      {
        name: "dnd-kit",
        color: "text-violet-500",
      },
    ],
    image: trello,
    source_code_link: "https://github.com/anhquan2211/trello-project.git",
    source_demo: "https://trello-web-gules.vercel.app/",
  },
  {
    name: "Mindmap Project",
    description:
      "A project that uses the react-flow library to build a mindmap feature, convenient for work or study management. In addition, the project has a pro feature that allows creating multiple mindmaps in one account.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "text-indigo-500",
      },
      {
        name: "tailwind",
        color: "text-rose-400",
      },
      {
        name: "stripe",
        color: "text-blue-500",
      },
    ],
    image: mindmap,
    source_code_link: "https://github.com/anhquan2211/mindmap-flow-project",
    source_demo: "https://mindmap-flow-project.vercel.app/",
  },
  {
    name: "Discord Project",
    description:
      "A project to clone some features of Discord such as some realtime features such as chat, video calling, sharing screen using sockets and some other features...",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "text-blue-500",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "socket",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "text-rose-400",
      },
    ],
    image: discord,
    source_code_link: "https://github.com/anhquan2211/discord-project",
    source_demo: "https://discord-project-production-da15.up.railway.app/",
  },
];

export { services, technologies, experiences, projects };
