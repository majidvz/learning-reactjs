import { useEffect, useState } from "react";
import { Row } from "antd";

import { ListSkeleton, ProductList, productService } from "../../components";

import { Container } from "./home-styles";

export const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    productService
      .getAllProducts()
      .then(({ data }) => setProducts(data))
      .catch(() => {
        setProducts([]);
      });
  }, []);

  if (products) {
    return (
      <Container>
        <Row gutter={[16, 16]}>
          <ProductList products={products} />
        </Row>
      </Container>
    );
  } else {
    return (
      <Container>
        <Row gutter={[16, 16]}>
          <ListSkeleton />
        </Row>
      </Container>
    );
  }
};
