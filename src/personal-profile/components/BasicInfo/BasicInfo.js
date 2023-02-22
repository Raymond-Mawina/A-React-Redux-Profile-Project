import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
} from "@mui/material";

function BasicInfo(props) {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={6}
      lg={6}
      data-testid="BasicInfo"
      style={{ marginTop: "20px" }}
    >
      <Typography variant="h4" textAlign="left" fontWeight="bold">
        Contacts
      </Typography>
      <List>
        {props.contactBasic.map((contact) => (
          <ListItem key={contact.id}>
            <contact.icon />

            <ListItemText style={{ marginLeft: "15px" }}>
              {contact.contact}
            </ListItemText>
          </ListItem>
        ))}

        {
          <ListItem>
            <props.hireMeLink.icon />
            <Button
              variant="contained"
              onClick={() => window.open(props.hireMeLink.link, "_blank")}
              style={{ marginLeft: "15px", width: "120px" }}
            >
              HIRE ME
            </Button>
          </ListItem>
        }

        {
          <ListItem key={props.email.id}>
            <props.email.icon />
            <Button
              variant="contained"
              onClick={() =>
                window.open(`mailto:${props.email.link}`, "_blank")
              }
              style={{ marginLeft: "15px", width: "120px" }}
            >
              {props.email.id} me
            </Button>
          </ListItem>
        }

        {props.contactLinks.map((contact) => (
          <ListItem key={contact.id}>
            <contact.icon />
            <Button
              variant="contained"
              onClick={() => window.open(contact.link, "_blank")}
              style={{ marginLeft: "15px", width: "120px" }}
            >
              {contact.id}
            </Button>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}

export default BasicInfo;
