import { Input } from "antd";
import styled from "styled-components";

const { Search } = Input;

export const Container = styled.div`
  width: calc(100vw - 64px);
  position: fixed;
  top: ${({ isvisible }) => (isvisible === "true" ? 0 : -64)}px;
  left: 0;
  z-index: 10;
  height: 64px;
  padding: 0 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  gap: 16px;
  transition: all ease-in-out 0.3s;

  .close-button {
    width: 40px !important;
  }
`;

export const SearchElement = styled(Search)`
  width: calc(100% - 56px);
`;
