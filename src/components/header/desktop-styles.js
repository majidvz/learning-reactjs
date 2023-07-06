import { Layout } from "antd";
import { styled } from "styled-components";

const { Header } = Layout;

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
  }
`;
