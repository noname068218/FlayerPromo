import { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Paper,
  Rating,
  Typography,
  CircularProgress,
} from "@mui/material";
import { getReviews, Review } from "../../api/reviews";

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getReviews()
      .then(setReviews)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Container sx={{ mt: 4, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Cosa dicono i nostri clienti
      </Typography>
      <Grid container spacing={3}>
        {reviews.map((rec) => (
          <Grid item xs={12} md={4} key={rec.id} {...({} as any)}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar src={rec.foto || "/logo192.png"} sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="subtitle1">{rec.nome}</Typography>
                  <Rating value={rec.valutazione} readOnly size="small" />
                </Box>
              </Box>
              <Typography variant="body2">“{rec.commento}”</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
