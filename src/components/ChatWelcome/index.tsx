import styled from 'styled-components';
import { Typography, TextField  } from '@mui/material';

const Welcome = styled.div`
    width: 374px;
    background-color: white;
    min-height: 300px;
    border-radius: 16px;
    position: absolute;
    right: 32px;
    bottom: 32px;

    header {
        background-color: #9B6BE8;
        border-radius: 16px 16px 0 0;
        height: 32px;
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
      padding: 24px;
      p {
        margin: 24px 0;
      }
    }

    input {
      background: rgba(69, 33, 128, 0.2);
      color: rgb(252, 252, 252);
      height: 34px;
      width: 100%;
      font-size: 12px;
      padding: 8px 16px;
      border-radius: 3px;
      border: none;
      outline: none;
    }
`


interface ChatWelcomeProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatWelcome({ isOpen, onClose }: ChatWelcomeProps) {
  return (
      <>
        {isOpen &&
          <Welcome>
            <header>
              <Typography>
                Fale conosco
              </Typography>
              <img onClick={onClose} src="../../../public/close-icon.svg" alt="" />
            </header>
            <div className='card-body'>
              <Typography color="black">
                Boas vindas ao nosso chat!
                <br/>
                Por favor, insira seu nome:
                <br/>
              </Typography>
              {/* <input type="text" label="Seu nome" variant="outlined" /> */}
              <TextField label="Seu nome" variant="outlined" />
            </div>
          </Welcome>}
      </>
  );
}
