import React from "react";
import "./NavBar.scss";
import Button from "../Button";

export default function NavBar() {
  return (
    <nav>
      <Button text="INICIO" />
      <div className="sideNav">
        <Button text="Soy cliente" />
        <Button text="Soy administrador" />
      </div>
    </nav>
  );
}
