import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@fontsource/roboto';
import { HashRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core'

const theme = createTheme({
    palette: {
      primary: {
        main: '#161925',
      },
      secondary: {
        main: '#235789',
      },
    },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter basename="/personal-site">
        <App />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
