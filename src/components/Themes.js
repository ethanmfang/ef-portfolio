import { createTheme } from "@nextui-org/react";

const theme = createTheme({
  type: "dark",
  theme: {
    colors: {
      dark: "#33353d",
      darker: "#17181f",
      light: "#eeedf0",
      accentGreen: "#708d81",
      accentOrange: "#b57f50",
      gradient1: "linear-gradient(45deg, #b57f50, #708d81)",
    },
  },
});

export default theme;
