import styled from "styled-components";

export const Container = styled.header`
  height: 46px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 1;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  svg {
    color: cornflowerblue;
  }
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      font-size: 13px;
      color: #667580;
      font-weight: bold;
      margin-left: 30px;

      &:first-child {
        margin: 0;
      }

      svg {
        margin-right: 7px;
      }
    }
  }
`;

export const Side = styled.div`
  display: flex;

  input {
    background: #f5f8fa no-repeat center;
    border: 1px solid #e6ecf0;
    height: 34px;
    padding: 0 12px;
    border-radius: 16px;
    color: #667581;
    font-size: 12px;
  }

  svg {
    color: #667581;
    height: 34px;
  }

  button {
    height: 34px;
    background: cornflowerblue;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 90px;
    font-weight: bold;
    font-size: 14px;

    color: #fff;
    border: 0;
    border-radius: 16px;
  }
`;

export const Avatar = styled.img`
  height: 34px;
  width: 34px;
  border-radius: 50%;
  margin: 0 15px;
`;
