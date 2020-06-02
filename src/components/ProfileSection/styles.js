import styled from "styled-components";

export const Container = styled.aside`
  width: 260px;

  .avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 3px solid #fff;
    margin-top: -130px;
  }

  h1 {
    font-size: 21px;
    color: #1f2226;
    margin-top: 10px;
  }

  span {
    font-size: 14px;
    color: #53626c;
    margin-top: 10px;
  }

  .about {
    font-size: 14px;
    color: #1f2226;
    margin-top: 15px;
  }

  ul {
    margin-top: 20px;
    list-style: none;

    &.list {
      li {
        font-size: 14px;
        color: #53626c;
        display: flex;
        align-items: center;
        margin-top: 5px;
      }
    }

    li {
      svg {
        margin-right: 10px;
      }
    }
  }
`;

export const Widget = styled.div`
  margin-top: 20px;

  strong {
    font-weight: normal;
    color: cornflowerblue;
    font-size: 14px;
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
      color: #53626c;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;

    li {
      margin: 0 5px 5px 0;
      background: #d0d5d9;
    }
  }
`;

export const Followers = styled(Widget)`
  ul {
    align-content: flex-start;
    align-items: flex-start;

    li {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      flex: 0 auto;
    }
  }
`;

export const Images = styled(Widget)`
  ul {
    align-items: center;

    li {
      width: 80px;
      height: 80px;
      border-radius: 8px;
      flex: 1 0 auto;
    }
  }
`;
