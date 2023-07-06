import { useState, useEffect } from "react";

import { DesktopMode } from "./desktop";
import { PhoneMode } from "./phone";

export const Header = () => {
  const [isDesktop, setIsDesktop] = useState();

  useEffect(() => {
    const changeScreenWidthHandler = () => {
      const screenWidth = window.screen.width;
      const isDesktop = screenWidth >= 992 ? true : false;

      isDesktop ? setIsDesktop(true) : setIsDesktop(false);
    };
    window.addEventListener("resize", changeScreenWidthHandler);
  }, []);

  if (isDesktop) {
    return <DesktopMode />;
  } else {
    return <PhoneMode />;
  }
};
