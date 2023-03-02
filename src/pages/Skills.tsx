import { Box, Typography, useTheme } from "@mui/material";

const Skills = () => {
  const theme = useTheme();

  return (
    <Box sx={{ my: 4, width: "100%" }}>
      <Typography variant="h4" component="h1">
        Skills
      </Typography>
    </Box>
  );
};

export default Skills;
