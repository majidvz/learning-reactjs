import { CardSkeleton } from "../card";
import { Container } from "./list-styles";

export const ListSkeleton = () => {
  const items = Array.from({ length: 6 }, (_, index) => index + 1);

  return items.map((_, index) => (
    <Container sm={24} lg={8} style={{ width: "100%" }} key={index}>
      <CardSkeleton />
    </Container>
  ));
};
