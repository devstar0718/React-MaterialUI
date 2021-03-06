import { createTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createTheme({
  palette: {
    background: {
      dark: '#F4F6F8',
      default: colors.common.white,
      paper: colors.common.white
    },
    primary: {
      main: colors.blue[800]
    },
    secondary: {
      main: '#32CEAF',
      contrastText: '#fff',
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600]
    },
    MuiMenuItem: {
      root: {
        fontSize: 12,
      },
    },
  },
  shadows,
  typography
});

export default theme;
