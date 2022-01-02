import Container from "@mui/material/Container";
import { Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { Box, CssBaseline, Divider, Drawer, Paper, Toolbar, Typography } from "@mui/material";
import logo from './images/logo.png';
import Home from "./routes/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";

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
            <Route path="/about" element={<div>Hello About </div>} />
            <Route path="/projects" element={<div>Hello Projects </div>} />
            <Route path="/contacts" element={<div>Hello Contacts </div>} />
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
