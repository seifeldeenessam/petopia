import type { Theme } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import constants from './constants';

const theme: Theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          position: "absolute",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "transparent",
          boxShadow: "none",
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "700",
        },
      }
    },
  },
  palette: {
    primary: { main: constants.ACCENT_PRIMARY, dark: constants.ACCENT_PRIMARY, light: constants.ACCENT_PRIMARY },
    secondary: { main: constants.ACCENT_SECONDARY, dark: constants.ACCENT_SECONDARY, light: constants.ACCENT_SECONDARY },
    info: { main: constants.BACKGROUND_PRIMARY, dark: constants.BACKGROUND_PRIMARY, light: constants.BACKGROUND_PRIMARY },
    background: { default: constants.BACKGROUND_PRIMARY },
    text: { primary: constants.TEXT_PRIMARY, secondary: constants.TEXT_SECONDARY },
  },
  typography: {
    fontFamily: "Nunito",
  },
});

export default theme;