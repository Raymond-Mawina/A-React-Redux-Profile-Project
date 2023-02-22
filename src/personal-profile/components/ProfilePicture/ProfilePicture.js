import React from "react";
import { Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";
import MemorableStatement from "../MemorableStatement/MemorableStatement.js";
function ProfilePicture(props) {
  return (
    <Grid
      item
      xs={12}
      sm={5}
      md={3.5}
      lg={3.4}
      data-testid="ProfilePicture"
      style={{ marginTop: "20px" }}
    >
      <Typography variant="h4" textAlign="left" fontWeight="bold">
        Profile Picture
      </Typography>
      <Card sx={{ maxWidth: "90%" }}>
        <CardMedia
          component="img"
          image="./images/profile.jpg"
          height="200px"
          alt="My profile picture"
        />
        <CardContent>
          <MemorableStatement memorableStatement={props.memorableStatement} />
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ProfilePicture;
