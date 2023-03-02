import { Avatar, Box, Grid, Slide, Typography, useTheme } from "@mui/material";

const Home = () => {
  const theme = useTheme();
  const itemSx = { border: "0px solid red", display: "flex" };

  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <Box sx={{ my: "10%" }}>
        <Grid container direction="row" justifyContent="center">
          <Grid
            item
            xs={8}
            sm={6}
            md={4}
            container
            direction="column"
            justifyContent="flex-end"
          >
            <Grid item sx={itemSx}>
              <Typography
                sx={{ color: `${theme.palette.secondary.main}`, mr: 1 }}
                variant="h3"
                component="h1"
              >
                Howdy.
              </Typography>
              <Typography variant="h3" component="h1">
                I'm Zach.
              </Typography>
            </Grid>
            <Grid sx={itemSx} item>
              <Typography variant="h6" component="h1">
                Builder. Life-Long Learner. Software Engineer.
              </Typography>
            </Grid>
          </Grid>

          <Grid
            sx={{
              ...itemSx,
              display: "flex",
              justifyContent: "flex-start",
              "@media (max-width: 600px)": {
                justifyContent: "center",
              },
            }}
            item
            xs={8}
            sm={5}
            md={4}
          >
            <Avatar
              sx={{
                bgcolor: `${theme.palette.grey[700]}`,
                width: 400,
                height: 400,
              }}
            >
              Z
            </Avatar>
          </Grid>
        </Grid>
      </Box>
    </Slide>
  );
};

export default Home;
