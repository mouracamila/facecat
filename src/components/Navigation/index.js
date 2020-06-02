import React from "react";

import { Container } from "./styles";

function Navigation() {
  return (
    <Container>
      <a href="-" className="active">
        Meows
      </a>
      <a href="-">Meows and replies</a>
      <a href="-">Medias</a>
    </Container>
  );
}

export default Navigation;
