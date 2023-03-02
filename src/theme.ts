import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#303A40',
//       contrastText: '#FFFFFF',
//     },
//     secondary: {
//       main: '#283035',
//     },
//     error: {
//       main: red.A400,
//     },
//     grey: {
//         900: "#354249" 
//     }
//   },
// });

const theme = createTheme({
  palette: {
    primary: {
    //   main: '#22007c',
    //   main: '#3a015c',
    //   main: '#190028',
    //   main: '#BB86FC',
      main: '#1F1F1F',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#BB86FC',
    },
    error: {
      main: red.A400,
    },
    grey: {
        900: "#232323",
        700: "#343434",
        500: "#464646",
        300: "#575757",
        100: "#7a7a7a"
    },
    background: {
        default: '#111111',
    }
  },
});

export default theme;