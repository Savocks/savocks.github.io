import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components";
import { IconButton, Link } from "gatsby-theme-material-ui";
import { animated, useSpring } from "react-spring";


const ButtonsWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2em;
`;

const AnimatedIconButton = animated(IconButton);

function SocialButton({ icon, color, link }) {
  const [hover, setHover] = useState(false);
  const styles = useSpring( {
    color: hover ? color : '#fff'
  })

  return (
    <>
      <AnimatedIconButton
        href={link}
        style={styles}
        target="_blank"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <FontAwesomeIcon
          icon={icon}
        />
      </AnimatedIconButton>
    </>
  )
}

export default function SidebarFooter({ socialButtons }) {
  return (
    <>
      <ButtonsWrapper>
        {
          socialButtons.map(
            ({ icon, color, link, name } ) => <SocialButton key={name} icon={icon} link={link} color={color}/>
          )
        }
      </ButtonsWrapper>
    </>
  );
}
