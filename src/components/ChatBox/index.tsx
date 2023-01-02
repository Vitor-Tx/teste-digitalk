import styled from "styled-components";
import { ReactNode, useEffect, useRef, useState } from "react";
import ChatBubble from "../ChatBubble";
import {
  TextField,
  FormControl,
} from "@mui/material";

interface ChatBubble {
  id: number;
  sender: string;
  text: ReactNode;
}

interface ChatBoxProps {
  name: string;
  returnToStart: ()  => void;
}


const Button = styled.button`
  border: none;
  background-color: white;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    border: none;
  }
`;

export default function ChatBox({ name, returnToStart }: ChatBoxProps) {

  const [isFinished, setIsFinished] = useState(false);
  const [message, setMessage] = useState("");
  const [chatBubbles, setChatBubbles] = useState<ChatBubble[]>([
    {
      id: 1,
      sender: "pc",
      text: (
        <>
          {" "}
          Bem-vindo, {name}! <br />
          Como posso te ajudar?{" "}
        </>
      ),
    },
  ]);
  const timerId1 = useRef(0);
  const timerId2 = useRef(0);
  const bubblesRef = useRef(chatBubbles);
  bubblesRef.current = chatBubbles;

  function handleIdleUser(currentChatBubbles: ChatBubble[]) {
    console.log("currentchatbubbles: ");
    console.log(currentChatBubbles);
    const warning = {
      id: currentChatBubbles.length + 1,
      sender: "pc",
      text: <>{`${name}, você enviou ${currentChatBubbles.filter(bubble => bubble.sender === "user").length} mensagens.`}</>,
    };
    setChatBubbles((prevState) => prevState.concat(warning));

  }

  function finish(currentChatBubbles: ChatBubble[]){
    console.log("currentchatbubbles: ");
    console.log(currentChatBubbles);
    const finishMessage = {
      id: currentChatBubbles.length + 2,
      sender: "pc",
      text: <>{`Devido à ociosidade, a conversa foi encerrada automaticamente.`}<br/> <Button onClick={returnToStart}>Voltar</Button> </>,
    };
    setChatBubbles((prevState) => prevState.concat(finishMessage));
    setIsFinished(true);
  }

  useEffect(() => {
    console.log("chatbubbles: ");
    console.log(chatBubbles);
    bubblesRef.current = chatBubbles;
    timerId1.current = setTimeout(() => {handleIdleUser(bubblesRef.current)}, 60000);
    timerId2.current = setTimeout(() => {finish(bubblesRef.current)}, 180000);

    return () => {
      clearTimeout(timerId1.current);
      clearTimeout(timerId2.current);
    };
  }, []);

  const handleMessage = (e: any) => {
    const { value } = e.target;
    setMessage(value);
  };

  function handleSendMessage(event: any) {
    event.preventDefault();
    const chatBubble = {
      id: chatBubbles.length + 1,
      sender: "user",
      text: <>{message}</>,
    };
    setChatBubbles((prevState) => prevState.concat(chatBubble));
    setMessage("");
    clearTimeout(timerId1.current);
    clearTimeout(timerId2.current);
    bubblesRef.current = chatBubbles;
    timerId1.current = setTimeout(() => {handleIdleUser(bubblesRef.current)}, 60000);
    timerId2.current = setTimeout(() => {finish(bubblesRef.current)}, 180000);
  }





  return (
    <>
      <div className="chat-bubbles">
        {chatBubbles.map((chatBubble) => (
          <ChatBubble sender={chatBubble.sender} key={chatBubble.id}>
            {chatBubble.text}
          </ChatBubble>
        ))}
      </div>
      <footer>
        <form onSubmit={handleSendMessage}>
          <FormControl>
            <TextField
              disabled={isFinished}
              required={!isFinished}
              type="text"
              fullWidth
              value={message}
              onChange={handleMessage}
              label={!isFinished ? "Escreva sua mensagem" : "Conversa encerrada."}
              variant="outlined"
            />
          </FormControl>
        </form>
      </footer>
    </>
  );
}
