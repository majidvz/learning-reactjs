import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import { Container, SearchElement } from "./search-box-styles";

export const SearchBox = ({ isVisible, close }) => {
  const onSearch = (value) => console.log(value);

  return (
    <Container isvisible={isVisible.toString()}>
      <SearchElement
        placeholder="Search..."
        allowClear
        onSearch={onSearch}
        size="large"
      ></SearchElement>

      <Button
        icon={<CloseOutlined />}
        size="large"
        className="close-button"
        onClick={close}
      />
    </Container>
  );
};
