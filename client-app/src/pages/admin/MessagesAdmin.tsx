import { useEffect, useState } from "react";
import { fetchMessages, Message } from "../../api/messagesAdmin";
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { deleteMessage } from "../../api/messages";

export default function AdminMessages() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetchMessages()
      .then(setMessages)
      .catch(() => {
        alert("Accesso negato o errore");
      });
  }, []);

  const handleDelete = async (id: number) => {
    if (!window.confirm("Sei sicuro di voler eliminare questo messaggio?"))
      return;
    try {
      await deleteMessage(id);
      setMessages((prev) => prev.filter((m) => m.id !== id));
    } catch {
      alert("Errore durante la cancellazione");
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Messaggi ricevuti
      </Typography>
      <List>
        {messages.map((msg) => (
          <Paper key={msg.id} sx={{ mb: 2, p: 2 }}>
            <ListItem>
              <IconButton onClick={() => handleDelete(msg.id)} color="error">
                <DeleteIcon />
              </IconButton>

              <ListItemText
                primary={`${msg.nome} (${msg.email})`}
                secondary={
                  <>
                    <Typography variant="body2" color="text.secondary">
                      {msg.servizio} - {new Date(msg.data).toLocaleString()}
                    </Typography>
                    <Typography>{msg.messaggio}</Typography>
                  </>
                }
              />
            </ListItem>
          </Paper>
        ))}
      </List>
    </Container>
  );
}
