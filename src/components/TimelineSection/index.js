import React from "react";

import Navigation from "../Navigation";
import Post from "../Post";

import { Container } from "./styles";

function TimelineSection(props) {
  const { posts } = props;

  return (
    <Container>
      <Navigation />
      <ul className="tweets">
        {posts.map((post) => (
          <Post key={post} />
        ))}
      </ul>
    </Container>
  );
}

export default TimelineSection;
