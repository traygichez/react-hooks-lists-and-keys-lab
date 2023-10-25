import React from "react";

import links from "./Links";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{links.map((link,index)=>(
  <a key={link} href={`#${link}`}>
    {link}
  </a>
  ))}</nav>;
};

export default NavBar;
