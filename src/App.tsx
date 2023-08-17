import React, { useState } from "react";
import { MantineProvider, 
  ColorSchemeProvider, 
  ColorScheme,
  Container
} from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import MainPage from "./pages/MainPage";

export default function App() {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <h1>Current color scheme is: {preferredColorScheme}</h1>
        <MainPage />
      </MantineProvider>
    </ColorSchemeProvider>
  )  
}