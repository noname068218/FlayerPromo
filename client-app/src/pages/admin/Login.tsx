import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = await login({ username, password });
      localStorage.setItem("token", token); // Сохраняем токен
      navigate("/admin"); // Переход на защищённую зону
    } catch (error) {
      alert("Login fallito. Verifica le credenziali.");
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Login Admin
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
        <TextField
          label="Username"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Accedi
        </Button>
      </Box>
    </Container>
  );
}
