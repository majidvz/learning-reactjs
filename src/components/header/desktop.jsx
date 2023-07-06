import React from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import { HeaderContainer } from "./desktop-styles";

const { Search } = Input;

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
          <Link to="/Majid">Home</Link>
        </Button>
      </div>

      <div className="container">
        <Button icon={<ShoppingCartOutlined />} style={{ marginRight: 16 }}>
          Cart (0)
        </Button>
        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          style={{ width: 200, marginRight: 0 }}
        />
      </div>
    </HeaderContainer>
  );
};
