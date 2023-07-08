import { Link } from "react-router-dom";
import { Card } from "antd";

import { Price, Image } from "./card-styles";

const { Meta } = Card;

export const ProductCard = ({ product }) => {
  return (
    <Link to={`/detail/${product.id}`}>
      <Card
        hoverable
        cover={
          <Image className="cover" alt={product.title} src={product.pic} />
        }
      >
        <Meta title={product.title} />
        <Price type="success" strong={true}>
          {product.price}
        </Price>
      </Card>
    </Link>
  );
};
