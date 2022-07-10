import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MarkEmailReadRoundedIcon from "@mui/icons-material/MarkEmailReadRounded";
import Box from "@mui/material/Box";

export default function CheckboxLabels() {
  return (
    <form noValidate>
      <FormGroup row>
        <FormControlLabel
          label
          sx={{ mr: 0, ml: 0 }}
          control={
            <TextField
              sx={{
                height: "100%",
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0
              }}
              fullWidth
              label="Tu Dirección de E-Mail"
              variant="outlined"
              type="email"
              name="EMAIL"
              className="email"
              id="mce-EMAIL"
            />
          }
        />
        <FormControlLabel
          label
          value=""
          control={
            <Button
              sx={{
                height: "100%",
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                textTransform: "lowercase"
              }}
              endIcon={<MarkEmailReadRoundedIcon />}
              disableElevation
              variant="contained"
              color="primary"
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
            >
              Suscribite
            </Button>
          }
        />
      </FormGroup>
    </form>
  );
}