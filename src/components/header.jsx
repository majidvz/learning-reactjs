import React from "react";
import { Menu } from "antd";
import { HomeOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons";

export const Header = () => {
  return (
    <header>
      <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
        <Menu.Item key="home">Home</Menu.Item>
      </Menu>
    </header>
  );
};
