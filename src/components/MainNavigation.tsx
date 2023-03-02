import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import MainMenu from "./Menu";
import {
  useState,
  MouseEvent,
  cloneElement,
  ReactElement,
} from "react";

function ElevationScroll({ children }: { children: ReactElement }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  // TODO: change color
  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const MainNavigation = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  const handleMenuClick = (e: MouseEvent<any>) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar sx={{ backgroundColor: `${theme.palette.primary.main}` }}>
          <Toolbar>
            <Typography variant="h6" component="div">
              <MenuIcon onClick={handleMenuClick} fontSize="large"/>
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <MainMenu anchorEl={anchorEl} open={menuOpen} handleClose={handleClose} />
    </React.Fragment>
  );
};

export default MainNavigation;
