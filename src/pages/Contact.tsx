import { Box, Typography, useTheme } from "@mui/material";

const Contact = () => {
  const theme = useTheme();

  return (
    <Box sx={{ my: 4, width: "100%" }}>
      <Typography variant="h4" component="h1">
        Contact
      </Typography>
    </Box>
  );
};

export default Contact;
