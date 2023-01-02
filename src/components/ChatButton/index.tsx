import styled from "styled-components";

const Button = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  right: 32px;
  bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  img {
    width: 60px;
    height: 60px;
  }
`;

interface ChatButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

export default function ChatButton({ isOpen, onClick }: ChatButtonProps) {
    return (
        <>
          {!isOpen && <Button onClick={onClick}><img src="../../../public/cht2.png" alt="" /></Button>}
        </>
    );
}
