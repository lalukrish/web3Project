import * as React from "react";
import Typography from "@mui/material/Typography";
import { Button, Card, Grid } from "@mui/material";
import CardImage from "./Card";

const ExampleComponent = () => {
  return (
    <div style={{ backgroundColor: "#160d0b", minHeight: "100vh" }}>
      <Grid container style={{ height: "100%" }}>
        <Grid item xs={12} md={6}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ height: "100%", padding: "20px" }}
          >
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ color: "white", fontSize: "50px", textAlign: "center" }}
              >
                Welcome to
                <br />
                Famkit Crypto World
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "50px" }}>
              <Typography sx={{ color: "white", textAlign: "center" }}>
                Press to Exchange
              </Typography>
              <Button
                color="primary"
                variant="contained"
                sx={{
                  width: "500px",
                  mt: "18px",
                  borderRadius: "15px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Connect to Wallet
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "50px" }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "100%",
                      height: "80px",
                      color: "white",
                      borderRadius: "15px",
                    }}
                  >
                    Reliability
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "100%",
                      height: "80px",
                      color: "white",
                      borderRadius: "15px",
                    }}
                  >
                    Security
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "100%",
                      height: "80px",
                      color: "white",
                      borderRadius: "15px",
                    }}
                  >
                    Ethereum
                  </Button>
                </Grid>
                {/* Add more Grid items for additional buttons */}
                <Grid item xs={4}>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "100%",
                      height: "80px",
                      color: "white",
                      borderRadius: "15px",
                    }}
                  >
                    Web 3.0
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "100%",
                      height: "80px",
                      color: "white",
                      borderRadius: "15px",
                    }}
                  >
                    Low Fees
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "100%",
                      height: "80px",
                      color: "white",
                      borderRadius: "15px",
                    }}
                  >
                    Blockchain
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Right part of your design */}
          {/* Add your content for the right part here */}
          <CardImage />
        </Grid>
      </Grid>
    </div>
  );
};

export default ExampleComponent;
