import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Benvenuti su Volantini Express
      </Typography>

      <Typography variant="h6" gutterBottom>
        Volantinaggio professionale in tutta la Lombardia
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        Consegniamo la tua pubblicità direttamente nelle mani dei potenziali
        clienti. Lavoriamo con precisione, onestà e rapidità.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Perché scegliere noi:
      </Typography>

      <List>
        <ListItem>
          <ListItemText primary="📍 Operiamo in tutta la Lombardia" />
        </ListItem>
        <ListItem>
          <ListItemText primary="👣 Distribuzione porta a porta" />
        </ListItem>
        <ListItem>
          <ListItemText primary="📸 Report fotografico e tracciamento GPS" />
        </ListItem>
        <ListItem>
          <ListItemText primary="💰 Prezzi imbattibili senza intermediari" />
        </ListItem>
        <ListItem>
          <ListItemText primary="📬 Ogni tuo volantino sarà consegnato nella cassetta postale!" />
        </ListItem>
        <ListItem>
          <ListItemText primary="✅ Un distributore di fiducia" />
        </ListItem>
      </List>

      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/contatti"
        >
          Contattaci
        </Button>
      </Box>
    </Container>
  );
}
