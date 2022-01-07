import React, { useState } from 'react';
import { Box, Divider, Drawer, IconButton, useTheme } from '@mui/material'
import { Button, Link } from "gatsby-theme-material-ui";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { Logo } from "../components";
import SidebarFooter from "./SidebarFooter";
import { Close, Menu } from "@mui/icons-material";


const Wrapper = styled.nav`
  width: ${props => props.drawerWidth};
`;

const IconWrapper = styled.span`
  position: absolute;
  top: 1em;
  left: 1em;
  z-index: ${props => props.zIndex};
`

export default function Sidebar(props) {
  const theme = useTheme();
  const config = useStaticQuery(configQuery);
  const sidebarLinks = config.allConfigJson.nodes[0].sidebarLinks;
  const socialButtons = config.allConfigJson.nodes[0].socialLinks;
  const drawerWith = theme.components.MuiDrawer.styleOverrides.root.width;
  const [drawerOpen, setDrawerOpen] = useState(false)
  const hamburgerZIndex = theme.zIndex.hamburgerMenu;
  return (
    <Wrapper drawerWidth={drawerWith}>
      <IconWrapper zIndex={hamburgerZIndex} onClick={() => setDrawerOpen(!drawerOpen)}>
        <IconButton>
          { drawerOpen ? <Close /> : <Menu /> }
        </IconButton>
      </IconWrapper>
      <Drawer
        sx={{
          width: drawerWith,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            justifyContent: 'flex-start',
            width: drawerWith,
            marginRight: drawerWith
          },
        }}
        open={drawerOpen}
        variant="persistent"
        anchor="left"
      >
        <Logo />
        <Divider variant="middle" />
        <Box sx={{
          m: 'auto 0',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {sidebarLinks.map(
            sidebarItem => (
              <Button
                sx={{justifyContent: 'flex-start'}}
                key={sidebarItem.name}
                component={Link}
                to={sidebarItem.link}
              >
                {sidebarItem.name}
              </Button>
            )
          )}
        </Box>
        <SidebarFooter socialButtons={socialButtons} />
      </Drawer>
    </Wrapper>
  );
}

const configQuery = graphql`{
allConfigJson {
  nodes {
      sidebarLinks {
        link
        name
      }
      socialLinks {
        color
        icon
        link
        name
      }
    }
  }
}
`;
