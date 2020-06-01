import styled from "styled-components";

export const Container = styled.div`
  height: 59px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 285px;
    height: 100%;

    .actions {
      display: flex;
      align-items: center;

      svg {
        color: #667580;
        margin-left: 20px;
      }
    }

    button {
      height: 34px;
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
    }
  }
`;
export const Counter = styled.ul`
  display: flex;
  list-style: none;
  height: 100%;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    position: relative;

    .active::after {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      bottom: 0;
      left: 0;
      background: cornflowerblue;
    }

    span {
      color: #667580;
      font-size: 12px;
      font-weight: bold;
    }

    strong {
      color: #667580;
      font-size: 18px;
      font-weight: bold;
      margin-top: 2px;

      .active {
        color: cornflowerblue;
      }
    }
  }
`;
