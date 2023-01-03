import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import styled from 'styled-components';
import ChatButton from './components/ChatButton';
import ChatWelcome from './components/ChatContainer';
import { createTheme, ThemeProvider, } from '@mui/material';
import ChatContainer from './components/ChatContainer';



function App() {
  const [isOpen, setIsOpen] = useState(false);

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Poppins',
        'Roboto',
        'Arial',
        'sans-serif',
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ChatContainer isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <ChatButton isOpen={isOpen} onClick={() => setIsOpen(true)} />
      </div>
    </ThemeProvider>
  )
}

export default App
