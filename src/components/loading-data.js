import { CircularProgress, Box } from "@material-ui/core";
import React from "react";

function LoadingData() {
  return (
    <Box className="loading-svg">
      <CircularProgress />
    </Box>
  );
}

export { LoadingData };
