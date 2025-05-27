import { useState } from "react";
import { uploadGalleryImage } from "../../api/gallery";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";

export default function GalleryUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);

    try {
      await uploadGalleryImage(file, title);
      alert("Immagine caricata!");
      setFile(null);
      setTitle("");
    } catch (error) {
      alert("Errore nel caricamento");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Carica immagine nella galleria</Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400 }}
      >
        <TextField
          label="Titolo immagine (facoltativo)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <Button
          variant="contained"
          onClick={handleUpload}
          disabled={!file || loading}
        >
          {loading ? <CircularProgress size={20} /> : "Carica"}
        </Button>
      </Box>
    </Container>
  );
}
