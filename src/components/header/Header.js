import React from "react";
import './header.scss';
import Navbar from "./Navbar/Navbar";
import Logo from "./Logo/Logo";

export function Header() {
  return (
    <header className="Header">
      <Logo />
      <Navbar/>
    </header>
  )
}
