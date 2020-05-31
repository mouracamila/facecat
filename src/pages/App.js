import React from "react";

import "./styles.css";

import {
  FiHome,
  FiBell,
  FiMessageSquare,
  FiGithub,
  FiMoreVertical,
  FiSearch,
  FiMapPin,
  FiLink,
  FiClock,
  FiHeart,
  FiImage,
} from "react-icons/fi";

function App() {
  return (
    <>
      <header id="main-header">
        <div className="content">
          <nav>
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
          </nav>
          <FiGithub size={18} />
          <div className="side">
            <input type="text" placeholder="Search on FaceCat " />
            <FiSearch />
            <img src="http://placekitten.com/g/200/200" alt="User Img" />
            <button>Meow</button>
          </div>
        </div>
      </header>
      <div className="banner">
        <h1>FaceCat Social Network </h1>
      </div>
      <div className="bar">
        <div className="content">
          <ul>
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
          </ul>
          <div class="actions">
            <button>Prrru</button>
            <FiMoreVertical />
          </div>
        </div>
      </div>
      <div className="wrapper-content content">
        <aside className="profile">
          <img
            className="avatar"
            src="http://placekitten.com/g/200/200"
            alt="User Img"
          />
          <h1>Fredy</h1>
          <span>@CatFredy</span>
          <p className="about">
            Lorem ipsum #dolor sit amet consectetur #adipisicing elit. Ad
            assumenda error non cum culpa sint
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
          <div className="widget followers">
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
            </ul>
          </div>
          <div className="widget images">
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
          </div>
        </aside>
        <section className="timeline">timeline</section>
        <aside className="widgets">widgets</aside>
      </div>
    </>
  );
}

export default App;
