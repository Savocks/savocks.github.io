import React, { useState } from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./social-buttons.scss";
import { useSpring, animated } from "react-spring";

function AnimatedSocialButton({ link, colorForTransition, children }) {
  const [mouseEnter, setMouseEnter] = useState(false);
  const props = useSpring({color: mouseEnter ? colorForTransition : '#FFF'});
  return (
    <animated.a
      className="Link"
      rel="noreferrer"
      href={link}
      target="_blank"
      style={props}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      {children}
    </animated.a>
  )
}

export function SocialButtons() {
  return (
    <div className="SocialButtons">
      <span className="Icon">
        <AnimatedSocialButton
          link="https://www.linkedin.com/in/giulio-savoca-09b205142"
          colorForTransition="#0a66c2">
          <FaLinkedin/>
        </AnimatedSocialButton>
      </span>
      <span className="Icon">
        <AnimatedSocialButton
          link="https://www.facebook.com/profile.php?id=100014206569050"
          colorForTransition="#1877f2">
          <FaFacebookSquare/>
        </AnimatedSocialButton>
      </span>
      <span className="Icon">
        <AnimatedSocialButton
          link="https://www.instagram.com/savocks/"
          colorForTransition="#c32aa3"
        >
          <FaInstagram/>
        </AnimatedSocialButton>
      </span>
    </div>
  );
}
