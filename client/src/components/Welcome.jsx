import * as React from "react";
import Typography from "@mui/material/Typography";

const ExampleComponent = () => {
  return (
    <div
      style={{
        backgroundColor: "#160d0b",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: "20px 0",
        margin: "-8px", // Adjust the margin as needed
      }}
    >
      <Typography
        variant="body1"
        sx={{ color: "white", fontSize: "50px", textAlign: "center" }}
      >
        welcome to
        <br />
        famkit crypto world
      </Typography>
      <div>
        <Typography sx={{ color: "white" }}>press to Exchange</Typography>
      </div>
    </div>
  );
};

export default ExampleComponent;
