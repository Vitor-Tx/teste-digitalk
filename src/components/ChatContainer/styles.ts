import styled from "styled-components";

export const Container = styled.div`
  width: 374px;
  background-color: white;
  min-height: 300px;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  position: absolute;
  right: 32px;
  bottom: 32px;
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 0.428571rem 0px;

  @media (max-width: 576px) {
    position: relative;
    right: unset;
    bottom: unset;
    max-width: calc(100vw - 32px);
  }

  header {
    background-color: #9b6be8;
    border-radius: 16px 16px 0 0;
    min-height: 48px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  img {
    width: 16px;
    height: 16px;
    right: 16px;
    position: absolute;
    cursor: pointer;
  }

  input {
    height: 34px;
    width: 100%;
    font-size: 12px;
    padding: 8px 16px;
    border-radius: 3px;
    border: none;
    outline: none;
  }
`;
