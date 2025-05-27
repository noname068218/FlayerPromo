import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const immagini = [
  {
    title: "Distribuzione a Milano",
    src: "https://picsum.photos/300/200?random=1",
  },
  {
    title: "Campagna a Monza",
    src: "https://picsum.photos/300/200?random=2",
  },
  {
    title: "Consegna nei quartieri residenziali",
    src: "https://picsum.photos/300/200?random=3",
  },
  {
    title: "Volantini nelle cassette postali",
    src: "https://picsum.photos/300/200?random=4",
  },
];

export default function Portfolio() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Le nostre distribuzioni
      </Typography>

      <Grid container spacing={3}>
        {immagini.map((img, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} {...({} as any)}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={img.src}
                alt={img.title}
              />
              <CardContent>
                <Typography variant="subtitle1">{img.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
