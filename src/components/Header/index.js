import React from "react";
import {
  FiBell,
  FiHome,
  FiMessageSquare,
  FiGithub,
  FiSearch,
} from "react-icons/fi";

import { Container, Side, Avatar, Navigation } from "./styles";

function Header() {
  return (
    <Container>
      <div className="content">
        <Navigation>
          <ul>
            <li>
              <FiHome />
              Home
            </li>
            <li>
              <FiBell />
              Notification
            </li>
            <li>
              <FiMessageSquare />
              Messagens
            </li>
          </ul>
        </Navigation>
        <FiGithub size={18} />
        <Side>
          <input type="text" placeholder="Search on FaceCat " />
          <FiSearch />
          <Avatar src="http://placekitten.com/g/200/200" alt="User Img" />
          <button>Meow</button>
        </Side>
      </div>
    </Container>
  );
}
export default Header;
