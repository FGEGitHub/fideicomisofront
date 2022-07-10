import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import EmailSub from "./EmailSuscribe";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import logo from "../../Assets/marcas.png";
//Es ist auf Large Bildschirmen nicht centered. Falls Du das willst, entfer
export default function BoxSx() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const islogo = {
    width: "300px",          
            
    };

  return (
    <Box
      padding={2}
      sx={{
        width: "100%",
        backgroundColor: "primary",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={6}
        sx={{ px: 15 }}
      >
        <Grid item xs={12} lg={6}>
          <Grid
            paddingTop={10}
            container
            direction="column"
            justifyContent="center"
            spacing={1}
            alignItems={matches ? "flex-start" : "center"}
          >
            <Grid item xs={12}>
              <Typography variant="h5" component="div" gutterBottom color="#2196f3">
                Mantenete informado sobre nuestras novedades
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{ textAlign: matches ? null : "center" }}
                variant="subtitle1"
                component="h5"
                gutterBottom
              >
                Exclusivamente para vivienda única familiar y de ocupación permanente. Las medidas, descripciones, fotografías e ilustraciones son orientativas y provisorias. La tipología, superficies y características de las unidades, así como los servicios generales y espacios comunes, están sujetos a modificaciones y replanteos que resulten de ajustes técnicos y/o requerimientos de las autoridades correspondientes. La tipología “casa unifamiliar” comprende tanto casa unifamiliar como dúplex en propiedad horizontal.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <EmailSub />
            </Grid>
          </Grid>
        </Grid>
        {matches ? null : (
          <Grid item xs={12} sx={{ width: "100%" }}>
            <Divider variant="middle" />
          </Grid>
        )}
        <Grid item xs={12} lg={6}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems={matches ? "flex-start" : "center"}
            spacing={1}
            paddingLeft={50}
          >
            <Grid item xs={12}>
              <Typography variant="h5" component="h5" gutterBottom color="#2196f3">
                Unite a la Comunidad
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <IconButton aria-label="delete">
                  <FacebookIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <InstagramIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <PinterestIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <TwitterIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <GitHubIcon />
                </IconButton>
              </Grid>
              <Grid item xs={12} spacing={2}>
                <img src={logo} alt="logo" style={islogo} />
              </Grid>
          
            </Grid>
            
            
          </Grid>
          
          
        </Grid>
          
      </Grid>
      
    </Box>
  );
}