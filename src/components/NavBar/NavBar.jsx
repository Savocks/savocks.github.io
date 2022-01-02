import React, { useState } from 'react';
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import logo from "../../images/logo.png";
import CenteredButtonsGroup from "../CenteredButtonsGroup/CenteredButtonsGroup";

function NavBarUpToSm(props) {
  return (
    <AppBar position="static">
      <Toolbar >
        <img src={logo} alt="savocks" width="70px"/>
        <Typography typography="h6">SAVOCKS</Typography>
        <CenteredButtonsGroup>
          <Button disableElevation href="/" color="inherit" >
            <Typography typography="h6">HOME</Typography>
          </Button>
          <Button disableElevation href="/about" color="inherit">
            <Typography typography="h6">ABOUT ME</Typography>
          </Button>
          <Button disableElevation href="/projects" color="inherit">
            <Typography typography="h6">PROJECTS</Typography>
          </Button>
          <Button disableElevation href="/contact" color="inherit">
            <Typography typography="h6">CONTACT ME</Typography>
          </Button>
        </CenteredButtonsGroup>
      </Toolbar>
    </AppBar>
  );
}

const NavBarUnderSm = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  return (
    <BottomNavigation
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        sx={{
          '&.Mui-selected ': {
            color: `${theme.palette.error.dark}`
          }
        }}
        label={
          <Typography typography="h6">Home</Typography>
        } />
      <BottomNavigationAction
        sx={{
          '&.Mui-selected ': {
            color: `${theme.palette.error.dark}`
          }
        }}
        label={
          <Typography typography="h6">About Me</Typography>
        } />
      <BottomNavigationAction
        sx={{
          '&.Mui-selected ': {
            color: `${theme.palette.error.dark}`
          }
        }}
        label={
          <Typography typography="h6">Projects</Typography>
        }/>
      <BottomNavigationAction
        sx={{
          '&.Mui-selected ': {
            color: `${theme.palette.error.dark}`
          }
        }}
        label={
          <Typography typography="h6">Contacts</Typography>
        }/>
    </BottomNavigation>
  )
}

export default function NavBar(props) {
  const { breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.up('sm'));
  return (
    <>
      { matches ?
        <NavBarUpToSm/> :
        <NavBarUnderSm/>}
    </>
  );
}
