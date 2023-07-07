import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";

import { HeaderContainer } from "./phone-styles";
import { SearchBox } from "./search-box";

export const PhoneMode = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const searchVisiblityHandler = () => {
    console.log(isSearchVisible);
    isSearchVisible ? setIsSearchVisible(false) : setIsSearchVisible(true);
  };

  const closeSearchBox = () => {
    setIsSearchVisible(false);
  };

  return (
    <>
      <HeaderContainer>
        <Link className="logo" to="/">
          <img src="/images/logo.svg" alt="Logo" height={32} />
        </Link>

        <div className="container">
          <Button icon={<ShoppingCartOutlined />} size="large">
            Cart (0)
          </Button>
          <Button
            icon={<SearchOutlined />}
            size="large"
            onClick={searchVisiblityHandler}
          ></Button>
        </div>
      </HeaderContainer>

      <SearchBox isVisible={isSearchVisible} close={closeSearchBox} />
    </>
  );
};
