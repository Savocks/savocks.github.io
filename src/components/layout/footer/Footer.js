import React from 'react';
import { SocialButtons } from "./social-buttons/SocialButtons";
import { Contact } from "./contact/Contact";
import { Author } from "./author/author";

import './footer.scss';




export function Footer() {
  return (
    <footer className="Footer">
      <Author/>
      <Contact/>
      <SocialButtons/>
    </footer>
  );
}
