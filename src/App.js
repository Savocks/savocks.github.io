import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Box, CssBaseline} from "@mui/material";
import Home from "./routes/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./routes/About/About";
import Projects from "./routes/Projects/Projects";
import Contacts from "./routes/Contacts/Contacts";

const drawerWidth = '240px';

const sidebarItems = [
  { name: 'Home', link: '/' },
  { name: 'About Me', link: '/about' },
  { name: 'Projects', link: '/projects' },
  { name: 'Contact Me', link: '/contacts' }
]

export default function App() {
  return (
    <>
      <Box>
        <CssBaseline />
        <Sidebar sideBarItems={sidebarItems} >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Sidebar>
      </Box>
    </>
  );
}

/*
<Box>
        <Container>

        </Container>
      </Box>
 */
