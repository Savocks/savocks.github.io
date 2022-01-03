import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useTheme } from "@mui/material";

export default function SocialIcon({ children, color, link }) {
  const theme = useTheme()
  const primaryColor = theme.palette.primary.main;
  const [hover, setHover] = useState(false);
  const props = useSpring({
    color: hover ? color : primaryColor,
  });
  return (
    <animated.a
      href={link}
      target="_blank"
      style={{
        cursor: 'pointer',
        ...props
      }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {children}
    </animated.a>
  );
}
