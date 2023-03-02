import { Box, List, ListItem, Typography, useTheme } from "@mui/material";
import { PositionType } from "../../types";

type PostionProps = {
  position: PositionType;
};

const PositionDetails = ({ position }: PostionProps) => {
  const theme = useTheme();

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(1.2)" }}
    >
      •
    </Box>
  );

  return (
    <Box sx={{ width: "100%", m: 2 }}>
      <Typography variant="subtitle1" component="h1">
        <em>Responsibilities</em>
      </Typography>
      <List dense={true}>
        {position.responsibilities.map((responsibility) => (
          <ListItem>
            {bull}
            {responsibility}
          </ListItem>
        ))}
      </List>
      {position.accomplishments && (
        <>
          <Typography variant="subtitle1" component="h1">
            <em>Accomplishments</em>
          </Typography>
          <List dense={true}>
            {position.accomplishments.map((accomplishment) => (
              <ListItem>
                {bull}
                {accomplishment}
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Box>
  );
};

export default PositionDetails;
