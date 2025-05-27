import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import LocalMallIcon from "@mui/icons-material/LocalMall";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import CampaignIcon from "@mui/icons-material/Campaign";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import VerifiedIcon from "@mui/icons-material/Verified";

const servizi = [
  {
    title: "Distribuzione porta a porta",
    description:
      "Consegna diretta dei volantini nelle cassette postali di abitazioni e uffici.",
    icon: <LocalMallIcon fontSize="large" />,
  },
  {
    title: "Distribuzione a mano",
    description:
      "Distribuzione in zone ad alto traffico: stazioni, piazze, centri commerciali.",
    icon: <DirectionsWalkIcon fontSize="large" />,
  },
  {
    title: "Affissione manifesti",
    description: "Servizio di affissione su bacheche pubbliche e private.",
    icon: <CampaignIcon fontSize="large" />,
  },
  {
    title: "Report fotografici",
    description:
      "Invio di foto e video per confermare l'avvenuta distribuzione.",
    icon: <PhotoCameraIcon fontSize="large" />,
  },
  {
    title: "Controllo qualità",
    description:
      "Controllo interno sulla copertura e sul rispetto degli orari.",
    icon: <VerifiedIcon fontSize="large" />,
  },
];

export default function Services() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography align="center" variant="h4" gutterBottom>
        I nostri servizi
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {servizi.map((servizio, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} {...({} as any)}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
              <Box sx={{ mb: 1 }}>{servizio.icon}</Box>
              <Typography variant="h6">{servizio.title}</Typography>
              <Typography variant="body2">{servizio.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
