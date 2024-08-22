import hangman from "../assets/hangman.png";
import mia from "../assets/mia.jpg";
import art from "../assets/art.png";
import car from "../assets/car.png";
import chicken from "../assets/chicken.png";
import quiz from "../assets/quiz.png";
import themes from "../assets/themes.png";
import todo from "../assets/todo.png";
import german_flag from "../assets/Flag_of_Germany.png";
import chinese_flag from "../assets/Flag_of_China.png";
import japanese_flag from "../assets/Flag_of_Japan.png";
import korean_flag from "../assets/Flag_of_South_Korea.png";
import american_flag from "../assets/Flag_of_USA.png";
import spanish_flag from "../assets/Flag_of_Spain.png";

export const projects = [
  {
    name: "Pet App (pending)",
    pic: mia,
    link: "",
    github: "",
    madeWith: "Next.js",
  },
  {
    name: "Hangman",
    pic: hangman,
    link: "https://hangman-lilac-nine.vercel.app/",
    github: "https://github.com/Inelukas/Hangman",
    madeWith: "React",
  },
  {
    name: "Chicken Game",
    pic: chicken,
    link: "https://chicken-game-jade.vercel.app/",
    github: "https://github.com/Inelukas/Chicken-Game",
    madeWith: "React",
  },
  {
    name: "Street Game",
    pic: car,
    link: "https://car-game-kohl.vercel.app/",
    github: "https://github.com/Inelukas/Car-Game",
    madeWith: "React",
  },
  {
    name: "Quiz App",
    pic: quiz,
    link: "https://new-quiz-app-pi.vercel.app/",
    github: "https://github.com/Inelukas/new-quiz-app",
    madeWith: "React",
  },
  {
    name: "Color Themes",
    pic: themes,
    link: "https://recap4-v-2.vercel.app/",
    github: "https://github.com/Inelukas/recap4-v.2",
    madeWith: "React",
  },
  {
    name: "To-Do App",
    pic: todo,
    link: "https://to-do-list-gamma-one-95.vercel.app/",
    github: "https://github.com/Inelukas/to-do-list",
    madeWith: "React",
  },
  {
    name: "Art Piece App",
    pic: art,
    link: "https://art-piece-app.vercel.app/",
    github: "https://github.com/Inelukas/recap-5",
    madeWith: "Next.js",
  },
];

export const skills = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
  },
  {
    name: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
  },
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg",
  },
  {
    name: "Npm",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
  },
];

export const languages = [
  {
    language: { en: "German", de: "Deutsch", jp: "ドイツ語" },
    flag: german_flag,
    fluency: ["star", "star", "star", "star", "star"],
    certificate: { en: "Native", de: "Muttersprache", jp: "母語" },
  },
  {
    language: { en: "English", de: "Englisch", jp: "英語" },
    flag: american_flag,
    fluency: ["star", "star", "star", "star", "star"],
    certificate: { en: "TOEIC 990pt", de: "TOEIC 990pt", jp: "TOEIC 990点" },
  },
  {
    language: { en: "Japanese", de: "Japanisch", jp: "日本語" },
    flag: japanese_flag,
    fluency: ["star", "star", "star", "star", "star"],
    certificate: { en: "JLPT N1", de: "JLPT N1", jp: "JLPT N1" },
  },
  {
    language: { en: "Mandarin", de: "Mandarin", jp: "中国語" },
    flag: chinese_flag,
    fluency: ["star", "star", "star", "star", "blackstar"],
    certificate: {
      en: "TOCFL B2",
      de: "TOCFL B2",
      jp: "華語文能力測験(TOCFL) B2",
    },
  },
  {
    language: { en: "Korean", de: "Koreanisch", jp: "韓国語" },
    flag: korean_flag,
    fluency: ["star", "star", "star", "blackstar", "blackstar"],
    certificate: { en: "TOPIK 4", de: "TOPIK 4", jp: "TOPIK 4" },
  },
  {
    language: { en: "Spanish", de: "Spanisch", jp: "スペイン語" },
    flag: spanish_flag,
    fluency: ["star", "blackstar", "blackstar", "blackstar", "blackstar"],
    certificate: { en: "", de: "", jp: "" },
  },
];
