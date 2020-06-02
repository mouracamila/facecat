import React from "react";
import { Container, WidgetTrends } from "./styles";
import { FiX, FiGithub } from "react-icons/fi";

function Widgets() {
  return (
    <Container>
      <div className="widget follow ">
        <div className="title">
          <strong>Who to Follow</strong>
          <a href="-">Refresh</a>
          <a href="-">View all</a>
        </div>
        <ul>
          <li>
            <div className="profile">
              <img
                className="avatar"
                src="http://placekitten.com/g/100/100"
                alt="User Img"
              />
              <div className="info">
                <strong>
                  Spade <span>@spade_be</span>
                </strong>
                <button>Follow</button>
              </div>
            </div>
            <a href="-">
              <FiX />
            </a>
          </li>
          <li>
            <div className="profile">
              <img
                className="avatar"
                src="http://placekitten.com/g/50/50"
                alt="User Img"
              />
              <div className="info">
                <strong>
                  Spade <span>@spade_be</span>
                </strong>
                <button>Follow</button>
              </div>
            </div>
            <a href="-">
              <FiX />
            </a>
          </li>
          <li>
            <div className="profile">
              <img
                className="avatar"
                src="http://placekitten.com/g/100/100"
                alt="User Img"
              />
              <div className="info">
                <strong>
                  Spade <span>@spade_be</span>
                </strong>
                <button>Follow</button>
              </div>
            </div>
            <a href="-">
              <FiX />
            </a>
          </li>
        </ul>
        <div className="findFriends">
          <a href="-">
            <FiGithub />
            Find cat friends
          </a>
        </div>
      </div>
      <WidgetTrends>
        <div className="title">
          <strong>Popular</strong>
          <a href="-">Change</a>
        </div>
        <div className="trends">
          <ul>
            <li>
              <strong>#CatScratcher</strong>
            </li>
            <li>
              <strong>#CatNip</strong>
            </li>
            <li>
              <strong>#CatFood</strong>
            </li>
            <li>
              <strong>#CatSllep</strong>
            </li>
          </ul>
        </div>
      </WidgetTrends>
    </Container>
  );
}

export default Widgets;
