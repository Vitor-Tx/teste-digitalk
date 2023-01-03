import { Button } from "./styles";
interface ChatButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function ChatButton({ isOpen, onClick }: ChatButtonProps) {
  return (
    <>
      {!isOpen && (
        <Button onClick={onClick}>
          <img src="../../../cht2.png" alt="" />
        </Button>
      )}
    </>
  );
}
