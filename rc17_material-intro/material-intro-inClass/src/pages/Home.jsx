import AppBarComp from "../components/AppBarComp";
import CardGrid from "../components/CardGrid";
import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";
import { createTheme, ThemeProvider } from "@mui/material";
import { teal } from "@mui/material/colors";

const Home = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#8884f0",
        light: "#863c08",
        dark: "#490b3d",
      },
      secondary: {
        main: teal[500],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AppBarComp />
      <TypoButtons />
      <TextFieldComp />
      <CardGrid />
    </ThemeProvider>
  );
};

export default Home;
