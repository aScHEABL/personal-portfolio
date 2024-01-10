import { MantineProvider, 
  ColorSchemeProvider, 
  ColorScheme,
} from '@mantine/core';
import { useHotkeys, useLocalStorage, useColorScheme } from '@mantine/hooks';
import { AppContextProvider } from './AppContext';
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ResumePage from "./pages/ResumePage";
import MainPage from './pages/MainPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/resume",
    element: <ResumePage />,
  },
]);

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
        <RouterProvider router={router} />
        <AppContextProvider>
          <></>
        </AppContextProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )  
}