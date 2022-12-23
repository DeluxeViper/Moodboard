/** @format */

import React from "react";
import MoodBoard from "./Components/MoodBoard";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="bodyWrap">
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        sx={{ flex: 1 }}
      >
        My Mood Board
      </Typography>
      <MoodBoard />
    </div>
  );
}

export default App;
