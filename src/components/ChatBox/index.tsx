import styled from "styled-components";
import { Dispatch, ReactNode, SetStateAction, useEffect, useRef, useState } from "react";
import ChatBubble from "../ChatBubble";
import { TextField, FormControl } from "@mui/material";

interface ChatBubble {
  id: number;
  sender: string;
  text: ReactNode;
}

interface ChatBoxProps {
  name: string;
  chatBubbles: ChatBubble[];
  setChatBubbles: Dispatch<SetStateAction<ChatBubble[]>>;
  returnToStart: () => void;
}

const Button = styled.button`
  border: none;
  background-color: white;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    border: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  box-sizing: border-box;
  padding: 24px;
  gap: 10px;
  overflow-y: hidden;

  @media (max-width: 576px) {
    min-height: 400px;
  }
  p {
    margin: 24px 0;
  }
  footer {
    background-color: #9b6be8;
    height: 32px;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    position: relative;
    form {
      width: 100%;
      div {
        width: 100%;
      }
    }
    input {
      background: #fafafa;
      color: #0000007e;
      border: 1px solid #e1e1e1;
      box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.07);
      height: 34px;
      width: 100%;
      font-size: 12px;
      padding: 8px 16px;
      border-radius: 3px;
      border: none;
      outline: none;
    }
  }

  .chat-bubbles {
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: scroll;
  }
`;

export default function ChatBox({ name, chatBubbles, setChatBubbles, returnToStart }: ChatBoxProps) {
  const [isFinished, setIsFinished] = useState(false);
  const [message, setMessage] = useState("");
  chatBubbles[0].text = (<>
    {" "}
    Bem-vindo, {name}! <br />
    Como posso te ajudar?{" "}
  </>)


  const timerId1 = useRef(0);
  const timerId2 = useRef(0);
  const bubblesRef = useRef(chatBubbles);
  bubblesRef.current = chatBubbles;

  function handleIdleUser(currentChatBubbles: ChatBubble[]) {
    const warning = {
      id: currentChatBubbles.length + 1,
      sender: "pc",
      text: (
        <>{`${name}, você enviou ${
          currentChatBubbles.filter((bubble) => bubble.sender === "user").length
        } mensagens.`}</>
      ),
    };
    setChatBubbles((prevState) => prevState.concat(warning));
  }

  function finish(currentChatBubbles: ChatBubble[]) {
    const finishMessage = {
      id: currentChatBubbles.length + 2,
      sender: "pc",
      text: (
        <>
          {`Devido à ociosidade, a conversa foi encerrada automaticamente.`}
          <br /> <Button onClick={returnToStart}>Voltar</Button>{" "}
        </>
      ),
    };
    setChatBubbles((prevState) => prevState.concat(finishMessage));
    setIsFinished(true);
  }

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

    timerId1.current = setTimeout(() => {
      handleIdleUser(bubblesRef.current);
    }, 60000);

    timerId2.current = setTimeout(() => {
      finish(bubblesRef.current);
    }, 180000);
  }

  useEffect(() => {
    console.log("renderizou!");
    console.log(name);
    bubblesRef.current = chatBubbles;
    console.log(bubblesRef.current);
    timerId1.current = setTimeout(() => {
      handleIdleUser(bubblesRef.current);
    }, 60000);
    timerId2.current = setTimeout(() => {
      finish(bubblesRef.current);
    }, 180000);

    return () => {
      clearTimeout(timerId1.current);
      clearTimeout(timerId2.current);
    };
  }, []);

  return (
    <Container>
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
              label={
                !isFinished ? "Escreva sua mensagem" : "Conversa encerrada."
              }
              variant="outlined"
            />
          </FormControl>
        </form>
      </footer>
    </Container>
  );
}
