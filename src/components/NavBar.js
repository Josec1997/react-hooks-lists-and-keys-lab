import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkTag= links.map((link) => {
    return <a key={link} href={link.id}>{link}</a>
  })

  return <nav>{/* display an <a> tag for each link here */}</nav>;
}

export default NavBar;
