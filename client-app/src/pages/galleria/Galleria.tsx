import { useEffect, useState } from "react";
import { fetchGalleryImages, GalleryImage } from "../../api/gallery";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

export default function Galleria() {
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    fetchGalleryImages()
      .then(setImages)
      .catch(() => {
        alert("Errore nel caricamento immagini");
      });
  }, []);
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Le nostre distribuzioni
      </Typography>
      <Grid container spacing={3}>
        {images.map((img) => (
          <Grid items xs={12} sm={6} md={4} key={img.id} {...({} as any)}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={`http://localhost:5183/uploads/Gallery/${img.fileName}`}
                alt={img.title || "Distribuzione"}
              />
              <CardContent>
                <Typography variant="subtitle1">{img.title}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {new Date(img.data).toLocaleDateString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
