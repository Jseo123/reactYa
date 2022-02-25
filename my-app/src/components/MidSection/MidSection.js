import React from "react";
import Title from "../Title";
import "./midSection.scss";

export default function MidSection({ text }) {
  const title = "¿Que es pide Ya?";
  return (
    <section className="midSec">
      <Title title={title} />
      <p>{text}</p>
    </section>
  );
}
