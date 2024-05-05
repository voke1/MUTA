import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#1B1E26",
  secondary: "#4CA6A8",
  lightPrimary: "#2F3540",
  lightSecondary: "#BBECED",

  white: "#fff",
  lightGreen: "#4BEE70",
  red: "#D84035",
  black: "#000000",
  lightGray: "#ABB3C7",
  lightOrange: "#FFF5DC",
  orange: "#FF8700",
};

export const SIZES = {
  // global sizes
  // base: 8,
  font: 14,
  // radius: 24,
  // padding: 20,
  padding: height * 0.025,
  radius: height * 0.03,
  base: height * 0.01,

  // font sizes
  largeTitle: 40,
  // h1: 30,
  // h2: 22,
  // h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  h2: height * 0.03,
  h3: width * 0.035,
  h1: height * 0.038,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: { fontSize: SIZES.largeTitle },
  h1: { fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontSize: SIZES.h5, lineHeight: 22 },
  body1: {
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
