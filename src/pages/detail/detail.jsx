import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Col, Image, Typography, Button, Row } from "antd";

import { Price, productService } from "../../components";

export const Detail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();

  const { Title, Paragraph } = Typography;

  useEffect(() => {
    productService.getProductById(id).then(({ data }) => {
      setProduct(data);
    });
  }, [id]);

  if (product) {
    return (
      <Row gutter={[16, 16]}>
        <Col sm={24} lg={10}>
          <Image width={"100%"} src={product.pic} alt={product.title} />
        </Col>

        <Col sm={24} lg={14}>
          <Title>{product.title}</Title>

          <Paragraph>{product.desc}</Paragraph>

          <div className="price">
            <Price type="success" strong={true}>
              {product.price}
            </Price>

            <Button type="primary" size="large">
              Add to Cart
            </Button>
          </div>
        </Col>
      </Row>
    );
  }
  return <div></div>;
};
