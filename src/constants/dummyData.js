import icons from "./icons";

const languageSelection = [
  { id: 1, title: "I speak English", icon: icons.englishFlag },
  { id: 2, title: "Je parle Français", icon: icons.frenchFlag },
  { id: 3, title: "Eu falo Português", icon: icons.portugueseFlag },
  { id: 4, title: "Yo hablo Español", icon: icons.spanishFlag },
];

const spokenLanguage = [
  { id: 1, title: "Swahili", icon: icons.swahili },
  { id: 2, title: "Ahmaric", icon: icons.amharic },
  { id: 3, title: "Yoruba", icon: icons.yoruba },
  { id: 4, title: "Fula", icon: icons.fula },
  { id: 5, title: "Igbo", icon: icons.igbo },
  { id: 6, title: "Hausa", icon: icons.hausa },
  { id: 7, title: "Oromo", icon: icons.oromo },
  { id: 8, title: "Zulu", icon: icons.zulu },
  { id: 9, title: "Shona", icon: icons.shona },
];

const leaderBoard = [
  {
    id: 1,
    title: "Tina Vinus",
    subTitle: "United States",
    icon: icons.profile,
    position: 1,
  },
  {
    id: 2,
    title: "Tina Vinus",
    subTitle: "United States",
    icon: icons.profile,
    position: 2,
  },
  {
    id: 3,
    title: "Tina Vinus",
    subTitle: "United States",
    icon: icons.profile,
    position: 3,
  },
  {
    id: 4,
    title: "Me",
    subTitle: "United States",
    icon: icons.profile,
    position: 207,
  },
];

const proficiencies = [
  {
    id: 1,
    title: "Novice",
    subTitle: "I'm new to the Language",
    icon: icons.dotOne,

  },
  {
    id: 2,
    title: "Beginner",
    subTitle: "I know somw words in the laguage",
    icon: icons.dotTwo,
  },
  {
    id: 3,
    title: "Intermediate",
    subTitle: "I can have simple conversations in the language ",
    icon: icons.dotThree,
  },
];
export default {
  languageSelection,
  spokenLanguage,
  proficiencies,
  leaderBoard,
};
