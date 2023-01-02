import styled from "styled-components";
import { ReactNode } from "react";

const Bubble = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  color: #0d1c8c;
  background: #e8eafd;
  border-radius: 6px;
  justify-content: start;
  width: fit-content;
  text-align: left;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

interface ChatBubbleProps {
  sender: string;
  children: ReactNode;
}

export default function ChatBubble({ sender, children }: ChatBubbleProps) {

  return (
    <Bubble style={sender === "user" ? {color: "#000000",
    background: "#FFFFFF", alignSelf: "end",} : {color: "#0d1c8c",
      background: "#e8eafd"}}>
      {children}
    </Bubble>
  );
}
