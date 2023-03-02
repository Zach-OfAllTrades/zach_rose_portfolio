import { Box, Typography, useTheme } from "@mui/material";
import ExperienceCards from "../views/ExperienceCards";

const Experience = () => {
  const theme = useTheme();

  return (
    <Box sx={{ my: 4, width: "100%" }}>
      <Typography variant="h4" component="h1">
        Experience
      </Typography>
      <ExperienceCards />
    </Box>
  );
};

export default Experience;
