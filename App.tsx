import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black
} from "@expo-google-fonts/roboto";

import theme from "./src/theme";

import { Loading } from "@components/Loading";

import { Routes } from "@routes/index";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
