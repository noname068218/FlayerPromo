import { useState } from "react";
import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { Message, sendMessage } from "../../api/messages";

const servizi = [
  "Distribuzione porta a porta",
  "Distribuzione a mano",
  "Affissione manifesti",
  "Report fotografici",
  "Controllo qualità",
];

export default function ContactForm() {
  const [form, setForm] = useState<Message>({
    nome: "",
    email: "",
    telefono: "",
    servizio: "",
    messaggio: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendMessage(form);
      alert("Richiesta inviata con successo!");
      setForm({
        nome: "",
        email: "",
        telefono: "",
        servizio: "",
        messaggio: "",
      });
    } catch (error) {
      alert("Errore durante l'invio del messaggio.");
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Contattaci
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          label="Nome"
          name="nome"
          fullWidth
          margin="normal"
          value={form.nome}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          value={form.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Telefono"
          name="telefono"
          fullWidth
          margin="normal"
          value={form.telefono}
          onChange={handleChange}
        />
        <TextField
          label="Servizio desiderato"
          name="servizio"
          select
          fullWidth
          margin="normal"
          value={form.servizio}
          onChange={handleChange}
          required
        >
          {servizi.map((s, i) => (
            <MenuItem key={i} value={s}>
              {s}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Messaggio"
          name="messaggio"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={form.messaggio}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Invia richiesta
        </Button>
      </Box>
    </Container>
  );
}
