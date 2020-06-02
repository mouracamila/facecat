import styled from "styled-components";

export const Container = styled.nav`
  border-bottom: 1px solid #e6ecf0;
  padding: 10px 15px;
  background-color: #fff;

  a {
    text-decoration: none;
    color: cornflowerblue;
    font-size: 18px;
    font-weight: bold;
    margin-left: 20px;

    &:first-child {
      margin: 0;
    }

    &.active {
      color: #1f2226;
    }
  }
`;
