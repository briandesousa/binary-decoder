import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppHeader from './components/AppHeader';
import DecoderContainer from './components/DecoderContainer';
import { blueGrey, lightBlue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: lightBlue,
    secondary: blueGrey
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      
      <DecoderContainer>

      </DecoderContainer>
    </ThemeProvider>
  );
}

export default App;
