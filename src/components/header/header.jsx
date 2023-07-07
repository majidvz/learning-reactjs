import { useState, useEffect } from "react";

import { DesktopMode } from "./desktop";
import { PhoneMode } from "./phone";

export const Header = () => {
  const desktopBreakPoint = 992;
  const screenWidth = window.screen.width;
  const [isDesktop, setIsDesktop] = useState(
    screenWidth >= desktopBreakPoint ? true : false
  );

  useEffect(() => {
    const changeScreenWidthHandler = () => {
      const screenWidth = window.screen.width;
      const isDesktop = screenWidth >= desktopBreakPoint ? true : false;

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
