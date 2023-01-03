import { Bubble } from "./styles";
import { ReactNode } from "react";

interface ChatBubbleProps {
  sender: string;
  children: ReactNode;
}

export default function ChatBubble({ sender, children }: ChatBubbleProps) {
  return (
    <Bubble
      style={
        sender === "user"
          ? { color: "#000000", background: "#FFFFFF", alignSelf: "end" }
          : { color: "#0d1c8c", background: "#e8eafd" }
      }
    >
      {children}
    </Bubble>
  );
}
