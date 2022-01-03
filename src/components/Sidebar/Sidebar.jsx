import React from 'react';
import { Box, Button, Divider, Drawer, List, ListItem, Toolbar, Typography, useTheme } from "@mui/material";
import Logo from "../Logo/Logo";
import styled from "styled-components";
import SocialButtons from "../SocialButtons/SocialButtons";

const drawerWidth = '240px';
const titleHeight = '120px';
export default function Sidebar({ sideBarItems, children }) {
  const theme = useTheme();
  return (
    <>
      <Box sx={{
        display: 'flex',
        alignItems: 'stretch',
        height: '100vh'
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
          <Toolbar sx={{
            height: `${titleHeight}`
          }}>
            <Logo />
          </Toolbar>
          <Divider variant="middle"/>
          <List sx={{
            m: 'auto 0'
          }}>
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
          <Box>
            <Divider variant="middle"/>
            <List sx={{
              mt: 'auto'
            }}>
              <ListItem>
                <SocialButtons />
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{
          flexGrow: 1,
          overflowX: 'hidden',
          height: '100%'
        }}>
          {children}
        </Box>
      </Box>
    </>
  );
}
