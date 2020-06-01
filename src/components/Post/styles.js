import styled from "styled-components";

export const Container = styled.li`
  li {
    border-bottom: 1px solid #e6ecf0;
    background-color: #fff;
    padding: 10px 15px;
    display: flex;
    margin-top: 5px;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      flex: 1;
    }

    .info {
      margin-left: 10px;
      display: flex;
      flex-direction: column;

      strong {
        font-size: 14px;
        color: #1f2226;

        span {
          font-weight: normal;
          font-size: 13px;
          color: cornflowerblue;
        }
      }

      p {
        font-size: 14px;
        color: #1f2226;
        font-weight: normal;
        margin-top: 5px;
      }

      .imgContent img {
        padding: 10px;
        border-radius: 3px;
        width: auto;
        height: 100%;
        border-radius: 0;
        flex: 0;
      }
    }

    .actions {
      display: flex;
      margin: 15px 0 15px;
      flex-direction: row-reverse;

      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #667580;
        font-weight: bold;
        font-size: 12px;
        margin-right: 10px;

        &:first-child {
          margin-left: 0;
        }

        svg {
          margin-right: 2px;
        }
      }
    }
  }
`;
