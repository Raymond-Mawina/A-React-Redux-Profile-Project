import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import BasicInfo from "../BasicInfo/BasicInfo";
import EmploymentHistory from "../EmploymentHistory/EmploymentHistory";
import Testimonials from "../Testimonials/Testimonials";
import TrophiesAndBadges from "../TrophiesAndBadges/TrophiesAndBadges";
import ProfilePicture from "../ProfilePicture/ProfilePicture.js";
import { profileDetails } from "./utilities.js";

function App() {
  const [contactBasic, setContactBasic] = useState(profileDetails.contactBasic);
  const [contactLinks, setContactLinks] = useState(profileDetails.contactLinks);
  const [email, setEmail] = useState(profileDetails.email);
  const [hireMeLink, setHireMeLink] = useState(profileDetails.hireMeLink);
  const [memorableStatement, setMemorableStatement] = useState(
    profileDetails.memorableStatement
  );
  const [employmentHistory, setEmploymentHistory] = useState(
    profileDetails.employmentHistory
  );
  const [testimonials, setTestimonials] = useState(profileDetails.testimonials);
  const [trophiesAndBadges, setTrophiesAndBadges] = useState(
    profileDetails.trophiesAndBadges
  );

  useEffect(() => {
    setContactBasic(profileDetails.contactBasic);
    setContactLinks(profileDetails.contactLinks);
    setEmail(profileDetails.email);
    setHireMeLink(profileDetails.hireMeLink);
    setMemorableStatement(profileDetails.memorableStatement);
    setEmploymentHistory(profileDetails.employmentHistory);
    setTestimonials(profileDetails.testimonials);
    setTrophiesAndBadges(profileDetails.trophiesAndBadges);
  }, []);

  return (
    <Box data-testid="App">
      <Typography variant="h3" textAlign="center" fontWeight="bold">
        Public Profile
      </Typography>
      <Grid container justifyContent="center">
        <BasicInfo
          contactBasic={contactBasic}
          contactLinks={contactLinks}
          email={email}
          hireMeLink={hireMeLink}
        />
        <ProfilePicture memorableStatement={memorableStatement} />

        <EmploymentHistory employmentHistory={employmentHistory} />
        <TrophiesAndBadges trophiesAndBadges={trophiesAndBadges} />
        <Testimonials testimonials={testimonials} />
      </Grid>
    </Box>
  );
}

export default App;
