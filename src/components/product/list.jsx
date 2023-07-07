import { Col } from "antd";

import { ProductCard } from "./card";

export const ProductList = ({ products }) =>
  products.map((product) => (
    <Col span={8}>
      <ProductCard product={product} />
    </Col>
  ));
