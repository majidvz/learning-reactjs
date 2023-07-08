import { Card, Skeleton } from "antd";
import { styled } from "styled-components";

export const CardSkeleton = () => {
  return (
    <Container>
      <Skeleton.Image active loading />
      <Skeleton active style={{ width: "100%" }} loading />
    </Container>
  );
};

const Container = styled(Card)`
  .ant-skeleton {
    width: 100%;
    height: 240px;

    & > .ant-skeleton-image {
      width: 100%;
      height: 100%;
    }
  }
`;
