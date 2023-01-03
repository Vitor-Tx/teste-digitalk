import { Typography, TextField, FormControl } from "@mui/material";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { Welcome } from "./styles";

interface ChatWelcomeProps {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

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
