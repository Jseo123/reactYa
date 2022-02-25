import React from "react";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <nav>
      <button>INICIO</button>
      <div>
        <button>Soy cliente</button>
        <button>Soy administrador</button>
      </div>
    </nav>
  );
}
