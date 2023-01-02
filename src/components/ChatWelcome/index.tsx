import styled from "styled-components";
import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Input,
} from "@mui/material";
import { ReactNode, useState, useEffect } from "react";
import ChatBox from "../ChatBox/index";


const Welcome = styled.div`
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

  .card-body {
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    box-sizing: border-box;
    padding: 24px;
    gap: 10px;
    p {
      margin: 24px 0;
    }
  }

  .chat-box {
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    box-sizing: border-box;
    padding: 24px;
    gap: 10px;
    overflow-y: hidden;
    p {
      margin: 24px 0;
    }
    footer {
      background-color: #9b6be8;
      /* border-radius: 16px 16px 0 0; */
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

interface ChatWelcomeProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatBubble {
  id: number;
  sender: string;
  text: ReactNode;
}

export default function ChatWelcome({ isOpen, onClose }: ChatWelcomeProps) {
  const [name, setName] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  function handleSubmit(event: any) {
    event.preventDefault();
    const chatBubbles = [
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
    ];
    setIsSubmitted(true);
  }

  const handleInputChange = (e: any) => {
    const { value } = e.target;
    setName(value);
  };

  function returnToStart() {
    setName("");
    setIsSubmitted(false);
  }



  return (
    <>
      {isOpen && (
        <Welcome>
          <header>
            <Typography>Fale conosco</Typography>
            <img
              onClick={onClose}
              src="../../../public/close-icon.svg"
              alt=""
            />
          </header>
          {!isSubmitted ? (
            <div className="card-body">
              <Typography color="black">
                Boas vindas ao nosso chat!
                <br />
                Por favor, insira seu nome:
                <br />
              </Typography>

              <form onSubmit={handleSubmit}>
                <FormControl>
                  <TextField
                    required
                    type="text"
                    fullWidth
                    value={name}
                    onChange={handleInputChange}
                    label="Seu nome"
                    variant="outlined"
                  />
                </FormControl>
              </form>
            </div>
          ) : (
            <>
              <div className="chat-box">
                <ChatBox name={name} returnToStart={returnToStart} />
              </div>
            </>
          )}
        </Welcome>
      )}
    </>
  );
}
