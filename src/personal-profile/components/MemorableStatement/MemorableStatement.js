import React from "react";
import { Typography } from "@mui/material";

function MemorableStatement(props) {
  return (
    <Typography data-testid="MemorableStatement">
      {props.memorableStatement}
    </Typography>
  );
}

export default MemorableStatement;
