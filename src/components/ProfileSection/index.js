import React from "react";

import {
  FiMapPin,
  FiLink,
  FiClock,
  FiHeart,
  FiGithub,
  FiImage,
} from "react-icons/fi";

import { Container, Followers, Images } from "./styles";

function ProfileSection() {
  return (
    <Container>
      <img
        className="avatar"
        src="http://placekitten.com/g/200/200"
        alt="User Img"
      />
      <h1>Fredy</h1>
      <span>@CatFredy</span>
      <p className="about">
        Lorem ipsum #dolor sit amet consectetur #adipisicing elit. Ad assumenda
        error non cum culpa sint
      </p>
      <ul className="list">
        <li>
          <FiMapPin />
          <p>City, País</p>
        </li>
        <li>
          <FiLink />
          <p>exibit.be</p>
        </li>
        <li>
          <FiClock />
          <p>Joined June 2018</p>
        </li>
        <li>
          <FiHeart />
          <p>Born the 20th of June 2000</p>
        </li>
      </ul>
      <Followers>
        <strong>
          <FiGithub />
          13 Prruwers
        </strong>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Followers>
      <Images>
        <strong>
          <FiImage />
          68 Photos and Videos
        </strong>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Images>
    </Container>
  );
}

export default ProfileSection;
