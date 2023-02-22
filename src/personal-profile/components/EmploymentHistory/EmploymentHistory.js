import React from "react";
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

function EmploymentHistory(props) {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={4}
      lg={4}
      data-testid="EmploymentHistory"
      style={{ marginTop: "20px" }}
    >
      <List>
        <Typography variant="h4" textAlign="left" fontWeight="bold">
          Job History
        </Typography>
        {props.employmentHistory.map((employment) => (
          <Grid key={employment.companyName}>
            <ListItem>
              <ListItemText style={{ width: "1%" }}>
                {employment.companyName}
              </ListItemText>
              <ListItemText style={{ width: "1%" }}>
                {employment.position}
              </ListItemText>
              <ListItemText style={{ width: "1%" }}>
                {employment.duration}
              </ListItemText>
            </ListItem>
            <Divider sx={{ width: "90%" }} />
          </Grid>
        ))}
      </List>
    </Grid>
  );
}

export default EmploymentHistory;
