import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';
import { TextField } from '@material-ui/core';

// export const RootButton = withStyles({
//   root: {
//     boxShadow: 'none',
//     textTransform: 'none',
//     fontSize: 16,
//     padding: '6px 12px',
//     border: '1px solid',
//     lineHeight: 1.5,
//     backgroundColor: '#61eb85',
//     borderColor: '#0063cc',
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//     '&:hover': {
//       backgroundColor: '#0069d9',
//       borderColor: '#0062cc',
//       boxShadow: 'none',
//     },
//     '&:active': {
//       boxShadow: 'none',
//       backgroundColor: '#0062cc',
//       borderColor: '#005cbf',
//     },
//     '&:focus': {
//       boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
//     },
//   },
// })(Button);

export const CustomButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText('#61eb85'),
      backgroundColor: '#61eb85',
      '&:hover': {
        backgroundColor: '#4ebf6a',
      },
    },
  }))(Button);

export const CustomTextField = withStyles({
    root: {
      // '& label.Mui-focused': {
      //   color: 'white',
      // },
      // '& .MuiInput-underline:after': {
      //   borderBottomColor: 'yellow',
      // },
      '& .MuiOutlinedInput-root': {
        // '& fieldset': {
        //   borderColor: 'white',
        // },
        // '&:hover fieldset': {
        //   borderColor: 'white',
        // },
        '&.Mui-focused fieldset': {
          borderColor: "#61eb85",
        },
      },
    },
  })(TextField);