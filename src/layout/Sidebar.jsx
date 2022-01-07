import React from 'react';
import { Box, Divider, Drawer } from '@mui/material'
import { Button, Link } from "gatsby-theme-material-ui";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { Logo } from "../components";
import SidebarFooter from "./SidebarFooter";


const Wrapper = styled.nav`
  width: ${props => props.drawerWidth};
`;

export default function Sidebar({ drawerWidth }) {
  const config = useStaticQuery(configQuery);
  const sidebarLinks = config.allConfigJson.nodes[0].sidebarLinks;
  const socialButtons = config.allConfigJson.nodes[0].socialLinks;
  return (
    <Wrapper drawerWidth={drawerWidth}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            justifyContent: 'flex-start',
          },
        }}
        variant="permanent"
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
