import { ProductCard } from "../card";
import { Container } from "./list-styles";

export const ProductList = ({ products }) =>
  products.map((product) => (
    <Container key={product.id} sm={24} lg={8} style={{ width: "100%" }}>
      <ProductCard product={product} />
    </Container>
  ));
