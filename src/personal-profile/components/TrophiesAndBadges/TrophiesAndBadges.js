import React from "react";
import {
  Grid,
  Badge,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";

function TrophiesAndBadges(props) {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={4}
      lg={4}
      data-testid="TrophiesAndBadges"
      style={{ marginTop: "20px" }}
    >
      <List>
        <Typography variant="h4" textAlign="left" fontWeight="bold">
          Achievements
        </Typography>
        {props.trophiesAndBadges.map((trophieOrBadge) => (
          <Grid key={trophieOrBadge.name}>
            <ListItem>
              <Badge badgeContent={trophieOrBadge.amount} color="primary">
                <trophieOrBadge.icon />
              </Badge>

              <ListItemText style={{ marginLeft: "15px" }}>
                {trophieOrBadge.name}
              </ListItemText>
            </ListItem>
            <Divider sx={{ width: "65%" }} />
          </Grid>
        ))}
      </List>
    </Grid>
  );
}

export default TrophiesAndBadges;
