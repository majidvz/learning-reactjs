import { Layout, Input } from "antd";
import { styled } from "styled-components";

const { Header } = Layout;

const { Search } = Input;
export const HeaderContainer = styled(Header)`
  padding: 0 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;

  .container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
  }
`;

export const SearchContainer = styled(Search)`
  width: 200px;
`;
