import React from 'react';
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { styled, keyframes  } from "@mui/material";
import SocialIcon from "./SocialIcons/SocialIcon";

const facebookProfileLink = 'https://www.facebook.com/profile.php?id=100014206569050';
const instagramProfileLink = 'https://www.instagram.com/savocks/';
const linkedInProfileLink = 'https://www.linkedin.com/in/giulio-savoca-09b205142/';

const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  color: ${props => props.theme.palette.primary.main}
`;

export default function SocialButtons(props) {
  return (
    <Wrapper>
      <SocialIcon color="#1877f2" link={facebookProfileLink}>
        <Facebook />
      </SocialIcon>
      <SocialIcon color="#c32aa3" link={instagramProfileLink}>
        <Instagram />
      </SocialIcon>
      <SocialIcon color="#0a66c2" link={linkedInProfileLink}>
        <LinkedIn />
      </SocialIcon>
    </Wrapper>
  );
}
