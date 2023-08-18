import React, { useEffect, useState, useContext } from "react";
import { MantineProvider, 
  ColorSchemeProvider, 
  ColorScheme,
  Container
} from '@mantine/core';
import { useHotkeys, useLocalStorage, useColorScheme } from '@mantine/hooks';
import MainPage from "./pages/MainPage";
import ColorToggle from "./components/ColorToggle";
import { AppContextProvider } from './AppContext';
import "./App.css";

export default function App() {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  })
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <AppContextProvider>
          <ColorToggle />
          <MainPage />
        </AppContextProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )  
}