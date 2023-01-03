import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: white;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    border: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  box-sizing: border-box;
  padding: 24px;
  gap: 10px;
  overflow-y: hidden;

  @media (max-width: 576px) {
    min-height: 400px;
  }
  p {
    margin: 24px 0;
  }
  footer {
    background-color: #9b6be8;
    height: 32px;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    position: relative;
    form {
      width: 100%;
      div {
        width: 100%;
      }
    }
    input {
      background: #fafafa;
      color: #0000007e;
      border: 1px solid #e1e1e1;
      box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.07);
      height: 34px;
      width: 100%;
      font-size: 12px;
      padding: 8px 16px;
      border-radius: 3px;
      border: none;
      outline: none;
    }
  }

  .chat-bubbles {
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: scroll;
  }
`;
