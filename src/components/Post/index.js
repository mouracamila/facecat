import React from "react";
import { Container } from "./styles";

import { FiMessageSquare, FiRefreshCcw, FiHeart } from "react-icons/fi";

function Post() {
  return (
    <Container>
      <img src="http://placekitten.com/g/60/60" alt="" />
      <div className="info">
        <strong>
          Bob missi <span>@CatBob</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            dolor cupiditate sunt a temporibus aliquid autem iste commodi.
          </p>
          <div className="imgContent">
            <img src="http://placekitten.com/g/300/300" alt="" />
          </div>
          <div className="actions">
            <a href="-">
              <FiMessageSquare size={14} /> 3
            </a>
            <a href="-">
              <FiRefreshCcw size={14} /> 4
            </a>
            <a href="-">
              <FiHeart size={14} /> 2
            </a>
          </div>
        </strong>
      </div>
    </Container>
  );
}

export default Post;
