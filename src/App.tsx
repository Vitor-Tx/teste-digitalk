import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import ChatButton from "./components/ChatButton";
import ChatContainer from "./components/ChatContainer";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins", "Roboto", "Arial", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ChatContainer isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <ChatButton isOpen={isOpen} onClick={() => setIsOpen(true)} />
      </div>
    </ThemeProvider>
  );
}

export default App;
