import {
  Menu,
  useTheme,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Divider,
} from "@mui/material";
import { Hardware, Home, Mail, Person, Work } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { MouseEvent } from "react";

const ICON_SIZE = "small";
const MenuItems = [
  {
    id: "",
    label: "Home",
    icon: (style: any) => <Home sx={style} fontSize={ICON_SIZE} />,
  },
  {
    id: "experience",
    label: "Experience",
    icon: (style: any) => <Work sx={style} fontSize={ICON_SIZE} />,
  },
  {
    id: "skills",
    label: "Skills",
    icon: (style: any) => <Hardware sx={style} fontSize={ICON_SIZE} />,
  },
  {
    id: "about",
    label: "About Me",
    icon: (style: any) => <Person sx={style} fontSize={ICON_SIZE} />,
  },
  {
    id: "contact",
    label: "Contact",
    icon: (style: any) => <Mail sx={style} fontSize={ICON_SIZE} />,
  },
];

type MenuProps = {
  anchorEl: any;
  open: boolean;
  handleClose: any;
};

const MainMenu = ({ anchorEl, open, handleClose }: MenuProps) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const colorStyle = { color: `${theme.palette.primary.contrastText}` };

  const handleMenuClick = (e: MouseEvent<any>) => {
    e.preventDefault();
    navigate(`/${e.currentTarget.id}`);
    handleClose();
  };

  return (
    <Menu
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      MenuListProps={{ sx: { py: 0 } }}
    >
      <MenuList
        sx={{
          backgroundColor: `${theme.palette.grey[900]}`,
          outline: "none",
          margin: 0,
          padding: 5,
          ...colorStyle,
        }}
      >
        {MenuItems.map((item, index) => (
          <>
            <MenuItem id={item.id} onClick={handleMenuClick}>
              <ListItemIcon>{item.icon(colorStyle)}</ListItemIcon>
              <ListItemText>{item.label}</ListItemText>
            </MenuItem>
            {/* Add divider, except for the last item */}
            {index !== MenuItems.length - 1 && <Divider />}
          </>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MainMenu;
