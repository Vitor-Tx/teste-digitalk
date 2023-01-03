import { Typography, TextField, FormControl } from "@mui/material";
import { Dispatch, FormEvent, SetStateAction } from "react";
import styled from "styled-components";

interface ChatWelcomeProps {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const Welcome = styled.div`
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
`;

export default function ChatWelcome({
  name,
  setName,
  handleSubmit,
}: ChatWelcomeProps) {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
  };

  return (
    <Welcome>
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
    </Welcome>
  );
}
