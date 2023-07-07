import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import { HeaderContainer, SearchContainer } from "./desktop-styles";

export const DesktopMode = () => {
  const onSearch = (value) => console.log(value);

  return (
    <HeaderContainer>
      <div className="container">
        <Link
          className="logo"
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
          <Link to="/">Home</Link>
        </Button>
      </div>

      <div className="container">
        <Button icon={<ShoppingCartOutlined />}>Cart (0)</Button>
        <SearchContainer
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
        ></SearchContainer>
      </div>
    </HeaderContainer>
  );
};
