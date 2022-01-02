import React from 'react';
import { Box, Button, Divider, Drawer, List, ListItem, Toolbar, Typography, useTheme } from "@mui/material";
import Logo from "../Logo/Logo";
import styled from "styled-components";

const drawerWidth = '240px';

export default function Sidebar({ sideBarItems, children }) {
  const theme = useTheme();
  return (
    <>
      <Box sx={{
        display: 'flex'
      }}>
        <Drawer
          sx={{
            display: 'flex',
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar>
            <Logo />
          </Toolbar>
          <Divider variant="middle"/>
          <List>
            {sideBarItems.map(
              ({ name, link }) => (
                <ListItem key={name}>
                  <Button disableElevation href={link} >
                    {name}
                  </Button>
                </ListItem>
              )
            )}
          </List>
        </Drawer>
        <Box sx={{
          flexGrow: 1,
          p: 5
        }}>
          {children}
        </Box>
      </Box>
    </>
  );
}
