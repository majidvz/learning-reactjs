import { Typography } from "antd";
import { styled } from "styled-components";

const { Text } = Typography;

export const Price = styled(Text)`
  display: block;
  margin-top: 8px;
  font-size: 20px;
`;

export const Image = styled.img`
  width: auto !important;
  max-width: calc(100% - 32px);
  margin: 16px auto;
  height: 300px;
`;
