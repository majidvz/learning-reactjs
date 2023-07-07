import { useEffect, useState } from "react";
import { Row } from "antd";

import { Container } from "./home-styles";

import { ProductList, productService } from "../../components";

export const Home = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    productService.getAllProducts().then(({ data }) => setProducts(data));
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
    return <h1>Loading...</h1>;
  }
};
