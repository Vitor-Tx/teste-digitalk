import styled from "styled-components";

const Button = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #9b6be8;
  cursor: pointer;
  position: absolute;
  right: 32px;
  bottom: 32px;
`;

interface ChatButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

export default function ChatButton({ isOpen, onClick }: ChatButtonProps) {
    return (
        <>
          {!isOpen && <Button onClick={onClick}>a</Button>}
        </>
    );
}
