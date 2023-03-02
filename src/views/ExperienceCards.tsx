import { Box, Fade, useTheme } from "@mui/material";
import React, { useState } from "react";
import { allExperience } from "../info";
import ExperienceCard from "../components/experience/ExperienceCard";

const ExperienceCards = () => {
  const theme = useTheme();
  const [seeDetailsId, setSeeDetailsId] = useState(null);

  const handleSeeDetails = () => {};

  return (
    <Fade in={true}>
      <Box
        sx={{
          my: 2,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          "@media (max-width: 1300px)": {
            justifyContent: "flex-start",
            px: 5,
          },
          "@media (max-width: 400px)": {
            px: 0,
            m: 0,
          },
        }}
      >
        {allExperience.map((experience, index) => (
          <ExperienceCard
            experience={experience}
            seeDetailsId={seeDetailsId}
            setSeeDetailsId={setSeeDetailsId}
            index={index}
          />
        ))}
      </Box>
    </Fade>
  );
};

export default ExperienceCards;
