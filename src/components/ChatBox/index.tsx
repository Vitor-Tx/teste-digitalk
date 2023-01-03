import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { TextField, FormControl } from "@mui/material";
import { Button, Container } from "./styles";
import ChatBubble from "../ChatBubble";
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

export default function ChatBox({
  name,
  chatBubbles,
  setChatBubbles,
  returnToStart,
}: ChatBoxProps) {
  const [isFinished, setIsFinished] = useState(false);
  const [message, setMessage] = useState("");
  chatBubbles[0].text = (
    <>
      {" "}
      Bem-vindo, {name}! <br />
      Como posso te ajudar?{" "}
    </>
  );

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
