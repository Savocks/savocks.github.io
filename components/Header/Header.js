import Image from 'next/image';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  useScrollTrigger,
} from '@mui/material';
import cn from 'classnames';
import { theme } from '../../theme/theme';

function Header(props) {
  const trigger = useScrollTrigger({ threshold: 0, disableHysteresis: true });
  return (
    <AppBar
      elevation={trigger ? 4 : 0}
      sx={{
        bgcolor: trigger ? 'background.default' : 'transparent',
        transition: theme.transitions.create(['background-color', 'height']),
      }}
    >
      <Toolbar
        sx={{
          height: trigger ? 80 : 100,
        }}
      >
        <Avatar
          src="/images/logo_white.png"
          alt="Giulio Savoca"
          sx={{
            width: trigger ? 45 : 60,
            height: trigger ? 45 : 60,
            transition: theme.transitions.create(['height', 'width']),
          }}
        />
        <Box component="nav" sx={{ ml: 'auto', display: 'flex', gap: 4 }}>
          <Button>Home</Button>
          <Button>Experience & Work</Button>
          <Button>About Me</Button>
          <Button>Blog</Button>
          <Button>Contact Me</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
