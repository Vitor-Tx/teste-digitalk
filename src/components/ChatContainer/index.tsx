import ChatBox from "../ChatBox/index";
import ChatWelcome from "../ChatWelcome";
import { Container } from "./styles";
import { Typography } from "@mui/material";
import { FormEvent, ReactNode, useState } from "react";
interface ChatContainerProps {
  isOpen: boolean;
  onClose: () => void;
}
interface ChatBubble {
  id: number;
  sender: string;
  text: ReactNode;
}

export default function ChatContainer({ isOpen, onClose }: ChatContainerProps) {
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [chatBubbles, setChatBubbles] = useState<ChatBubble[]>([
    {
      id: 1,
      sender: "pc",
      text: <></>,
    },
  ]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  function returnToStart() {
    setName("");
    setIsSubmitted(false);
  }

  return (
    <>
      {isOpen && (
        <Container>
          <header>
            <Typography>Fale conosco</Typography>
            <img onClick={onClose} src="../../../close-icon.svg" alt="" />
          </header>
          {!isSubmitted ? (
            <ChatWelcome
              name={name}
              setName={setName}
              handleSubmit={handleSubmit}
            />
          ) : (
            <ChatBox
              chatBubbles={chatBubbles}
              setChatBubbles={setChatBubbles}
              name={name}
              returnToStart={returnToStart}
            />
          )}
        </Container>
      )}
    </>
  );
}
