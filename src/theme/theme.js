import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    // type: 'dark',
  },
  typography: {
    fontFamily: '"Vazir", "B Mitra", "Roboto", "Helvetica", "Arial", sans-serif'
  },
})

export default theme