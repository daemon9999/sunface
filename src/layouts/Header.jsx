import Logo from "src/components/header/Logo";
import React from "react";

import Navbar from "src/components/header/Navbar";
import Actions from "src/components/header/Actions";
import useResponsive from "src/hooks/useResponsive";
import HamburgerButton from "src/components/common/HamurgerMenu";

const Header = () => {
  const isDesktop = useResponsive("xl");
  const isTablet = useResponsive("md");
  return (
    <header className="bg-main-2">
      <div className="container w-5/6 mx-auto py-4 flex items-center justify-between ">
        <Logo />
        {isTablet ? (
          <>
            <Navbar />
            <Actions />
          </>
        ) : <HamburgerButton/>}
      
      </div>
    </header>
  );
};

export default Header;
