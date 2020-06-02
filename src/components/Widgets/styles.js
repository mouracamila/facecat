import styled from "styled-components";

export const Container = styled.aside`
  width: 290px;
  margin-top: 10px;

  .widget {
    background: #fff;
    padding: 15px;

    .title {
      display: flex;
      align-items: baseline;

      strong {
        font-size: 18px;
        color: #1f2226;
      }

      a {
        color: cornflowerblue;
        font-size: 12px;
        text-decoration: none;
        position: relative;
        padding-left: 10px;

        &::before {
          content: "";
          width: 2px;
          height: 2px;
          border-radius: 50%;
          margin-left: 5px;
          margin-right: 5px;
          background: #000;
          position: absolute;
          left: 0;
          top: 6px;
        }
      }
    }
  }

  .follow {
    ul {
      list-style: none;
      margin-top: 10px;

      li {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccd6dd;
        padding-bottom: 10px;
        margin-bottom: 10px;

        svg {
          color: #53626c;
        }

        .profile {
          display: flex;
          align-items: center;

          img {
            width: 48px;
            height: 48px;
            border-radius: 50%;
          }

          .info {
            margin-left: 10px;
            display: flex;
            flex-direction: column;

            strong {
              font-size: 14px;
              color: #1f2226;

              span {
                font-size: normal;
                color: #9a9a9a;
              }
            }

            button {
              height: 27px;
              background: #fff;

              display: flex;
              align-items: center;
              justify-content: center;

              width: 90px;
              font-weight: bold;
              font-size: 14px;
              color: cornflowerblue;
              border: 1px solid cornflowerblue;
              border-radius: 16px;
              margin-top: 4px;
            }
          }
        }
      }
    }
  }
  .findFriends {
    flex-direction: row;
    align-items: center;

    a {
      color: cornflowerblue;
      text-decoration: none;
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const WidgetTrends = styled.div`
  background: #fff;
  margin-top: 10px;
  padding: 15px;

  .title {
    display: flex;
    align-items: baseline;
    font-size: 18px;
    color: #1f2226;
  }

  a {
    color: cornflowerblue;
    font-size: 12px;
    text-decoration: none;
    position: relative;
    padding-left: 10px;

    &::before {
      content: "";
      width: 2px;
      height: 2px;
      border-radius: 50%;
      margin-left: 5px;
      margin-right: 5px;
      background: #000;
      position: absolute;
      left: 0;
      top: 6px;
    }
  }

  ul {
    margin-top: 10px;
    list-style: none;
    font-size: 16px;

    li {
      margin-top: 4px;
      color: cornflowerblue;
      font-size: 14px;
    }
  }
`;
