import React from "react";

import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Bar from "../../components/Bar";
import ProfileSection from "../../components/ProfileSection";
import Widgets from "../../components/Widgets";
import TimelineSection from "../../components/TimelineSection";

import { Container } from "./styles";

function App() {
  const posts = [1, 2, 3, 4, 5];

  return (
    <Container>
      <Header />
      <Banner />
      <Bar />
      <div className="wrapper-content content">
        <ProfileSection />
        {posts && <TimelineSection posts={posts} />}
        <Widgets />
      </div>
    </Container>
  );
}
export default App;
