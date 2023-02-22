import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

function Testimonials(props) {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={4}
      lg={4}
      data-testid="Testimonials"
      style={{ marginTop: "20px" }}
    >
      <List>
        <Typography variant="h4" textAlign="left" fontWeight="bold">
          Testinomials
        </Typography>
        {props.testimonials.map((testimonial) => (
          <Grid key={testimonial.name}>
            <ListItem>
              <ListItemText style={{ width: "20%" }}>
                {testimonial.name}
              </ListItemText>
              <ListItemText style={{ width: "60%" }}>
                {testimonial.testimony}
              </ListItemText>
            </ListItem>
            <Divider sx={{ width: "100%" }} />
          </Grid>
        ))}
      </List>
    </Grid>
  );
}

export default Testimonials;
