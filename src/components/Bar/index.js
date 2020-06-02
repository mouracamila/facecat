import React from "react";
import { Container, Counter } from "./styles";
import { FiMoreVertical } from "react-icons/fi";

function Bar() {
  return (
    <Container>
      <div className="content">
        <Counter>
          <li className="active">
            <span>Meows</span>
            <strong>123</strong>
          </li>
          <li>
            <span>Prrruwings</span>
            <strong>23</strong>
          </li>
          <li>
            <span>Prruwers</span>
            <strong>13</strong>
          </li>
          <li>
            <span>Favorites</span>
            <strong>80</strong>
          </li>
        </Counter>
        <div className="actions">
          <button>Prrru</button>
          <FiMoreVertical />
        </div>
      </div>
    </Container>
  );
}

export default Bar;
