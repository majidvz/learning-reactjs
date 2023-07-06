import React from "react";
import { Layout, Input, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Header = () => {
  const { Header } = Layout;
  const { Search } = Input;

  const headerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  };

  const onSearch = (value) => console.log(value);

  return (
    <Header style={headerStyle}>
      <Container gutter={16}>
        <Link
          to="/"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 16,
          }}
        >
          <img src="/images/logo.svg" alt="Logo" height={32} />
        </Link>

        <Button type="text">
          <Link to="/Majid">Home</Link>
        </Button>
      </Container>

      <Container>
        <Button icon={<ShoppingCartOutlined />} style={{ marginRight: 16 }}>
          Cart (0)
        </Button>
        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          style={{ width: 200, marginRight: 0 }}
        />
      </Container>
    </Header>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
