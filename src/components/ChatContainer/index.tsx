import styled from "styled-components";
import { Typography} from "@mui/material";
import React, { FormEvent, ReactNode, useState } from "react";
import ChatBox from "../ChatBox/index";
import ChatWelcome from "../ChatWelcome";

const Container = styled.div`
  width: 374px;
  background-color: white;
  min-height: 300px;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  position: absolute;
  right: 32px;
  bottom: 32px;
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 0.428571rem 0px;

  header {
    background-color: #9b6be8;
    border-radius: 16px 16px 0 0;
    height: 48px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  img {
    width: 16px;
    height: 16px;
    right: 16px;
    position: absolute;
    cursor: pointer;
  }

  input {
    height: 34px;
    width: 100%;
    font-size: 12px;
    padding: 8px 16px;
    border-radius: 3px;
    border: none;
    outline: none;
  }
`;

interface ChatContainerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatContainer({ isOpen, onClose }: ChatContainerProps) {
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

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
            <ChatWelcome name={name} setName={setName} handleSubmit={handleSubmit} />
          ) : (
            <ChatBox name={name} returnToStart={returnToStart} />
          )}
        </Container>
      )}
    </>
  );
}
