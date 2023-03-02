import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Fade,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import moment from "moment";
import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { CURRENTLY_WORKING_TEXT } from "../../info";
import { ExperienceType } from "../../types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import PositionDetails from "./PositionDetails";

type ExperienceCardProps = {
  experience: ExperienceType;
  seeDetailsId: string | null;
  setSeeDetailsId: any;
  index: number;
};

const STANDARD_CARD_WIDTH = 390;
const STANDARD_CARD_HEIGHT = 450;

const ExperienceCard = ({
  experience,
  seeDetailsId,
  setSeeDetailsId,
  index,
}: ExperienceCardProps) => {
  /***********STATE VARIABLES*************/
  const theme = useTheme();
  const [isShowing, setIsShowing] = useState(true);
  const [isShowingDetails, setIsShowingDetails] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const thisCard = useRef<HTMLDivElement>(null);

  /***********STYLING*************/
  const cardSx = {
    width: STANDARD_CARD_WIDTH,
    height: STANDARD_CARD_HEIGHT,
    bgcolor: `${theme.palette.grey[900]}`,
    boxShadow: `1px 1px 3px #000000`,
    color: `${theme.palette.primary.contrastText}`,
    m: 2,
    minWidth: STANDARD_CARD_WIDTH,
    minHeight: STANDARD_CARD_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    transition: "width 2s, height 4s",
  };
  const avatarSx = {
    bgcolor: `${theme.palette.grey[700]}`,
    height: 150,
    width: 150,
    mt: "-15%",
    ml: "120px",
  };
  const cardHeaderSx = {
    bgcolor: `${theme.palette.secondary.main}`,
    height: 120,
  };
  const employerBoxSx = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  };
  const exployerTextSx = { mx: 2, mb: 0, mt: 4 };
  const dateTextSx = { my: 0.5, color: `${theme.palette.grey[100]}` };
  const titleTextSx = { mt: 2 };
  const cardFooterSx = {
    display: "flex",
    justifyContent: "flex-end",
    mt: "auto",
    bgcolor: `${theme.palette.grey[700]}`,
    width: "100%",
  };
  const seeDetailsSx = {
    color: `${theme.palette.primary.contrastText}`,
    textTransform: "none",
  };

  /***********END STYLING*************/

  useEffect(() => {
    const showDetails = seeDetailsId === experience.id;
    setIsShowing(seeDetailsId === null || showDetails);
    setIsShowingDetails(showDetails);

    if (thisCard.current !== null) {
      thisCard.current.style.transition = "width 2s, height 4s";
    }
  }, [seeDetailsId]);

  const formatDate = (experience: ExperienceType) => {
    const formattedStart = moment(experience.startDate).format("MMMM YYYY");
    const formattedEnd =
      experience.endDate !== CURRENTLY_WORKING_TEXT
        ? moment(experience.endDate).format("MMMM YYYY")
        : CURRENTLY_WORKING_TEXT.charAt(0).toUpperCase() +
          CURRENTLY_WORKING_TEXT.slice(1); // capitalize the text
    return `${formattedStart} - ${formattedEnd}`;
  };

  const handleDetailsClick = (e: MouseEvent<any>) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    setSeeDetailsId(id);
    setCollapse(true);

    console.log(thisCard.current);
    if (thisCard.current !== null) {
      thisCard.current.style.transition = "width 2s, height 2s";
      thisCard.current.style.width = "80%";
      thisCard.current.style.height = "90%";
    }
  };

  const handleCloseClick = (e: MouseEvent<any>) => {
    e.preventDefault();
    setCollapse(false);
    setTimeout(() => setSeeDetailsId(null), 2000);
    if (thisCard.current !== null) {
      thisCard.current.style.transition = "width 2s, height 2s";
      thisCard.current.style.width = `${STANDARD_CARD_WIDTH}px`;
      thisCard.current.style.height = `${STANDARD_CARD_HEIGHT}px`;
    }
  };

  return (
    <>
      {isShowing && (
        <Fade in={isShowing}>
          <Card ref={thisCard} sx={cardSx}>
            <CardHeader
              sx={cardHeaderSx}
              action={
                isShowingDetails && (
                  <IconButton onClick={handleCloseClick}>
                    <CloseIcon />
                  </IconButton>
                )
              }
            />
            <Avatar sx={avatarSx}>T</Avatar>
            <Box sx={employerBoxSx}>
              <Typography variant="h5" component="h2" sx={exployerTextSx}>
                {experience.employer}
              </Typography>
              <Typography variant="subtitle2" component="h3" sx={dateTextSx}>
                {formatDate(experience)}
              </Typography>
              <Typography
                align="center"
                variant="h5"
                component="h3"
                sx={titleTextSx}
              >
                {experience.position.title}
              </Typography>
            </Box>
            <CardContent>
              <Collapse in={collapse} timeout={500} unmountOnExit>
                <PositionDetails
                  position={experience.position}
                ></PositionDetails>
              </Collapse>
            </CardContent>
            {!collapse && (
              <CardActions sx={cardFooterSx} disableSpacing>
                <Button
                  variant="text"
                  id={experience.id}
                  endIcon={<ExpandMoreIcon />}
                  sx={seeDetailsSx}
                  onClick={handleDetailsClick}
                >
                  See Details
                </Button>
              </CardActions>
            )}
          </Card>
        </Fade>
      )}
    </>
  );
};

export default ExperienceCard;
