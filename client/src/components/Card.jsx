import React from "react";
import Image from "../../images/trail_card.webp";
import ImageBulltet from "../../images/eth_bullet.png";
import { Typography, Card, TextField, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: "40px",
        },
      },
    },
  },
});

const CardImage = () => {
  return (
    <>
      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src={Image}
          alt="no image"
          style={{
            marginTop: "100px",
            marginLeft: "100px",
            height: "200px",
            width: "400px",
          }}
        />
        <img
          src={ImageBulltet}
          alt="logo"
          style={{
            position: "absolute",
            top: "110px",
            left: "110px",
            height: "30px",
            width: "30px",
          }}
        />
        <Typography sx={{ mt: "-70px", marginLeft: "120px", fontSize: "18px" }}>
          Address
        </Typography>
        <Typography
          sx={{
            mt: "-4",
            marginLeft: "110px",
            fontSize: "27px",
            fontWeight: "bold",
          }}
        >
          Ethereum
        </Typography>
      </div>
      <div>
        <Card
          sx={{
            backgroundColor: "#011128",
            height: "300px",
            mt: "30px",
            width: "500px",
          }}
        >
          <Card
            sx={{
              marginLeft: "160px",
              backgroundColor: "#2E3744",
              height: "270px",
              width: "450px",
              margin: "15px",
              padding: "20px",
            }}
          >
            <ThemeProvider theme={theme}>
              <TextField
                placeholder="Address"
                sx={{
                  backgroundColor: "#61AFD6",
                  width: "100%",
                  fontSize: "14px",
                }}
                fullWidth
              />
              <Grid sx={{ mt: "22px" }}>
                <TextField
                  placeholder="Address"
                  sx={{
                    backgroundColor: "#61AFD6",
                    width: "100%",
                    fontSize: "14px",
                  }}
                  fullWidth
                />
              </Grid>
              <Grid sx={{ mt: "22px" }}>
                <TextField
                  placeholder="Address"
                  sx={{
                    backgroundColor: "#61AFD6",
                    width: "100%",
                    fontSize: "14px",
                  }}
                  fullWidth
                />
              </Grid>
              <Grid sx={{ mt: "22px" }}>
                <TextField
                  placeholder="Address"
                  sx={{
                    backgroundColor: "#61AFD6",
                    width: "100%",
                    fontSize: "14px",
                  }}
                  fullWidth
                />
              </Grid>
            </ThemeProvider>
          </Card>
        </Card>
      </div>
    </>
  );
};

export default CardImage;
