import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAdmin(!!token); // true, если токен есть
  }, []);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Volantini Express
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/servizi">
            Servizi
          </Button>
          <Button color="inherit" component={RouterLink} to="/galleria">
            Galleria
          </Button>
          <Button color="inherit" component={RouterLink} to="/contactForm">
            Contatti
          </Button>
          <Button color="inherit" component={RouterLink} to="/chi-siamo">
            Chi siamo
          </Button>
          <Button color="inherit" component={RouterLink} to="/portfolio">
            Le nostre distribuzioni
          </Button>
          <Button color="inherit" component={RouterLink} to="/review">
            Recensioni
          </Button>

          {/* Показываем ТОЛЬКО если пользователь залогинен (есть токен) */}
          {isAdmin && (
            <>
              <Button color="inherit" component={RouterLink} to="/admin">
                Admin
              </Button>
              <Button
                color="inherit"
                component={RouterLink}
                to="/admin/gallery-upload"
              >
                Caricamento in Galleria
              </Button>
              <Button
                color="inherit"
                component={RouterLink}
                to="/admin/messages"
              >
                Messaggi
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
