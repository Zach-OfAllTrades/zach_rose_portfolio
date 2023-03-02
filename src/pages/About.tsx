import { Box, Typography, useTheme } from "@mui/material";

const About = () => {
  const theme = useTheme();

  return (
    <Box sx={{ my: 4, width: "100%" }}>
      <Typography variant="h4" component="h1">
        About
      </Typography>
    </Box>
  );
};

export default About;
